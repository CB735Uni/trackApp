import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// dotenv may leave surrounding quotes — strip them
const API_KEY = (process.env.SERP_API_KEY || '').replace(/^["'\s]+|["'\s]+$/g, '');

// ── In-memory cache (10 min TTL) ──────────────────────────────────────────
const cache = new Map();
const CACHE_TTL = 10 * 60 * 1000;

async function cachedFetch(key, fn) {
  const hit = cache.get(key);
  if (hit && Date.now() - hit.ts < CACHE_TTL) return hit.data;
  const data = await fn();
  cache.set(key, { data, ts: Date.now() });
  return data;
}

async function serpFetch(params) {
  params.api_key = API_KEY;
  const url = `https://serpapi.com/search.json?${new URLSearchParams(params)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`SerpAPI ${res.status}: ${await res.text()}`);
  return res.json();
}

// ── Helpers ───────────────────────────────────────────────────────────────
const AU_STORES = ['coles', 'woolworths', 'aldi', 'iga', 'chemist warehouse',
                   'big w', 'kmart', 'target', 'costco', 'harris farm'];

function storeTag(name = '') {
  const n = name.toLowerCase();
  if (n.includes('coles'))       return 'coles';
  if (n.includes('woolworths'))  return 'woolworths';
  if (n.includes('aldi'))        return 'aldi';
  if (n.includes('iga'))         return 'iga';
  if (AU_STORES.some(s => n.includes(s))) return 'au';
  return null;
}

function parsePrice(str) {
  if (!str) return null;
  const n = parseFloat(str.replace(/[^0-9.]/g, ''));
  return isNaN(n) ? null : n;
}

// ── Routes ────────────────────────────────────────────────────────────────

// Search products on Google Shopping
app.get('/api/search', async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'q param required' });
  if (!API_KEY) return res.status(500).json({ error: 'SERP_API_KEY not configured' });

  try {
    const data = await cachedFetch(`search:${q}`, () =>
      serpFetch({ engine: 'google_shopping', q, gl: 'au', hl: 'en' })
    );

    const results = (data.shopping_results || []).map(r => ({
      title:       r.title,
      thumbnail:   r.thumbnail,
      price:       r.price,
      priceNum:    parsePrice(r.price),
      source:      r.source,
      rating:      r.rating ?? null,
      reviews:     r.reviews ?? null,
      token:       r.immersive_product_page_token ?? null,
      link:        r.link ?? null,
      multiSeller: !!r.multiple_sources,
    }));

    res.json({ results, query: q, error: data.error ?? null });
  } catch (err) {
    console.error('/api/search error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Get all sellers for a product via Google Product engine
app.get('/api/sellers', async (req, res) => {
  const { token } = req.query;
  if (!token) return res.status(400).json({ error: 'token param required' });
  if (!API_KEY) return res.status(500).json({ error: 'SERP_API_KEY not configured' });

  try {
    const data = await cachedFetch(`sellers:${token}`, () =>
      serpFetch({ engine: 'google_immersive_product', page_token: token })
    );

    const rawSellers = data.sellers ?? data.online_sellers ?? [];

    const sellers = rawSellers.map(s => ({
      name:       s.name,
      price:      s.base_price ?? s.price ?? null,
      priceNum:   parsePrice(s.base_price ?? s.price),
      totalPrice: s.total_price ?? s.additional_price?.total ?? null,
      link:       s.link ?? null,
      condition:  s.condition ?? s.details?.condition ?? 'New',
      tag:        storeTag(s.name),
    }));

    // Sort: known AU stores first, then cheapest
    sellers.sort((a, b) => {
      const aKnown = a.tag !== null;
      const bKnown = b.tag !== null;
      if (aKnown !== bKnown) return aKnown ? -1 : 1;
      return (a.priceNum ?? 9999) - (b.priceNum ?? 9999);
    });

    const info = data.product_results ?? null;

    res.json({
      sellers,
      product: info ? {
        title:       info.title,
        rating:      info.rating,
        reviews:     info.reviews,
        description: info.description ?? null,
        highlights:  info.highlights ?? [],
        specs:       info.specs ?? [],
        images:      (info.media ?? info.images ?? []).map(m => m.link ?? m).filter(Boolean),
      } : null,
    });
  } catch (err) {
    console.error('/api/sellers error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── Multi-store comparison ────────────────────────────────────────────────
app.get('/api/compare', async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'q param required' });
  if (!API_KEY) return res.status(500).json({ error: 'SERP_API_KEY not configured' });

  try {
    const [colesData, wooliesData] = await Promise.all([
      cachedFetch(`coles:${q}`, () =>
        serpFetch({ engine: 'google_shopping', q: `${q} Coles`, gl: 'au', hl: 'en' })
      ),
      cachedFetch(`woolies:${q}`, () =>
        serpFetch({ engine: 'google_shopping', q: `${q} Woolworths`, gl: 'au', hl: 'en' })
      ),
    ]);

    // Prefer a result whose source matches the store; fall back to first result
    const findBestMatch = (results, storeName) =>
      results.find(r => r.source?.toLowerCase().includes(storeName)) ?? results[0] ?? null;

    const colesMatch   = findBestMatch(colesData.shopping_results   || [], 'coles');
    const wooliesMatch = findBestMatch(wooliesData.shopping_results || [], 'woolworths');

    const fmt = r => r ? {
      title:     r.title,
      price:     r.price,
      priceNum:  parsePrice(r.price),
      link:      r.link ?? null,
      thumbnail: r.thumbnail ?? null,
      source:    r.source ?? null,
    } : null;

    res.json({ query: q, coles: fmt(colesMatch), woolworths: fmt(wooliesMatch) });
  } catch (err) {
    console.error('/api/compare error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── Catalog (catalog.json) ────────────────────────────────────────────────
const CATALOG_FILE = join(__dirname, 'catalog.json');

async function readCatalog() {
  try {
    return JSON.parse(await fs.readFile(CATALOG_FILE, 'utf8'));
  } catch {
    return [];
  }
}

async function writeCatalog(items) {
  await fs.writeFile(CATALOG_FILE, JSON.stringify(items, null, 2));
}

app.get('/api/catalog', async (_req, res) => {
  res.json(await readCatalog());
});

app.post('/api/catalog', express.json(), async (req, res) => {
  const item = req.body;
  if (!item?.name) return res.status(400).json({ error: 'name required' });

  const catalog = await readCatalog();
  const idx = catalog.findIndex(p => p.name.toLowerCase() === item.name.toLowerCase());
  const entry = { ...item, lastUpdated: new Date().toISOString() };

  if (idx >= 0) catalog[idx] = entry;
  else catalog.unshift(entry);

  await writeCatalog(catalog);
  res.json({ ok: true, entry });
});

app.delete('/api/catalog/:name', async (req, res) => {
  const name = decodeURIComponent(req.params.name);
  const catalog = await readCatalog();
  const next = catalog.filter(p => p.name !== name);
  await writeCatalog(next);
  res.json({ ok: true, removed: catalog.length - next.length });
});

// Serve static files (index.html, product.html, data.js, etc.)
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`\n  PriceCheck AU  →  http://localhost:${PORT}`);
  if (!API_KEY) {
    console.warn('  ⚠  SERP_API_KEY missing — add it to .env');
  } else {
    console.log(`  API key loaded  ✓`);
  }
  console.log();
});
