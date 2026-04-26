const products = [
  // ── DAIRY ──────────────────────────────────────────────────────────────────
  {
    name: "Full Cream Milk 2L", unit: "per 100mL", category: "Dairy",
    coles: 2.90, woolworths: 3.10, image: "🥛",
    description: "Fresh full cream milk sourced from Australian dairy farms. Rich and creamy with 3.5% fat content — perfect for drinking, cereals, hot drinks, and baking.",
    ingredients: "Full cream milk.",
    nutrition: { servingSize: "250mL", rows: [
      { label: "Energy",           per100: "268kJ",  perServing: "670kJ"  },
      { label: "Protein",          per100: "3.5g",   perServing: "8.8g"   },
      { label: "Fat, total",       per100: "3.9g",   perServing: "9.8g"   },
      { label: "— Saturated",      per100: "2.5g",   perServing: "6.3g"   },
      { label: "Carbohydrate",     per100: "4.8g",   perServing: "12.0g"  },
      { label: "— Sugars",         per100: "4.8g",   perServing: "12.0g"  },
      { label: "Dietary Fibre",    per100: "0g",     perServing: "0g"     },
      { label: "Sodium",           per100: "42mg",   perServing: "105mg"  },
      { label: "Calcium",          per100: "120mg",  perServing: "300mg"  },
    ]},
    allergens: ["Milk"], mayContain: [],
    alternatives: [
      { name: "A2 Full Cream Milk 2L",            price: "$4.50", note: "A2 protein only — easier to digest for some" },
      { name: "Organic Full Cream Milk 2L",        price: "$4.80", note: "Certified organic, pasture-raised" },
      { name: "Aldi Farmdale Full Cream Milk 2L",  price: "$2.49", note: "Great budget option" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 2.90, aisle: "Dairy & Eggs, Aisle 3",  inStock: true  },
      { store: "Woolworths", price: 3.10, aisle: "Dairy & Eggs, Aisle 4",  inStock: true  },
      { store: "IGA",        price: 3.20, aisle: "Dairy Section",           inStock: true  },
      { store: "Aldi",       price: 2.49, aisle: "Dairy Aisle",             inStock: true  },
    ]
  },
  {
    name: "Full Cream Milk 3L", unit: "per 100mL", category: "Dairy",
    coles: 4.20, woolworths: 3.99, image: "🥛",
    description: "Value-sized full cream milk for families and heavy milk users. Same fresh Australian full cream milk, just more of it.",
    ingredients: "Full cream milk.",
    nutrition: { servingSize: "250mL", rows: [
      { label: "Energy",        per100: "268kJ", perServing: "670kJ"  },
      { label: "Protein",       per100: "3.5g",  perServing: "8.8g"   },
      { label: "Fat, total",    per100: "3.9g",  perServing: "9.8g"   },
      { label: "— Saturated",   per100: "2.5g",  perServing: "6.3g"   },
      { label: "Carbohydrate",  per100: "4.8g",  perServing: "12.0g"  },
      { label: "— Sugars",      per100: "4.8g",  perServing: "12.0g"  },
      { label: "Sodium",        per100: "42mg",  perServing: "105mg"  },
      { label: "Calcium",       per100: "120mg", perServing: "300mg"  },
    ]},
    allergens: ["Milk"], mayContain: [],
    alternatives: [
      { name: "Full Cream Milk 2L",  price: "$2.90 (Coles)", note: "Smaller size, better value per litre at Coles" },
      { name: "Lite Milk 3L",        price: "$3.99",          note: "Reduced fat option" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 4.20, aisle: "Dairy & Eggs, Aisle 3", inStock: true },
      { store: "Woolworths", price: 3.99, aisle: "Dairy & Eggs, Aisle 4", inStock: true },
    ]
  },
  {
    name: "Cheddar Cheese 500g", unit: "per 100g", category: "Dairy",
    coles: 5.50, woolworths: 5.20, image: "🧀",
    description: "Mild to medium Australian cheddar cheese, perfect for sandwiches, melting on toast, grating over pasta, or adding to cheese boards.",
    ingredients: "Milk, salt, starter culture, non-animal rennet.",
    nutrition: { servingSize: "30g", rows: [
      { label: "Energy",        per100: "1690kJ", perServing: "507kJ"  },
      { label: "Protein",       per100: "25.0g",  perServing: "7.5g"   },
      { label: "Fat, total",    per100: "33.0g",  perServing: "9.9g"   },
      { label: "— Saturated",   per100: "21.0g",  perServing: "6.3g"   },
      { label: "Carbohydrate",  per100: "0.1g",   perServing: "<0.1g"  },
      { label: "— Sugars",      per100: "0.1g",   perServing: "<0.1g"  },
      { label: "Sodium",        per100: "630mg",  perServing: "189mg"  },
      { label: "Calcium",       per100: "720mg",  perServing: "216mg"  },
    ]},
    allergens: ["Milk"], mayContain: [],
    alternatives: [
      { name: "Bega Tasty Cheese 500g",    price: "$6.00", note: "Stronger cheddar flavour" },
      { name: "Cracker Barrel Vintage 500g", price: "$7.50", note: "Aged vintage cheddar" },
      { name: "Aldi Westacre Cheddar 500g", price: "$4.49", note: "Budget-friendly" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 5.50, aisle: "Dairy & Deli, Aisle 3",  inStock: true },
      { store: "Woolworths", price: 5.20, aisle: "Dairy & Eggs, Aisle 4",  inStock: true },
      { store: "Aldi",       price: 4.49, aisle: "Dairy Aisle",             inStock: true },
    ]
  },
  {
    name: "Greek Yoghurt 1kg", unit: "per 100g", category: "Dairy",
    coles: 4.00, woolworths: 4.00, image: "🫙",
    description: "Thick, creamy Greek-style yoghurt made from fresh Australian milk. High in protein and probiotics. Great on its own, with fruit, granola, or as a cooking ingredient.",
    ingredients: "Skim milk, cream, milk solids, live cultures (L. acidophilus, Bifidobacterium, L. casei).",
    nutrition: { servingSize: "200g", rows: [
      { label: "Energy",        per100: "390kJ",  perServing: "780kJ"  },
      { label: "Protein",       per100: "9.0g",   perServing: "18.0g"  },
      { label: "Fat, total",    per100: "3.5g",   perServing: "7.0g"   },
      { label: "— Saturated",   per100: "2.3g",   perServing: "4.6g"   },
      { label: "Carbohydrate",  per100: "5.5g",   perServing: "11.0g"  },
      { label: "— Sugars",      per100: "5.5g",   perServing: "11.0g"  },
      { label: "Sodium",        per100: "55mg",   perServing: "110mg"  },
      { label: "Calcium",       per100: "160mg",  perServing: "320mg"  },
    ]},
    allergens: ["Milk"], mayContain: [],
    alternatives: [
      { name: "Chobani Greek Yoghurt 900g", price: "$5.50", note: "Popular branded option, higher protein" },
      { name: "Jalna Greek Yoghurt 1kg",    price: "$6.00", note: "Pot-set, very thick" },
      { name: "Aldi Mancini Greek 1kg",     price: "$3.49", note: "Great value" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 4.00, aisle: "Dairy & Eggs, Aisle 3", inStock: true },
      { store: "Woolworths", price: 4.00, aisle: "Dairy & Eggs, Aisle 4", inStock: true },
      { store: "Aldi",       price: 3.49, aisle: "Dairy Aisle",            inStock: true },
    ]
  },
  {
    name: "Butter 250g", unit: "each", category: "Dairy",
    coles: 3.80, woolworths: 3.65, image: "🧈",
    description: "Unsalted or salted Australian butter made from fresh cream. Ideal for baking, cooking, or spreading on toast.",
    ingredients: "Cream (milk), salt (if salted).",
    nutrition: { servingSize: "10g", rows: [
      { label: "Energy",        per100: "3000kJ", perServing: "300kJ" },
      { label: "Protein",       per100: "0.5g",   perServing: "0.1g"  },
      { label: "Fat, total",    per100: "81.0g",  perServing: "8.1g"  },
      { label: "— Saturated",   per100: "54.0g",  perServing: "5.4g"  },
      { label: "Carbohydrate",  per100: "0.5g",   perServing: "0.1g"  },
      { label: "Sodium",        per100: "550mg",  perServing: "55mg"  },
    ]},
    allergens: ["Milk"], mayContain: [],
    alternatives: [
      { name: "Lurpak Butter 250g",          price: "$5.50", note: "Premium Danish butter" },
      { name: "Pepe Saya Cultured Butter",   price: "$7.00", note: "Artisan cultured butter" },
      { name: "Nuttelex Dairy-Free Spread",  price: "$4.20", note: "Dairy-free alternative" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 3.80, aisle: "Dairy & Eggs, Aisle 3", inStock: true },
      { store: "Woolworths", price: 3.65, aisle: "Dairy & Eggs, Aisle 4", inStock: true },
      { store: "Aldi",       price: 3.29, aisle: "Dairy Aisle",            inStock: true },
    ]
  },
  {
    name: "Sour Cream 300g", unit: "each", category: "Dairy",
    coles: 2.75, woolworths: 2.90, image: "🫙",
    description: "Thick and tangy Australian sour cream. Ideal as a dip, topping for tacos, baked potatoes, or mixed into sauces and dressings.",
    ingredients: "Cream (milk), skim milk powder, culture.",
    nutrition: { servingSize: "20g", rows: [
      { label: "Energy",        per100: "890kJ",  perServing: "178kJ" },
      { label: "Protein",       per100: "2.5g",   perServing: "0.5g"  },
      { label: "Fat, total",    per100: "22.0g",  perServing: "4.4g"  },
      { label: "— Saturated",   per100: "14.5g",  perServing: "2.9g"  },
      { label: "Carbohydrate",  per100: "3.5g",   perServing: "0.7g"  },
      { label: "Sodium",        per100: "55mg",   perServing: "11mg"  },
    ]},
    allergens: ["Milk"], mayContain: [],
    alternatives: [
      { name: "Crème Fraîche 200g",      price: "$3.50", note: "Richer, less tangy French-style" },
      { name: "Coconut Cream (dairy-free)", price: "$2.00", note: "Dairy-free sub in dips" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 2.75, aisle: "Dairy & Eggs, Aisle 3", inStock: true },
      { store: "Woolworths", price: 2.90, aisle: "Dairy & Eggs, Aisle 4", inStock: true },
    ]
  },
  {
    name: "Cream Cheese 250g", unit: "each", category: "Dairy",
    coles: 3.50, woolworths: 3.30, image: "🧀",
    description: "Smooth and spreadable cream cheese. Versatile for cheesecakes, frosting, bagels, savoury dips, and pasta sauces.",
    ingredients: "Pasteurised cream, skim milk, salt, carob bean gum (410), culture.",
    nutrition: { servingSize: "30g", rows: [
      { label: "Energy",        per100: "1210kJ", perServing: "363kJ" },
      { label: "Protein",       per100: "6.0g",   perServing: "1.8g"  },
      { label: "Fat, total",    per100: "31.0g",  perServing: "9.3g"  },
      { label: "— Saturated",   per100: "20.0g",  perServing: "6.0g"  },
      { label: "Carbohydrate",  per100: "3.5g",   perServing: "1.1g"  },
      { label: "Sodium",        per100: "380mg",  perServing: "114mg" },
    ]},
    allergens: ["Milk"], mayContain: [],
    alternatives: [
      { name: "Philadelphia Cream Cheese 250g", price: "$4.50", note: "Classic branded version" },
      { name: "Ricotta 500g",                   price: "$3.50", note: "Lighter, less creamy alternative" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 3.50, aisle: "Dairy & Eggs, Aisle 3", inStock: true  },
      { store: "Woolworths", price: 3.30, aisle: "Dairy & Eggs, Aisle 4", inStock: true  },
      { store: "Aldi",       price: 2.99, aisle: "Dairy Aisle",            inStock: false },
    ]
  },

  // ── BAKERY ─────────────────────────────────────────────────────────────────
  {
    name: "White Sandwich Bread 700g", unit: "each", category: "Bakery",
    coles: 1.80, woolworths: 2.00, image: "🍞",
    description: "Soft Australian white sandwich bread, pre-sliced for convenience. A household staple for sandwiches, toast, and everything in between.",
    ingredients: "Wheat flour, water, sugar, vegetable oil (contains soy), iodised salt, yeast, wheat gluten, emulsifiers (471, 472e, 481), vinegar, soy flour, vitamins (thiamin, folic acid).",
    nutrition: { servingSize: "2 slices (74g)", rows: [
      { label: "Energy",        per100: "1080kJ", perServing: "799kJ"  },
      { label: "Protein",       per100: "8.8g",   perServing: "6.5g"   },
      { label: "Fat, total",    per100: "3.0g",   perServing: "2.2g"   },
      { label: "— Saturated",   per100: "0.5g",   perServing: "0.4g"   },
      { label: "Carbohydrate",  per100: "47.0g",  perServing: "34.8g"  },
      { label: "— Sugars",      per100: "4.5g",   perServing: "3.3g"   },
      { label: "Dietary Fibre", per100: "2.5g",   perServing: "1.9g"   },
      { label: "Sodium",        per100: "480mg",  perServing: "355mg"  },
    ]},
    allergens: ["Gluten (Wheat)", "Soy"], mayContain: ["Sesame", "Milk", "Eggs"],
    alternatives: [
      { name: "Tip Top Original White 650g",   price: "$3.80", note: "Soft branded loaf" },
      { name: "Helga's White Sandwich 750g",   price: "$4.50", note: "No artificial colours or flavours" },
      { name: "Wholemeal Bread 700g",          price: "$3.00 (Coles)", note: "More fibre" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 1.80, aisle: "Bakery, Aisle 1",  inStock: true },
      { store: "Woolworths", price: 2.00, aisle: "Bakery, Aisle 1",  inStock: true },
      { store: "Aldi",       price: 1.49, aisle: "Bakery Aisle",     inStock: true },
    ]
  },
  {
    name: "Wholemeal Bread 700g", unit: "each", category: "Bakery",
    coles: 3.00, woolworths: 2.80, image: "🍞",
    description: "Nutritious wholemeal bread baked with whole wheat grains. Higher in fibre and nutrients than white bread, with a hearty flavour.",
    ingredients: "Wholemeal wheat flour, water, wheat flour, sugar, iodised salt, yeast, wheat gluten, vegetable oils (contains soy), emulsifiers (471, 481), vinegar, vitamins (thiamin, folic acid).",
    nutrition: { servingSize: "2 slices (76g)", rows: [
      { label: "Energy",        per100: "1010kJ", perServing: "768kJ"  },
      { label: "Protein",       per100: "9.5g",   perServing: "7.2g"   },
      { label: "Fat, total",    per100: "3.5g",   perServing: "2.7g"   },
      { label: "— Saturated",   per100: "0.6g",   perServing: "0.5g"   },
      { label: "Carbohydrate",  per100: "41.0g",  perServing: "31.2g"  },
      { label: "— Sugars",      per100: "4.0g",   perServing: "3.0g"   },
      { label: "Dietary Fibre", per100: "6.5g",   perServing: "4.9g"   },
      { label: "Sodium",        per100: "450mg",  perServing: "342mg"  },
    ]},
    allergens: ["Gluten (Wheat)", "Soy"], mayContain: ["Sesame", "Milk", "Eggs"],
    alternatives: [
      { name: "Tip Top 9 Grain 700g",       price: "$4.00", note: "Multi-grain, great texture" },
      { name: "Burgen Soy-Lin 700g",        price: "$4.80", note: "High in protein and fibre" },
      { name: "White Sandwich Bread 700g",  price: "$1.80 (Coles)", note: "Softer texture, less fibre" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 3.00, aisle: "Bakery, Aisle 1", inStock: true },
      { store: "Woolworths", price: 2.80, aisle: "Bakery, Aisle 1", inStock: true },
      { store: "Aldi",       price: 2.19, aisle: "Bakery Aisle",    inStock: true },
    ]
  },
  {
    name: "Plain Croissants 4pk", unit: "each", category: "Bakery",
    coles: 4.50, woolworths: 4.00, image: "🥐",
    description: "Golden, flaky butter croissants — perfect for breakfast or brunch. Serve warm for best results.",
    ingredients: "Wheat flour, butter (milk), water, sugar, eggs, iodised salt, yeast.",
    nutrition: { servingSize: "1 croissant (65g)", rows: [
      { label: "Energy",        per100: "1590kJ", perServing: "1034kJ" },
      { label: "Protein",       per100: "7.5g",   perServing: "4.9g"   },
      { label: "Fat, total",    per100: "22.0g",  perServing: "14.3g"  },
      { label: "— Saturated",   per100: "13.0g",  perServing: "8.5g"   },
      { label: "Carbohydrate",  per100: "46.0g",  perServing: "29.9g"  },
      { label: "— Sugars",      per100: "8.0g",   perServing: "5.2g"   },
      { label: "Sodium",        per100: "500mg",  perServing: "325mg"  },
    ]},
    allergens: ["Gluten (Wheat)", "Milk", "Eggs"], mayContain: ["Tree Nuts", "Sesame"],
    alternatives: [
      { name: "Beurre Croissants 4pk (Woolworths Bakery)", price: "$5.00", note: "Freshly baked in-store" },
      { name: "Pain au Chocolat 4pk",                      price: "$5.50", note: "With chocolate filling" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 4.50, aisle: "Bakery, Aisle 1", inStock: true },
      { store: "Woolworths", price: 4.00, aisle: "Bakery, Aisle 1", inStock: true },
    ]
  },

  // ── FRUIT & VEG ────────────────────────────────────────────────────────────
  {
    name: "Bananas 1kg", unit: "per kg", category: "Fruit & Veg",
    coles: 1.90, woolworths: 1.75, image: "🍌",
    description: "Fresh Australian Cavendish bananas. A great source of potassium, natural energy, and dietary fibre. Ripe and ready to eat.",
    ingredients: "Banana (Cavendish variety). Produced in Queensland, Australia.",
    nutrition: { servingSize: "1 medium banana (118g)", rows: [
      { label: "Energy",        per100: "371kJ",  perServing: "438kJ"  },
      { label: "Protein",       per100: "1.1g",   perServing: "1.3g"   },
      { label: "Fat, total",    per100: "0.3g",   perServing: "0.4g"   },
      { label: "Carbohydrate",  per100: "20.4g",  perServing: "24.1g"  },
      { label: "— Sugars",      per100: "15.5g",  perServing: "18.3g"  },
      { label: "Dietary Fibre", per100: "2.6g",   perServing: "3.1g"   },
      { label: "Sodium",        per100: "1mg",    perServing: "1mg"    },
      { label: "Potassium",     per100: "326mg",  perServing: "385mg"  },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Lady Finger Bananas 500g", price: "$2.50", note: "Smaller, sweeter variety" },
      { name: "Plantains 1kg",            price: "$3.50", note: "Firmer, cooking banana" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 1.90, aisle: "Fruit & Veg, Front of Store", inStock: true },
      { store: "Woolworths", price: 1.75, aisle: "Fruit & Veg, Front of Store", inStock: true },
      { store: "Aldi",       price: 1.59, aisle: "Fruit & Veg",                 inStock: true },
    ]
  },
  {
    name: "Broccoli 500g", unit: "each", category: "Fruit & Veg",
    coles: 2.50, woolworths: 2.70, image: "🥦",
    description: "Fresh Australian broccoli, rich in vitamins C and K, folate, and fibre. Versatile for steaming, stir-frying, roasting, or eating raw.",
    ingredients: "Broccoli. Grown in Victoria, Australia.",
    nutrition: { servingSize: "100g (raw)", rows: [
      { label: "Energy",        per100: "141kJ",  perServing: "141kJ" },
      { label: "Protein",       per100: "2.8g",   perServing: "2.8g"  },
      { label: "Fat, total",    per100: "0.4g",   perServing: "0.4g"  },
      { label: "Carbohydrate",  per100: "4.4g",   perServing: "4.4g"  },
      { label: "— Sugars",      per100: "1.7g",   perServing: "1.7g"  },
      { label: "Dietary Fibre", per100: "2.6g",   perServing: "2.6g"  },
      { label: "Sodium",        per100: "33mg",   perServing: "33mg"  },
      { label: "Vitamin C",     per100: "89mg",   perServing: "89mg"  },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Broccolini 200g",     price: "$3.00", note: "Sweeter, more tender stalks" },
      { name: "Cauliflower 1 head",  price: "$3.50", note: "Similar nutrition profile" },
      { name: "Frozen Broccoli 1kg", price: "$2.50", note: "Great frozen option" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 2.50, aisle: "Fruit & Veg", inStock: true },
      { store: "Woolworths", price: 2.70, aisle: "Fruit & Veg", inStock: true },
      { store: "Aldi",       price: 2.29, aisle: "Fruit & Veg", inStock: true },
    ]
  },
  {
    name: "Carrots 1kg", unit: "per kg", category: "Fruit & Veg",
    coles: 1.50, woolworths: 1.50, image: "🥕",
    description: "Fresh Australian carrots, packed with beta-carotene and natural sweetness. Great for snacking, roasting, soups, and stews.",
    ingredients: "Carrots. Grown in South Australia.",
    nutrition: { servingSize: "100g (raw)", rows: [
      { label: "Energy",        per100: "177kJ",  perServing: "177kJ" },
      { label: "Protein",       per100: "0.9g",   perServing: "0.9g"  },
      { label: "Fat, total",    per100: "0.2g",   perServing: "0.2g"  },
      { label: "Carbohydrate",  per100: "8.7g",   perServing: "8.7g"  },
      { label: "— Sugars",      per100: "6.5g",   perServing: "6.5g"  },
      { label: "Dietary Fibre", per100: "2.8g",   perServing: "2.8g"  },
      { label: "Sodium",        per100: "57mg",   perServing: "57mg"  },
      { label: "Vitamin A",     per100: "835µg",  perServing: "835µg" },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Baby Carrots 500g",    price: "$2.20", note: "Pre-washed, snack-ready" },
      { name: "Parsnips 500g",        price: "$2.50", note: "Similar use case, earthier flavour" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 1.50, aisle: "Fruit & Veg", inStock: true },
      { store: "Woolworths", price: 1.50, aisle: "Fruit & Veg", inStock: true },
      { store: "Aldi",       price: 1.29, aisle: "Fruit & Veg", inStock: true },
    ]
  },
  {
    name: "Baby Spinach 120g", unit: "each", category: "Fruit & Veg",
    coles: 3.00, woolworths: 2.75, image: "🌿",
    description: "Tender baby spinach leaves, washed and ready to eat. Packed with iron, vitamins A and C. Use in salads, smoothies, pasta, or sautéed as a side.",
    ingredients: "Baby spinach. Grown in Victoria, Australia.",
    nutrition: { servingSize: "60g", rows: [
      { label: "Energy",        per100: "85kJ",  perServing: "51kJ"  },
      { label: "Protein",       per100: "2.9g",  perServing: "1.7g"  },
      { label: "Fat, total",    per100: "0.4g",  perServing: "0.2g"  },
      { label: "Carbohydrate",  per100: "1.4g",  perServing: "0.8g"  },
      { label: "Dietary Fibre", per100: "2.2g",  perServing: "1.3g"  },
      { label: "Sodium",        per100: "65mg",  perServing: "39mg"  },
      { label: "Iron",          per100: "2.7mg", perServing: "1.6mg" },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Mixed Salad Leaves 120g", price: "$3.50", note: "Variety of greens" },
      { name: "Rocket 100g",             price: "$2.80", note: "Peppery flavour" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 3.00, aisle: "Fruit & Veg — Salads", inStock: true },
      { store: "Woolworths", price: 2.75, aisle: "Fruit & Veg — Salads", inStock: true },
    ]
  },
  {
    name: "Roma Tomatoes 500g", unit: "per 100g", category: "Fruit & Veg",
    coles: 3.20, woolworths: 3.50, image: "🍅",
    description: "Firm, meaty Roma tomatoes with low water content — ideal for sauces, roasting, bruschetta, and salads. Sourced from Australian growers.",
    ingredients: "Roma tomatoes. Grown in Queensland, Australia.",
    nutrition: { servingSize: "100g", rows: [
      { label: "Energy",        per100: "74kJ",  perServing: "74kJ"  },
      { label: "Protein",       per100: "0.9g",  perServing: "0.9g"  },
      { label: "Fat, total",    per100: "0.2g",  perServing: "0.2g"  },
      { label: "Carbohydrate",  per100: "3.5g",  perServing: "3.5g"  },
      { label: "— Sugars",      per100: "3.2g",  perServing: "3.2g"  },
      { label: "Dietary Fibre", per100: "1.2g",  perServing: "1.2g"  },
      { label: "Sodium",        per100: "5mg",   perServing: "5mg"   },
      { label: "Vitamin C",     per100: "19mg",  perServing: "19mg"  },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Cherry Tomatoes 250g",    price: "$3.00", note: "Sweet, great for snacking" },
      { name: "Truss Tomatoes 500g",     price: "$4.00", note: "More flavourful on the vine" },
      { name: "Canned Tomatoes 400g",    price: "$0.90 (Woolworths)", note: "Pantry alternative" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 3.20, aisle: "Fruit & Veg", inStock: true },
      { store: "Woolworths", price: 3.50, aisle: "Fruit & Veg", inStock: true },
    ]
  },
  {
    name: "Brown Onions 1kg", unit: "per kg", category: "Fruit & Veg",
    coles: 1.80, woolworths: 1.60, image: "🧅",
    description: "Versatile Australian brown onions — a cooking essential. Caramelise beautifully and form the base of countless savoury dishes.",
    ingredients: "Brown onions. Grown in South Australia.",
    nutrition: { servingSize: "100g", rows: [
      { label: "Energy",        per100: "166kJ", perServing: "166kJ" },
      { label: "Protein",       per100: "1.2g",  perServing: "1.2g"  },
      { label: "Fat, total",    per100: "0.1g",  perServing: "0.1g"  },
      { label: "Carbohydrate",  per100: "7.6g",  perServing: "7.6g"  },
      { label: "— Sugars",      per100: "4.7g",  perServing: "4.7g"  },
      { label: "Dietary Fibre", per100: "1.8g",  perServing: "1.8g"  },
      { label: "Sodium",        per100: "3mg",   perServing: "3mg"   },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Red Onions 1kg",   price: "$2.00", note: "Milder, great raw in salads" },
      { name: "Spring Onions 2pk", price: "$1.80", note: "Mild flavour, no cooking needed" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 1.80, aisle: "Fruit & Veg", inStock: true },
      { store: "Woolworths", price: 1.60, aisle: "Fruit & Veg", inStock: true },
      { store: "Aldi",       price: 1.39, aisle: "Fruit & Veg", inStock: true },
    ]
  },

  // ── MEAT ───────────────────────────────────────────────────────────────────
  {
    name: "Chicken Breast 1kg", unit: "per kg", category: "Meat",
    coles: 10.00, woolworths: 9.50, image: "🍗",
    description: "Lean, skinless Australian chicken breast fillets — high protein, low fat. Ideal for grilling, baking, stir-frying, and meal prep.",
    ingredients: "Chicken breast (100%). Produced in Australia.",
    nutrition: { servingSize: "150g (cooked)", rows: [
      { label: "Energy",        per100: "465kJ",  perServing: "698kJ"  },
      { label: "Protein",       per100: "23.0g",  perServing: "34.5g"  },
      { label: "Fat, total",    per100: "1.8g",   perServing: "2.7g"   },
      { label: "— Saturated",   per100: "0.5g",   perServing: "0.8g"   },
      { label: "Carbohydrate",  per100: "0g",     perServing: "0g"     },
      { label: "Sodium",        per100: "63mg",   perServing: "95mg"   },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Chicken Thigh Fillets 1kg", price: "$8.00", note: "More flavourful, slightly higher fat" },
      { name: "Turkey Breast 500g",        price: "$9.00", note: "Similar lean protein profile" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 10.00, aisle: "Meat & Seafood, Aisle 6", inStock: true },
      { store: "Woolworths", price: 9.50,  aisle: "Meat & Seafood, Aisle 5", inStock: true },
      { store: "Aldi",       price: 8.99,  aisle: "Meat Section",             inStock: true },
    ]
  },
  {
    name: "Beef Mince 500g", unit: "per kg", category: "Meat",
    coles: 7.00, woolworths: 7.50, image: "🥩",
    description: "Regular Australian beef mince (around 17% fat) — the go-to for bolognese, burgers, meatballs, tacos, and shepherd's pie.",
    ingredients: "Beef (100%). Produced in Australia.",
    nutrition: { servingSize: "125g (raw)", rows: [
      { label: "Energy",        per100: "875kJ",  perServing: "1094kJ" },
      { label: "Protein",       per100: "17.5g",  perServing: "21.9g"  },
      { label: "Fat, total",    per100: "17.0g",  perServing: "21.3g"  },
      { label: "— Saturated",   per100: "7.5g",   perServing: "9.4g"   },
      { label: "Carbohydrate",  per100: "0g",     perServing: "0g"     },
      { label: "Sodium",        per100: "70mg",   perServing: "88mg"   },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Lean Beef Mince 500g",  price: "$8.00", note: "Less fat (~5%), better for health-conscious cooking" },
      { name: "Pork Mince 500g",       price: "$6.00", note: "Milder flavour, great for dumplings" },
      { name: "Plant-Based Mince 400g", price: "$6.50", note: "Vegan alternative" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 7.00, aisle: "Meat & Seafood, Aisle 6", inStock: true },
      { store: "Woolworths", price: 7.50, aisle: "Meat & Seafood, Aisle 5", inStock: true },
    ]
  },
  {
    name: "Pork Sausages 500g", unit: "each", category: "Meat",
    coles: 5.50, woolworths: 5.00, image: "🌭",
    description: "Classic Australian pork sausages — perfect for BBQs, frying, or baking. Made with seasoned pork and a natural casing for that satisfying snap.",
    ingredients: "Pork (65%), water, wheat rusk, iodised salt, starch, spices, flavours, antioxidant (316), preservative (223).",
    nutrition: { servingSize: "2 sausages (100g cooked)", rows: [
      { label: "Energy",        per100: "1070kJ", perServing: "1070kJ" },
      { label: "Protein",       per100: "13.0g",  perServing: "13.0g"  },
      { label: "Fat, total",    per100: "20.0g",  perServing: "20.0g"  },
      { label: "— Saturated",   per100: "8.0g",   perServing: "8.0g"   },
      { label: "Carbohydrate",  per100: "8.0g",   perServing: "8.0g"   },
      { label: "Sodium",        per100: "720mg",  perServing: "720mg"  },
    ]},
    allergens: ["Gluten (Wheat)", "Sulphites"], mayContain: ["Milk", "Soy"],
    alternatives: [
      { name: "Beef Sausages 500g",         price: "$5.50", note: "Richer flavour" },
      { name: "Gourmet Pork & Fennel 400g", price: "$8.00", note: "Artisan option" },
      { name: "Chicken Sausages 500g",      price: "$6.00", note: "Leaner option" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 5.50, aisle: "Meat & Seafood, Aisle 6", inStock: true },
      { store: "Woolworths", price: 5.00, aisle: "Meat & Seafood, Aisle 5", inStock: true },
      { store: "Aldi",       price: 4.49, aisle: "Meat Section",             inStock: true },
    ]
  },
  {
    name: "Beef Rump Steak 400g", unit: "each", category: "Meat",
    coles: 14.00, woolworths: 13.50, image: "🥩",
    description: "Premium Australian beef rump steak — flavourful and tender. Best cooked medium-rare on a hot grill or cast-iron pan. Let rest before serving.",
    ingredients: "Beef rump (100%). Produced in Australia.",
    nutrition: { servingSize: "200g (cooked)", rows: [
      { label: "Energy",        per100: "840kJ",  perServing: "1680kJ" },
      { label: "Protein",       per100: "26.0g",  perServing: "52.0g"  },
      { label: "Fat, total",    per100: "8.5g",   perServing: "17.0g"  },
      { label: "— Saturated",   per100: "3.5g",   perServing: "7.0g"   },
      { label: "Carbohydrate",  per100: "0g",     perServing: "0g"     },
      { label: "Sodium",        per100: "60mg",   perServing: "120mg"  },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Beef Scotch Fillet 400g",  price: "$20.00", note: "More marbling, more tender" },
      { name: "Beef Sirloin Steak 400g",  price: "$16.00", note: "Great flavour, less fat than scotch" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 14.00, aisle: "Meat & Seafood", inStock: true },
      { store: "Woolworths", price: 13.50, aisle: "Meat & Seafood", inStock: true },
    ]
  },
  {
    name: "Lamb Chops 600g", unit: "each", category: "Meat",
    coles: 13.50, woolworths: 14.00, image: "🍖",
    description: "Tender Australian lamb loin or forequarter chops. Season simply with salt, pepper and rosemary, then grill or pan-fry for a classic Aussie meal.",
    ingredients: "Lamb (100%). Produced in Australia.",
    nutrition: { servingSize: "150g (cooked)", rows: [
      { label: "Energy",        per100: "950kJ",  perServing: "1425kJ" },
      { label: "Protein",       per100: "22.0g",  perServing: "33.0g"  },
      { label: "Fat, total",    per100: "14.0g",  perServing: "21.0g"  },
      { label: "— Saturated",   per100: "6.5g",   perServing: "9.8g"   },
      { label: "Carbohydrate",  per100: "0g",     perServing: "0g"     },
      { label: "Sodium",        per100: "75mg",   perServing: "113mg"  },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Lamb Rack (4 cutlets)",   price: "$18.00", note: "Premium presentation cut" },
      { name: "Lamb Shoulder Chops 600g", price: "$11.00", note: "More fat, great for slow cooking" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 13.50, aisle: "Meat & Seafood", inStock: true },
      { store: "Woolworths", price: 14.00, aisle: "Meat & Seafood", inStock: true },
    ]
  },

  // ── PANTRY ─────────────────────────────────────────────────────────────────
  {
    name: "White Rice 5kg", unit: "per kg", category: "Pantry",
    coles: 7.00, woolworths: 7.50, image: "🍚",
    description: "Long-grain white rice — a pantry staple for everyday cooking. Fluffy when cooked and versatile for Asian dishes, curries, stir-fries, and more.",
    ingredients: "Long grain white rice.",
    nutrition: { servingSize: "½ cup dry (90g)", rows: [
      { label: "Energy",        per100: "1480kJ", perServing: "1332kJ" },
      { label: "Protein",       per100: "6.8g",   perServing: "6.1g"   },
      { label: "Fat, total",    per100: "0.5g",   perServing: "0.5g"   },
      { label: "Carbohydrate",  per100: "79.0g",  perServing: "71.1g"  },
      { label: "— Sugars",      per100: "0.1g",   perServing: "0.1g"   },
      { label: "Dietary Fibre", per100: "1.3g",   perServing: "1.2g"   },
      { label: "Sodium",        per100: "1mg",    perServing: "1mg"    },
    ]},
    allergens: [], mayContain: ["Gluten"],
    alternatives: [
      { name: "Basmati Rice 5kg",   price: "$8.00", note: "Aromatic, longer grain" },
      { name: "Brown Rice 2kg",     price: "$5.50", note: "Higher fibre, nuttier" },
      { name: "Jasmine Rice 5kg",   price: "$8.50", note: "Fragrant, sticky when cooked" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 7.00, aisle: "Grains & Pasta, Aisle 7", inStock: true },
      { store: "Woolworths", price: 7.50, aisle: "Pantry, Aisle 6",          inStock: true },
      { store: "Aldi",       price: 5.99, aisle: "Pantry Aisle",             inStock: true },
    ]
  },
  {
    name: "Penne Pasta 500g", unit: "each", category: "Pantry",
    coles: 1.30, woolworths: 1.15, image: "🍝",
    description: "Durum wheat semolina penne pasta — a pantry essential. Holds sauces well thanks to its ridged surface and hollow tubes. Cooks in 10–12 minutes.",
    ingredients: "Durum wheat semolina, water.",
    nutrition: { servingSize: "85g (dry)", rows: [
      { label: "Energy",        per100: "1486kJ", perServing: "1263kJ" },
      { label: "Protein",       per100: "12.5g",  perServing: "10.6g"  },
      { label: "Fat, total",    per100: "1.5g",   perServing: "1.3g"   },
      { label: "Carbohydrate",  per100: "72.0g",  perServing: "61.2g"  },
      { label: "— Sugars",      per100: "3.5g",   perServing: "3.0g"   },
      { label: "Dietary Fibre", per100: "3.0g",   perServing: "2.6g"   },
      { label: "Sodium",        per100: "3mg",    perServing: "3mg"    },
    ]},
    allergens: ["Gluten (Wheat)"], mayContain: ["Eggs"],
    alternatives: [
      { name: "Spaghetti 500g",            price: "$1.15", note: "Classic long pasta" },
      { name: "Gluten-Free Penne 400g",    price: "$3.50", note: "For gluten intolerance" },
      { name: "Chickpea Penne 250g",       price: "$4.00", note: "High protein, gluten-free" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 1.30, aisle: "Grains & Pasta, Aisle 7", inStock: true },
      { store: "Woolworths", price: 1.15, aisle: "Pantry, Aisle 6",          inStock: true },
      { store: "Aldi",       price: 0.99, aisle: "Pantry Aisle",             inStock: true },
    ]
  },
  {
    name: "Canned Tomatoes 400g", unit: "each", category: "Pantry",
    coles: 1.00, woolworths: 0.90, image: "🥫",
    description: "Whole peeled or diced canned tomatoes in tomato juice. An essential pantry staple for pasta sauces, soups, stews, and casseroles.",
    ingredients: "Tomatoes (60%), tomato juice, acidity regulator (citric acid).",
    nutrition: { servingSize: "½ can (200g)", rows: [
      { label: "Energy",        per100: "74kJ",  perServing: "148kJ" },
      { label: "Protein",       per100: "1.2g",  perServing: "2.4g"  },
      { label: "Fat, total",    per100: "0.2g",  perServing: "0.4g"  },
      { label: "Carbohydrate",  per100: "3.4g",  perServing: "6.8g"  },
      { label: "— Sugars",      per100: "3.2g",  perServing: "6.4g"  },
      { label: "Dietary Fibre", per100: "1.1g",  perServing: "2.2g"  },
      { label: "Sodium",        per100: "20mg",  perServing: "40mg"  },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Passata 700mL",             price: "$2.50", note: "Smooth tomato sauce, no chopping needed" },
      { name: "San Marzano Tomatoes 400g", price: "$3.50", note: "Premium Italian variety, sweeter" },
      { name: "Roma Tomatoes 500g",        price: "$3.20 (Coles)", note: "Fresh alternative" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 1.00, aisle: "Canned Goods, Aisle 8", inStock: true },
      { store: "Woolworths", price: 0.90, aisle: "Pantry, Aisle 6",        inStock: true },
      { store: "Aldi",       price: 0.85, aisle: "Pantry Aisle",           inStock: true },
    ]
  },
  {
    name: "Olive Oil 750mL", unit: "each", category: "Pantry",
    coles: 8.50, woolworths: 8.00, image: "🫙",
    description: "Extra virgin or pure olive oil, pressed from ripe olives. Ideal for cooking, dressings, dips, and marinades. Rich in healthy monounsaturated fats.",
    ingredients: "Extra virgin olive oil (imported and local).",
    nutrition: { servingSize: "1 tbsp (20mL)", rows: [
      { label: "Energy",        per100: "3700kJ", perServing: "740kJ" },
      { label: "Protein",       per100: "0g",     perServing: "0g"    },
      { label: "Fat, total",    per100: "100g",   perServing: "20g"   },
      { label: "— Saturated",   per100: "14.0g",  perServing: "2.8g"  },
      { label: "— Monounsaturated", per100: "73.0g", perServing: "14.6g" },
      { label: "— Polyunsaturated", per100: "10.5g", perServing: "2.1g"  },
      { label: "Carbohydrate",  per100: "0g",     perServing: "0g"    },
      { label: "Sodium",        per100: "0mg",    perServing: "0mg"   },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Cobram Estate EVOO 750mL", price: "$12.00", note: "Premium Australian extra virgin" },
      { name: "Canola Oil 1L",            price: "$3.50",  note: "Neutral flavour, higher smoke point" },
      { name: "Avocado Oil 250mL",        price: "$9.00",  note: "High smoke point, neutral flavour" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 8.50, aisle: "Oils & Condiments, Aisle 9", inStock: true },
      { store: "Woolworths", price: 8.00, aisle: "Pantry, Aisle 7",             inStock: true },
      { store: "Aldi",       price: 6.99, aisle: "Pantry Aisle",                inStock: true },
    ]
  },
  {
    name: "Plain Flour 1kg", unit: "per kg", category: "Pantry",
    coles: 1.50, woolworths: 1.60, image: "🌾",
    description: "All-purpose plain wheat flour — the foundation of baking. Use for cakes, biscuits, bread, pastry, thickening sauces, and batters.",
    ingredients: "Wheat flour, vitamins (thiamin, folic acid).",
    nutrition: { servingSize: "30g", rows: [
      { label: "Energy",        per100: "1440kJ", perServing: "432kJ" },
      { label: "Protein",       per100: "10.0g",  perServing: "3.0g"  },
      { label: "Fat, total",    per100: "1.2g",   perServing: "0.4g"  },
      { label: "Carbohydrate",  per100: "72.0g",  perServing: "21.6g" },
      { label: "— Sugars",      per100: "1.5g",   perServing: "0.5g"  },
      { label: "Dietary Fibre", per100: "3.0g",   perServing: "0.9g"  },
      { label: "Sodium",        per100: "2mg",    perServing: "1mg"   },
    ]},
    allergens: ["Gluten (Wheat)"], mayContain: ["Soy"],
    alternatives: [
      { name: "Self-Raising Flour 1kg", price: "$1.60", note: "Has raising agent added" },
      { name: "Wholemeal Flour 1kg",    price: "$2.20", note: "More fibre and nutrients" },
      { name: "Gluten-Free Flour 1kg",  price: "$4.50", note: "For gluten intolerance" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 1.50, aisle: "Baking, Aisle 8",  inStock: true },
      { store: "Woolworths", price: 1.60, aisle: "Baking, Aisle 7",  inStock: true },
      { store: "Aldi",       price: 1.29, aisle: "Baking Aisle",     inStock: true },
    ]
  },
  {
    name: "Sugar 1kg", unit: "per kg", category: "Pantry",
    coles: 1.90, woolworths: 1.85, image: "🍬",
    description: "White granulated cane sugar — Australian grown and refined. Essential for baking, sweetening hot drinks, jams, and desserts.",
    ingredients: "Cane sugar. Product of Australia.",
    nutrition: { servingSize: "1 tsp (4g)", rows: [
      { label: "Energy",        per100: "1700kJ", perServing: "68kJ" },
      { label: "Protein",       per100: "0g",     perServing: "0g"   },
      { label: "Fat, total",    per100: "0g",     perServing: "0g"   },
      { label: "Carbohydrate",  per100: "99.8g",  perServing: "4.0g" },
      { label: "— Sugars",      per100: "99.8g",  perServing: "4.0g" },
      { label: "Sodium",        per100: "0mg",    perServing: "0mg"  },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Raw Sugar 1kg",     price: "$2.20", note: "Slightly more molasses flavour" },
      { name: "Coconut Sugar 400g", price: "$5.50", note: "Lower GI alternative" },
      { name: "Stevia Blend 200g",  price: "$6.00", note: "Zero-calorie sweetener" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 1.90, aisle: "Baking, Aisle 8", inStock: true },
      { store: "Woolworths", price: 1.85, aisle: "Baking, Aisle 7", inStock: true },
      { store: "Aldi",       price: 1.59, aisle: "Baking Aisle",    inStock: true },
    ]
  },
  {
    name: "Vegemite 380g", unit: "each", category: "Pantry",
    coles: 5.50, woolworths: 5.00, image: "🫙",
    description: "Australia's iconic yeast extract spread. Dark, salty, and intensely savoury — spread thinly on buttered toast for the authentic experience. Rich in B vitamins.",
    ingredients: "Yeast extract, salt, malt extract (barley), colour (caramel III), niacin, thiamin, riboflavin, folate.",
    nutrition: { servingSize: "5g (1 tsp)", rows: [
      { label: "Energy",        per100: "750kJ",  perServing: "38kJ"  },
      { label: "Protein",       per100: "25.5g",  perServing: "1.3g"  },
      { label: "Fat, total",    per100: "0.4g",   perServing: "<0.1g" },
      { label: "Carbohydrate",  per100: "17.0g",  perServing: "0.9g"  },
      { label: "— Sugars",      per100: "1.5g",   perServing: "0.1g"  },
      { label: "Sodium",        per100: "3450mg", perServing: "173mg" },
      { label: "Niacin (B3)",   per100: "56mg",   perServing: "2.8mg" },
      { label: "Thiamin (B1)",  per100: "8.0mg",  perServing: "0.4mg" },
    ]},
    allergens: ["Gluten (Barley malt extract)"], mayContain: ["Wheat"],
    alternatives: [
      { name: "Marmite 250g",     price: "$5.00", note: "UK equivalent, slightly sweeter" },
      { name: "Promite 400g",     price: "$5.20", note: "Milder, slightly sweeter Aussie alternative" },
      { name: "Vegemite 150g",    price: "$2.80", note: "Smaller size" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 5.50, aisle: "Spreads & Condiments, Aisle 9", inStock: true },
      { store: "Woolworths", price: 5.00, aisle: "Breakfast & Spreads, Aisle 8",  inStock: true },
      { store: "Aldi",       price: 4.49, aisle: "Pantry Aisle",                  inStock: false },
    ]
  },

  // ── BEVERAGES ──────────────────────────────────────────────────────────────
  {
    name: "Orange Juice 2L", unit: "each", category: "Beverages",
    coles: 4.50, woolworths: 4.20, image: "🍊",
    description: "Fresh-tasting Australian orange juice — no added sugar, no artificial flavours. Made from whole oranges, with or without pulp. Great source of vitamin C.",
    ingredients: "Orange juice (100%). No added sugar.",
    nutrition: { servingSize: "250mL", rows: [
      { label: "Energy",        per100: "175kJ",  perServing: "438kJ"  },
      { label: "Protein",       per100: "0.7g",   perServing: "1.8g"   },
      { label: "Fat, total",    per100: "0.1g",   perServing: "0.3g"   },
      { label: "Carbohydrate",  per100: "9.8g",   perServing: "24.5g"  },
      { label: "— Sugars",      per100: "9.3g",   perServing: "23.3g"  },
      { label: "Dietary Fibre", per100: "0.2g",   perServing: "0.5g"   },
      { label: "Sodium",        per100: "2mg",    perServing: "5mg"    },
      { label: "Vitamin C",     per100: "40mg",   perServing: "100mg"  },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Fresh-Squeezed OJ 1.5L (Coles Deli)", price: "$5.50", note: "Cold-pressed, short shelf life" },
      { name: "Apple Juice 2L",                       price: "$3.50", note: "Milder flavour, popular with kids" },
      { name: "Orange Juice 1L (premium brands)",     price: "$4.00", note: "Not from concentrate options" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 4.50, aisle: "Juice & Drinks, Aisle 10", inStock: true },
      { store: "Woolworths", price: 4.20, aisle: "Beverages, Aisle 9",        inStock: true },
      { store: "Aldi",       price: 3.79, aisle: "Drinks Aisle",              inStock: true },
    ]
  },
  {
    name: "Sparkling Water 12pk", unit: "each", category: "Beverages",
    coles: 8.00, woolworths: 7.50, image: "💧",
    description: "Crisp, refreshing sparkling water in convenient 375mL cans. Zero calories, zero sugar — a great alternative to soft drink.",
    ingredients: "Carbonated water.",
    nutrition: { servingSize: "1 can (375mL)", rows: [
      { label: "Energy",        per100: "0kJ",  perServing: "0kJ"  },
      { label: "Protein",       per100: "0g",   perServing: "0g"   },
      { label: "Fat, total",    per100: "0g",   perServing: "0g"   },
      { label: "Carbohydrate",  per100: "0g",   perServing: "0g"   },
      { label: "Sodium",        per100: "10mg", perServing: "38mg" },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Flavoured Sparkling Water 12pk", price: "$9.00", note: "Natural fruit flavours, still zero sugar" },
      { name: "Soda Water 1.25L bottle",        price: "$1.50", note: "Cheaper per litre option" },
      { name: "SodaStream starter kit",         price: "$89.00", note: "Long-term savings making your own" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 8.00, aisle: "Water & Soft Drinks, Aisle 10", inStock: true },
      { store: "Woolworths", price: 7.50, aisle: "Beverages, Aisle 9",             inStock: true },
      { store: "Aldi",       price: 6.49, aisle: "Drinks Aisle",                   inStock: true },
    ]
  },
  {
    name: "Coffee Beans 500g", unit: "each", category: "Beverages",
    coles: 10.00, woolworths: 9.50, image: "☕",
    description: "Medium roast 100% Arabica coffee beans with notes of chocolate and caramel. Suited for espresso machines and plunger. Best ground fresh before brewing.",
    ingredients: "Roasted arabica coffee beans.",
    nutrition: { servingSize: "1 shot (7g)", rows: [
      { label: "Energy",        per100: "1120kJ", perServing: "78kJ"  },
      { label: "Protein",       per100: "10.0g",  perServing: "0.7g"  },
      { label: "Fat, total",    per100: "16.0g",  perServing: "1.1g"  },
      { label: "Carbohydrate",  per100: "28.0g",  perServing: "2.0g"  },
      { label: "Sodium",        per100: "10mg",   perServing: "1mg"   },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Campos Superior Blend 250g", price: "$17.00", note: "Premium specialty roaster" },
      { name: "Lavazza Crema e Gusto 500g", price: "$12.00", note: "Italian blend, great for espresso" },
      { name: "Nescafé Blend 43 200g (instant)", price: "$6.00", note: "Instant coffee option" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 10.00, aisle: "Coffee & Tea, Aisle 10", inStock: true },
      { store: "Woolworths", price: 9.50,  aisle: "Beverages, Aisle 9",     inStock: true },
      { store: "Aldi",       price: 7.99,  aisle: "Coffee Aisle",           inStock: true },
    ]
  },
  {
    name: "English Breakfast Tea 100pk", unit: "each", category: "Beverages",
    coles: 4.20, woolworths: 4.50, image: "🍵",
    description: "Classic Australian English Breakfast tea bags — a robust, full-bodied blend great with milk. 100 individually wrapped bags for lasting freshness.",
    ingredients: "Black tea.",
    nutrition: { servingSize: "1 cup (250mL brewed, no milk/sugar)", rows: [
      { label: "Energy",        per100: "1kJ",   perServing: "3kJ"  },
      { label: "Protein",       per100: "0.1g",  perServing: "0.2g" },
      { label: "Fat, total",    per100: "0g",    perServing: "0g"   },
      { label: "Carbohydrate",  per100: "0.1g",  perServing: "0.3g" },
      { label: "Sodium",        per100: "1mg",   perServing: "3mg"  },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Lipton Yellow Label 100pk", price: "$4.00", note: "Globally popular choice" },
      { name: "Twinings English Breakfast 50pk", price: "$4.50", note: "Premium branded option" },
      { name: "Tetley Tea Bags 100pk",     price: "$4.20", note: "Smooth, balanced flavour" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 4.20, aisle: "Coffee & Tea, Aisle 10", inStock: true },
      { store: "Woolworths", price: 4.50, aisle: "Beverages, Aisle 9",     inStock: true },
      { store: "Aldi",       price: 3.49, aisle: "Coffee & Tea Aisle",     inStock: true },
    ]
  },

  // ── SNACKS ─────────────────────────────────────────────────────────────────
  {
    name: "Plain Chips 200g", unit: "each", category: "Snacks",
    coles: 3.00, woolworths: 2.75, image: "🥔",
    description: "Crispy salted potato chips made from Australian potatoes. The classic snack — great for sharing or on their own with dip.",
    ingredients: "Potatoes, sunflower oil, salt.",
    nutrition: { servingSize: "50g (~1 handful)", rows: [
      { label: "Energy",        per100: "2150kJ", perServing: "1075kJ" },
      { label: "Protein",       per100: "6.0g",   perServing: "3.0g"   },
      { label: "Fat, total",    per100: "33.0g",  perServing: "16.5g"  },
      { label: "— Saturated",   per100: "3.5g",   perServing: "1.8g"   },
      { label: "Carbohydrate",  per100: "55.0g",  perServing: "27.5g"  },
      { label: "— Sugars",      per100: "1.0g",   perServing: "0.5g"   },
      { label: "Sodium",        per100: "500mg",  perServing: "250mg"  },
    ]},
    allergens: [], mayContain: ["Milk", "Soy", "Gluten"],
    alternatives: [
      { name: "Kettle Sea Salt Chips 175g",    price: "$4.50", note: "Thicker cut, premium quality" },
      { name: "Smith's Crinkle Chips 170g",    price: "$3.50", note: "Wavy cut, popular brand" },
      { name: "Popcorn 100g",                  price: "$2.50", note: "Lower calorie snack" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 3.00, aisle: "Chips & Snacks, Aisle 11", inStock: true },
      { store: "Woolworths", price: 2.75, aisle: "Snacks, Aisle 10",          inStock: true },
      { store: "Aldi",       price: 2.29, aisle: "Snack Aisle",               inStock: true },
    ]
  },
  {
    name: "Mixed Nuts 500g", unit: "each", category: "Snacks",
    coles: 9.50, woolworths: 10.00, image: "🥜",
    description: "A mix of roasted cashews, almonds, Brazil nuts, and peanuts. Rich in healthy fats, protein, and minerals. Great for snacking or adding to recipes.",
    ingredients: "Cashews, almonds, Brazil nuts, peanuts, sunflower oil, salt.",
    nutrition: { servingSize: "30g (~small handful)", rows: [
      { label: "Energy",        per100: "2590kJ", perServing: "777kJ" },
      { label: "Protein",       per100: "18.0g",  perServing: "5.4g"  },
      { label: "Fat, total",    per100: "53.0g",  perServing: "15.9g" },
      { label: "— Saturated",   per100: "9.0g",   perServing: "2.7g"  },
      { label: "Carbohydrate",  per100: "15.0g",  perServing: "4.5g"  },
      { label: "Dietary Fibre", per100: "6.5g",   perServing: "2.0g"  },
      { label: "Sodium",        per100: "200mg",  perServing: "60mg"  },
    ]},
    allergens: ["Tree Nuts (Cashews, Almonds, Brazil Nuts)", "Peanuts"], mayContain: ["Sesame", "Milk"],
    alternatives: [
      { name: "Trail Mix 500g",      price: "$8.50", note: "With dried fruit for sweetness" },
      { name: "Raw Almonds 500g",    price: "$9.00", note: "Single nut, unroasted" },
      { name: "Sunflower Seeds 500g", price: "$4.00", note: "Nut-free snack alternative" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 9.50,  aisle: "Snacks & Nuts, Aisle 11", inStock: true },
      { store: "Woolworths", price: 10.00, aisle: "Snacks, Aisle 10",         inStock: true },
      { store: "Aldi",       price: 8.49,  aisle: "Snack Aisle",              inStock: true },
    ]
  },
  {
    name: "Dark Chocolate 200g", unit: "each", category: "Snacks",
    coles: 3.50, woolworths: 3.50, image: "🍫",
    description: "Rich 70% cocoa dark chocolate block. Intensely chocolatey with subtle bitterness. Eat as a snack, bake with it, or melt for desserts. Contains antioxidant flavonoids.",
    ingredients: "Cocoa mass, sugar, cocoa butter, emulsifier (soy lecithin), natural vanilla flavour. Cocoa solids 70% min.",
    nutrition: { servingSize: "5 squares (25g)", rows: [
      { label: "Energy",        per100: "2330kJ", perServing: "583kJ" },
      { label: "Protein",       per100: "7.5g",   perServing: "1.9g"  },
      { label: "Fat, total",    per100: "43.0g",  perServing: "10.8g" },
      { label: "— Saturated",   per100: "26.0g",  perServing: "6.5g"  },
      { label: "Carbohydrate",  per100: "46.0g",  perServing: "11.5g" },
      { label: "— Sugars",      per100: "28.0g",  perServing: "7.0g"  },
      { label: "Dietary Fibre", per100: "10.9g",  perServing: "2.7g"  },
      { label: "Sodium",        per100: "10mg",   perServing: "3mg"   },
    ]},
    allergens: ["Soy"], mayContain: ["Milk", "Tree Nuts", "Peanuts"],
    alternatives: [
      { name: "Lindt 70% Dark 100g",         price: "$4.50", note: "Premium Swiss brand" },
      { name: "Cadbury Old Gold 180g",        price: "$4.00", note: "Classic Australian dark choc" },
      { name: "Milk Chocolate Block 200g",    price: "$3.50", note: "Sweeter, less cocoa" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 3.50, aisle: "Confectionery, Aisle 11", inStock: true },
      { store: "Woolworths", price: 3.50, aisle: "Snacks, Aisle 10",        inStock: true },
      { store: "Aldi",       price: 2.99, aisle: "Confectionery Aisle",     inStock: true },
    ]
  },
  {
    name: "Muesli Bars 6pk", unit: "each", category: "Snacks",
    coles: 3.80, woolworths: 3.50, image: "🌾",
    description: "Chewy oat and honey muesli bars with rolled oats, dried fruit, and seeds. A convenient, on-the-go snack that provides lasting energy.",
    ingredients: "Rolled oats, glucose syrup, brown sugar, honey, sunflower seeds, dried cranberries, rice puffs, palm oil, salt.",
    nutrition: { servingSize: "1 bar (31g)", rows: [
      { label: "Energy",        per100: "1680kJ", perServing: "521kJ" },
      { label: "Protein",       per100: "7.0g",   perServing: "2.2g"  },
      { label: "Fat, total",    per100: "13.0g",  perServing: "4.0g"  },
      { label: "— Saturated",   per100: "4.5g",   perServing: "1.4g"  },
      { label: "Carbohydrate",  per100: "68.0g",  perServing: "21.1g" },
      { label: "— Sugars",      per100: "35.0g",  perServing: "10.9g" },
      { label: "Dietary Fibre", per100: "4.5g",   perServing: "1.4g"  },
      { label: "Sodium",        per100: "200mg",  perServing: "62mg"  },
    ]},
    allergens: ["Gluten (Oats)", "Tree Nuts (may vary by flavour)"], mayContain: ["Milk", "Peanuts", "Soy", "Sesame"],
    alternatives: [
      { name: "Uncle Tobys Chewy Muesli Bars 6pk", price: "$4.20", note: "Popular branded option" },
      { name: "Carman's Nut Bars 5pk",              price: "$5.50", note: "Lower sugar, higher protein" },
      { name: "Fruit Straps 5pk",                   price: "$3.00", note: "Nut-free alternative" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 3.80, aisle: "Snacks & Bars, Aisle 11", inStock: true },
      { store: "Woolworths", price: 3.50, aisle: "Snacks, Aisle 10",         inStock: true },
      { store: "Aldi",       price: 3.19, aisle: "Snack Aisle",              inStock: true },
    ]
  },

  // ── HOUSEHOLD ──────────────────────────────────────────────────────────────
  {
    name: "Laundry Powder 2kg", unit: "each", category: "Household",
    coles: 9.00, woolworths: 8.50, image: "🧺",
    description: "Concentrated laundry powder for front and top-loader washing machines. Removes tough stains in cold or warm water. Fresh linen scent.",
    ingredients: "Anionic surfactants, non-ionic surfactants, zeolites, sodium carbonate, sodium silicate, enzymes (protease, lipase, amylase), optical brighteners, fragrance.",
    nutrition: null,
    allergens: ["Contains enzymes — may cause skin/respiratory sensitisation in some individuals."], mayContain: [],
    alternatives: [
      { name: "Omo Front & Top Loader 2kg",   price: "$10.00", note: "Popular branded option" },
      { name: "Cold Power Advanced 2kg",       price: "$9.50",  note: "Works well in cold water" },
      { name: "Laundry Liquid 1.5L",           price: "$8.00",  note: "Liquid alternative" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 9.00, aisle: "Laundry, Aisle 14", inStock: true },
      { store: "Woolworths", price: 8.50, aisle: "Cleaning, Aisle 13", inStock: true },
      { store: "Aldi",       price: 7.49, aisle: "Household Aisle",    inStock: true },
    ]
  },
  {
    name: "Dishwasher Tablets 42pk", unit: "each", category: "Household",
    coles: 12.00, woolworths: 11.00, image: "🍽️",
    description: "All-in-one dishwasher tablets combining detergent, rinse aid, and salt in one convenient tab. Leaves dishes sparkling clean.",
    ingredients: "Sodium carbonate, sodium citrate, sodium silicate, non-ionic surfactants, protease enzyme, amylase enzyme, rinse aid agents, salt.",
    nutrition: null,
    allergens: ["Irritant — keep away from children. Contains enzymes."], mayContain: [],
    alternatives: [
      { name: "Finish All-in-1 Tablets 44pk",  price: "$14.00", note: "Market leader, great results" },
      { name: "Fairy Platinum Tablets 30pk",   price: "$13.00", note: "Strong grease cutting" },
      { name: "Aldi Magnum Tablets 40pk",      price: "$8.99",  note: "Budget pick" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 12.00, aisle: "Laundry & Dish, Aisle 14", inStock: true },
      { store: "Woolworths", price: 11.00, aisle: "Cleaning, Aisle 13",        inStock: true },
      { store: "Aldi",       price: 8.99,  aisle: "Household Aisle",           inStock: true },
    ]
  },
  {
    name: "Toilet Paper 12pk", unit: "each", category: "Household",
    coles: 7.00, woolworths: 6.50, image: "🧻",
    description: "Soft 3-ply toilet paper in a 12-roll pack. Gentle on skin, strong, and sustainably sourced from certified paper mills.",
    ingredients: "Recycled or virgin wood pulp, water.",
    nutrition: null,
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Quilton 3-Ply 12pk",       price: "$9.00", note: "Premium soft brand" },
      { name: "Sorbent 12pk",             price: "$8.50", note: "Well-known Australian brand" },
      { name: "Who Gives A Crap 48pk",    price: "$48.00", note: "Eco-friendly, bamboo/recycled" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 7.00, aisle: "Paper & Cleaning, Aisle 13", inStock: true },
      { store: "Woolworths", price: 6.50, aisle: "Paper Products, Aisle 12",   inStock: true },
      { store: "Aldi",       price: 5.99, aisle: "Household Aisle",            inStock: true },
    ]
  },
  {
    name: "All-Purpose Cleaner 750mL", unit: "each", category: "Household",
    coles: 3.50, woolworths: 3.80, image: "🧴",
    description: "Multi-surface all-purpose spray cleaner that cuts through grease and grime on benchtops, tiles, sinks, and appliances. Fresh citrus scent.",
    ingredients: "Water, sodium dodecylbenzene sulfonate, alcohol ethoxylates, sodium citrate, fragrance, preservative.",
    nutrition: null,
    allergens: ["Contains surfactants — avoid contact with eyes. Not for food surfaces."], mayContain: [],
    alternatives: [
      { name: "Glen 20 Disinfectant Spray 300g", price: "$5.50", note: "Kills 99.9% of germs" },
      { name: "White King Multi-Surface 750mL",  price: "$4.00", note: "Bleach-based, stronger" },
      { name: "White vinegar + water (DIY)",     price: "~$0.50", note: "Natural cleaning alternative" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 3.50, aisle: "Cleaning Products, Aisle 14", inStock: true },
      { store: "Woolworths", price: 3.80, aisle: "Cleaning, Aisle 13",           inStock: true },
      { store: "Aldi",       price: 2.99, aisle: "Household Aisle",              inStock: true },
    ]
  },

  // ── FROZEN ─────────────────────────────────────────────────────────────────
  {
    name: "Frozen Peas 1kg", unit: "per kg", category: "Frozen",
    coles: 2.90, woolworths: 2.70, image: "🫛",
    description: "Quick-frozen Australian peas, picked at peak ripeness to lock in sweetness and nutrition. Ready in minutes — perfect as a side, in soups, or fried rice.",
    ingredients: "Peas (100%). Grown and frozen in Australia.",
    nutrition: { servingSize: "120g (cooked)", rows: [
      { label: "Energy",        per100: "270kJ",  perServing: "324kJ"  },
      { label: "Protein",       per100: "5.5g",   perServing: "6.6g"   },
      { label: "Fat, total",    per100: "0.5g",   perServing: "0.6g"   },
      { label: "Carbohydrate",  per100: "7.5g",   perServing: "9.0g"   },
      { label: "— Sugars",      per100: "4.5g",   perServing: "5.4g"   },
      { label: "Dietary Fibre", per100: "6.3g",   perServing: "7.6g"   },
      { label: "Sodium",        per100: "3mg",    perServing: "4mg"    },
      { label: "Vitamin C",     per100: "16mg",   perServing: "19mg"   },
    ]},
    allergens: [], mayContain: [],
    alternatives: [
      { name: "Frozen Corn 500g",            price: "$2.50", note: "Sweet corn kernels, similar versatility" },
      { name: "Frozen Mixed Vegetables 1kg", price: "$3.50", note: "Variety of veg in one bag" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 2.90, aisle: "Frozen Vegetables, Aisle 15", inStock: true },
      { store: "Woolworths", price: 2.70, aisle: "Frozen Foods, Aisle 14",       inStock: true },
      { store: "Aldi",       price: 2.29, aisle: "Frozen Aisle",                 inStock: true },
    ]
  },
  {
    name: "Frozen Pizza Margherita", unit: "each", category: "Frozen",
    coles: 5.50, woolworths: 6.00, image: "🍕",
    description: "Classic Margherita frozen pizza with a crispy thin base, tomato sauce, and mozzarella cheese. Ready in 15 minutes. The perfect quick weeknight dinner.",
    ingredients: "Wheat flour, mozzarella cheese (17%), water, tomato paste (8%), sunflower oil, sugar, iodised salt, yeast, modified starch, herbs.",
    nutrition: { servingSize: "½ pizza (~200g)", rows: [
      { label: "Energy",        per100: "940kJ",  perServing: "1880kJ" },
      { label: "Protein",       per100: "8.0g",   perServing: "16.0g"  },
      { label: "Fat, total",    per100: "7.5g",   perServing: "15.0g"  },
      { label: "— Saturated",   per100: "3.5g",   perServing: "7.0g"   },
      { label: "Carbohydrate",  per100: "30.0g",  perServing: "60.0g"  },
      { label: "— Sugars",      per100: "3.5g",   perServing: "7.0g"   },
      { label: "Dietary Fibre", per100: "2.0g",   perServing: "4.0g"   },
      { label: "Sodium",        per100: "550mg",  perServing: "1100mg" },
    ]},
    allergens: ["Gluten (Wheat)", "Milk"], mayContain: ["Eggs", "Soy"],
    alternatives: [
      { name: "Frozen BBQ Chicken Pizza",         price: "$6.50", note: "Topped with chicken and BBQ sauce" },
      { name: "Dr. Oetker Ristorante Margherita", price: "$7.00", note: "Premium thin-crust brand" },
      { name: "Gluten-Free Frozen Pizza",         price: "$9.00", note: "For gluten intolerance" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 5.50, aisle: "Frozen Meals, Aisle 15", inStock: true },
      { store: "Woolworths", price: 6.00, aisle: "Frozen Foods, Aisle 14", inStock: true },
      { store: "Aldi",       price: 4.99, aisle: "Frozen Aisle",           inStock: true },
    ]
  },
  {
    name: "Vanilla Ice Cream 2L", unit: "each", category: "Frozen",
    coles: 6.00, woolworths: 5.50, image: "🍦",
    description: "Creamy Australian vanilla ice cream made with real vanilla bean. Smooth, rich and indulgent — perfect on its own or alongside your favourite dessert.",
    ingredients: "Milk, cream, skim milk powder, sugar, glucose syrup, vanilla bean paste (0.1%), stabilisers (410, 412, 407, 466), emulsifier (471).",
    nutrition: { servingSize: "2 scoops (100g)", rows: [
      { label: "Energy",        per100: "830kJ",  perServing: "830kJ"  },
      { label: "Protein",       per100: "3.5g",   perServing: "3.5g"   },
      { label: "Fat, total",    per100: "8.0g",   perServing: "8.0g"   },
      { label: "— Saturated",   per100: "5.5g",   perServing: "5.5g"   },
      { label: "Carbohydrate",  per100: "25.0g",  perServing: "25.0g"  },
      { label: "— Sugars",      per100: "22.0g",  perServing: "22.0g"  },
      { label: "Sodium",        per100: "68mg",   perServing: "68mg"   },
      { label: "Calcium",       per100: "130mg",  perServing: "130mg"  },
    ]},
    allergens: ["Milk"], mayContain: ["Eggs", "Soy", "Tree Nuts"],
    alternatives: [
      { name: "Bulla Creamy Classics Vanilla 2L", price: "$7.50", note: "Premium Australian brand" },
      { name: "Ben & Jerry's Vanilla 458mL",      price: "$9.00", note: "Super premium, smaller tub" },
      { name: "Connoisseur Vanilla Bean 1L",      price: "$7.00", note: "Premium single-serve size" },
    ],
    whereToBuy: [
      { store: "Coles",      price: 6.00, aisle: "Frozen Desserts, Aisle 15", inStock: true },
      { store: "Woolworths", price: 5.50, aisle: "Frozen Foods, Aisle 14",    inStock: true },
      { store: "Aldi",       price: 4.99, aisle: "Frozen Aisle",              inStock: true },
    ]
  },
];
