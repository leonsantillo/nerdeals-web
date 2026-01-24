import React, { useState } from 'react';

// ============================================
// CATEGORÍAS ACTUALIZADAS
// ============================================
const categories = [
  { id: 'all', name: 'Todas', emoji: '🔥', color: '#22c55e' },
  { id: 'gaming', name: 'Gaming', emoji: '🎮', color: '#8b5cf6' },
  { id: 'pc', name: 'PC & Laptops', emoji: '💻', color: '#3b82f6' },
  { id: 'mobile', name: 'Mobile', emoji: '📱', color: '#10b981' },
  { id: 'apple', name: 'Apple & Mac', emoji: '🍎', color: '#f43f5e' },
  { id: 'office', name: 'Home Office', emoji: '🏠', color: '#6366f1' },
  { id: 'streaming', name: 'Streaming', emoji: '📺', color: '#f97316' },
  { id: 'audio', name: 'Audio', emoji: '🎧', color: '#ec4899' },
  { id: 'storage', name: 'Storage', emoji: '💾', color: '#06b6d4' },
  { id: 'suscripciones', name: 'Suscripciones', emoji: '🎫', color: '#a855f7' },
  { id: 'geek', name: 'Geek & Merch', emoji: '👾', color: '#eab308' },
];

// ============================================
// DATOS DE OFERTAS - 5 POR CATEGORÍA
// ============================================
const dealsData = [
  // ==================== GAMING (5) ====================
  {
    id: 1,
    name: "NVIDIA RTX 4060 8GB GDDR6",
    brand: "ASUS Dual",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop",
    currentPrice: 485000,
    avgPrice: 629000,
    discount: 23,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "gaming",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 2,
    name: "Teclado Mecánico RGB Hot-Swap",
    brand: "Redragon K530",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=300&fit=crop",
    currentPrice: 45900,
    avgPrice: 62000,
    discount: 26,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "gaming",
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
  },
  {
    id: 3,
    name: "Mouse Inalámbrico Lightspeed",
    brand: "Logitech G502 X",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    currentPrice: 89000,
    avgPrice: 145000,
    discount: 39,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "gaming",
    publishedAt: new Date(Date.now() - 30 * 60 * 1000),
  },
  {
    id: 4,
    name: "Silla Gamer Ergonómica",
    brand: "Cougar Armor",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=300&fit=crop",
    currentPrice: 289000,
    avgPrice: 380000,
    discount: 24,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "gaming",
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: 5,
    name: "Gamepad Inalámbrico",
    brand: "Xbox Series X",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400&h=300&fit=crop",
    currentPrice: 65000,
    avgPrice: 95000,
    discount: 32,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "gaming",
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
  },

  // ==================== PC & LAPTOPS (5) ====================
  {
    id: 6,
    name: "Notebook 15.6\" Ryzen 5 16GB 512SSD",
    brand: "Lenovo IdeaPad",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    currentPrice: 650000,
    avgPrice: 850000,
    discount: 24,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "pc",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 7,
    name: "PC Gamer Ryzen 5 5600X RTX 3060",
    brand: "Armada",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
    currentPrice: 890000,
    avgPrice: 1150000,
    discount: 23,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "pc",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
  },
  {
    id: 8,
    name: "Memoria RAM DDR5 32GB 5600MHz",
    brand: "Corsair Vengeance",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop",
    currentPrice: 125000,
    avgPrice: 178000,
    discount: 30,
    store: "megatone",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "pc",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
  },
  {
    id: 9,
    name: "Procesador Ryzen 7 5800X",
    brand: "AMD",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
    currentPrice: 320000,
    avgPrice: 420000,
    discount: 24,
    store: "garbarino",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "pc",
    publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000),
  },
  {
    id: 10,
    name: "Fuente 750W 80 Plus Gold",
    brand: "EVGA SuperNOVA",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop",
    currentPrice: 145000,
    avgPrice: 195000,
    discount: 26,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "pc",
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
  },

  // ==================== MOBILE (5) ====================
  {
    id: 11,
    name: "Galaxy S23 Ultra 256GB",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
    currentPrice: 1200000,
    avgPrice: 1550000,
    discount: 23,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "mobile",
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
  },
  {
    id: 12,
    name: "Moto G54 5G 256GB",
    brand: "Motorola",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    currentPrice: 280000,
    avgPrice: 350000,
    discount: 20,
    store: "garbarino",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "mobile",
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
  },
  {
    id: 13,
    name: "Redmi Note 13 Pro 256GB",
    brand: "Xiaomi",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
    currentPrice: 320000,
    avgPrice: 420000,
    discount: 24,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "mobile",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
  },
  {
    id: 14,
    name: "Cargador Inalámbrico 15W",
    brand: "Anker",
    image: "https://images.unsplash.com/photo-1622675272481-38a38c238cf1?w=400&h=300&fit=crop",
    currentPrice: 25000,
    avgPrice: 38000,
    discount: 34,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "mobile",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 15,
    name: "Power Bank 20000mAh 65W",
    brand: "Baseus",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop",
    currentPrice: 55000,
    avgPrice: 75000,
    discount: 27,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "mobile",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
  },

  // ==================== APPLE & MAC (5) ====================
  {
    id: 16,
    name: "AirPods Pro 2da Generación",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",
    currentPrice: 320000,
    avgPrice: 420000,
    discount: 24,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "apple",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 17,
    name: "Magic Keyboard con Touch ID",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
    currentPrice: 189000,
    avgPrice: 250000,
    discount: 24,
    store: "garbarino",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "apple",
    publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000),
  },
  {
    id: 18,
    name: "Apple Watch Series 9 45mm",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop",
    currentPrice: 650000,
    avgPrice: 820000,
    discount: 21,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "apple",
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: 19,
    name: "iPad 10.9\" 64GB WiFi",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    currentPrice: 580000,
    avgPrice: 750000,
    discount: 23,
    store: "garbarino",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "apple",
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
  },
  {
    id: 20,
    name: "Cable USB-C a Lightning 2m",
    brand: "Apple Original",
    image: "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=400&h=300&fit=crop",
    currentPrice: 25000,
    avgPrice: 38000,
    discount: 34,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "apple",
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
  },

  // ==================== HOME OFFICE (5) ====================
  {
    id: 21,
    name: 'Monitor 27" 144Hz IPS 1ms',
    brand: "LG UltraGear",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    currentPrice: 289000,
    avgPrice: 385000,
    discount: 25,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "office",
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: 22,
    name: "Webcam 4K Pro Streaming",
    brand: "Logitech Brio",
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&h=300&fit=crop",
    currentPrice: 185000,
    avgPrice: 280000,
    discount: 34,
    store: "garbarino",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "office",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
  },
  {
    id: 23,
    name: "Escritorio Elevable Eléctrico",
    brand: "Flexispot",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop",
    currentPrice: 420000,
    avgPrice: 580000,
    discount: 28,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "office",
    publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000),
  },
  {
    id: 24,
    name: "Luz LED para Monitor",
    brand: "BenQ ScreenBar",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
    currentPrice: 95000,
    avgPrice: 130000,
    discount: 27,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "office",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
  },
  {
    id: 25,
    name: "Hub USB-C 7 en 1",
    brand: "Anker",
    image: "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=400&h=300&fit=crop",
    currentPrice: 45000,
    avgPrice: 65000,
    discount: 31,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "office",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },

  // ==================== STREAMING (5) ====================
  {
    id: 26,
    name: "Fire TV Stick 4K Max",
    brand: "Amazon",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
    currentPrice: 42000,
    avgPrice: 65000,
    discount: 35,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "streaming",
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
  },
  {
    id: 27,
    name: "Smart TV 55\" 4K UHD",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
    currentPrice: 520000,
    avgPrice: 720000,
    discount: 28,
    store: "garbarino",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "streaming",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
  },
  {
    id: 28,
    name: "Chromecast con Google TV 4K",
    brand: "Google",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
    currentPrice: 48000,
    avgPrice: 68000,
    discount: 29,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "streaming",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
  },
  {
    id: 29,
    name: "Soundbar 2.1 Bluetooth",
    brand: "JBL Bar",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop",
    currentPrice: 180000,
    avgPrice: 250000,
    discount: 28,
    store: "megatone",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "streaming",
    publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000),
  },
  {
    id: 30,
    name: "Proyector Full HD 1080p",
    brand: "Epson",
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=400&h=300&fit=crop",
    currentPrice: 450000,
    avgPrice: 620000,
    discount: 27,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "streaming",
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
  },

  // ==================== AUDIO (5) ====================
  {
    id: 31,
    name: "Auriculares Gaming 7.1",
    brand: "HyperX Cloud III",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop",
    currentPrice: 156000,
    avgPrice: 210000,
    discount: 26,
    store: "megatone",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "audio",
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
  },
  {
    id: 32,
    name: "Parlante Bluetooth Portátil",
    brand: "JBL Flip 6",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    currentPrice: 95000,
    avgPrice: 130000,
    discount: 27,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "audio",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 33,
    name: "Micrófono USB Streaming",
    brand: "Blue Yeti",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop",
    currentPrice: 185000,
    avgPrice: 250000,
    discount: 26,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "audio",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
  },
  {
    id: 34,
    name: "Auriculares Noise Cancelling",
    brand: "Sony WH-1000XM5",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
    currentPrice: 380000,
    avgPrice: 520000,
    discount: 27,
    store: "garbarino",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "audio",
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
  },
  {
    id: 35,
    name: "Earbuds True Wireless",
    brand: "Samsung Galaxy Buds2",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=300&fit=crop",
    currentPrice: 85000,
    avgPrice: 120000,
    discount: 29,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "audio",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
  },

  // ==================== STORAGE (5) ====================
  {
    id: 36,
    name: "SSD NVMe 1TB Gen4 7000MB/s",
    brand: "Samsung 990 PRO",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
    currentPrice: 142000,
    avgPrice: 189000,
    discount: 25,
    store: "garbarino",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "storage",
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
  },
  {
    id: 37,
    name: "Disco Externo 2TB USB 3.0",
    brand: "Seagate",
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=300&fit=crop",
    currentPrice: 75000,
    avgPrice: 98000,
    discount: 23,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "storage",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
  },
  {
    id: 38,
    name: "Pendrive 128GB USB 3.2",
    brand: "SanDisk Ultra",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
    currentPrice: 12000,
    avgPrice: 18000,
    discount: 33,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "storage",
    publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000),
  },
  {
    id: 39,
    name: "MicroSD 256GB U3 A2",
    brand: "Samsung EVO",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&h=300&fit=crop",
    currentPrice: 35000,
    avgPrice: 48000,
    discount: 27,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "storage",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 40,
    name: "SSD SATA 500GB",
    brand: "Kingston A400",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
    currentPrice: 42000,
    avgPrice: 58000,
    discount: 28,
    store: "megatone",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "storage",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
  },

  // ==================== SUSCRIPCIONES (5) ====================
  {
    id: 41,
    name: "PlayStation Plus 12 Meses",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop",
    currentPrice: 45000,
    avgPrice: 65000,
    discount: 31,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "available",
    category: "suscripciones",
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
  },
  {
    id: 42,
    name: "Xbox Game Pass Ultimate 3 Meses",
    brand: "Microsoft",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=300&fit=crop",
    currentPrice: 28000,
    avgPrice: 38000,
    discount: 26,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "suscripciones",
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
  },
  {
    id: 43,
    name: "Nintendo Switch Online 12 Meses",
    brand: "Nintendo",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=300&fit=crop",
    currentPrice: 18000,
    avgPrice: 25000,
    discount: 28,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "suscripciones",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
  },
  {
    id: 44,
    name: "Spotify Premium 6 Meses",
    brand: "Spotify",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop",
    currentPrice: 12000,
    avgPrice: 18000,
    discount: 33,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "available",
    category: "suscripciones",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 45,
    name: "YouTube Premium 12 Meses",
    brand: "Google",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop",
    currentPrice: 22000,
    avgPrice: 32000,
    discount: 31,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "suscripciones",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
  },

  // ==================== GEEK & MERCH (5) ====================
  {
    id: 46,
    name: "Funko Pop! The Mandalorian",
    brand: "Funko",
    image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=300&fit=crop",
    currentPrice: 18000,
    avgPrice: 28000,
    discount: 36,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "geek",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 47,
    name: "Mousepad XXL RGB Gaming",
    brand: "Razer",
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=400&h=300&fit=crop",
    currentPrice: 45000,
    avgPrice: 62000,
    discount: 27,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "geek",
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: 48,
    name: "Lámpara LED Pikachu",
    brand: "Pokemon",
    image: "https://images.unsplash.com/photo-1609372332255-611485350f25?w=400&h=300&fit=crop",
    currentPrice: 25000,
    avgPrice: 38000,
    discount: 34,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "geek",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
  },
  {
    id: 49,
    name: "Remera Stranger Things",
    brand: "Netflix Official",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    currentPrice: 15000,
    avgPrice: 22000,
    discount: 32,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    category: "geek",
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
  },
  {
    id: 50,
    name: "Lego Star Wars Millennium Falcon",
    brand: "Lego",
    image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=400&h=300&fit=crop",
    currentPrice: 85000,
    avgPrice: 120000,
    discount: 29,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    category: "geek",
    publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000),
  },

  // ==================== SOLD OUT / FINISHED ====================
  {
    id: 51,
    name: "PlayStation 5 Slim Digital",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop",
    currentPrice: 699000,
    avgPrice: 950000,
    discount: 26,
    store: "mercadolibre",
    url: "#",
    status: "soldout",
    type: "flash",
    stock: "none",
    category: "gaming",
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: 52,
    name: "RTX 4090 24GB",
    brand: "NVIDIA",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop",
    currentPrice: 2500000,
    avgPrice: 3200000,
    discount: 22,
    store: "mercadolibre",
    url: "#",
    status: "soldout",
    type: "flash",
    stock: "none",
    category: "gaming",
    publishedAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
  },
  {
    id: 53,
    name: "iPhone 15 Pro Max 256GB",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    currentPrice: 2200000,
    avgPrice: 2800000,
    discount: 21,
    store: "garbarino",
    url: "#",
    status: "finished",
    type: "flash",
    stock: "none",
    category: "apple",
    publishedAt: new Date(Date.now() - 72 * 60 * 60 * 1000),
  },
];

// ============================================
// POTENCIADORES (PROMOS BANCARIAS)
// ============================================
const potenciadores = [
  { id: 1, banco: "Galicia", bancoColor: "#FF6B00", comercio: "Garbarino", descuento: "30%", tope: "$50.000", dia: "Jueves", vigenciaHasta: "31/01" },
  { id: 2, banco: "Macro", bancoColor: "#003087", comercio: "Megatone", descuento: "25%", tope: "$40.000", dia: "Miércoles", vigenciaHasta: "28/02" },
  { id: 3, banco: "Santander", bancoColor: "#EC0000", comercio: "Musimundo", descuento: "25%", tope: "$30.000", dia: "Martes", vigenciaHasta: "28/02" },
];

// ============================================
// CONFIG
// ============================================
const storeLogos = {
  mercadolibre: { name: "Mercado Libre", color: "#FFE600", textColor: "#333" },
  garbarino: { name: "Garbarino", color: "#E31837", textColor: "#FFF" },
  megatone: { name: "Megatone", color: "#0066CC", textColor: "#FFF" },
  amazon: { name: "Amazon", color: "#FF9900", textColor: "#333" },
};

// ============================================
// UTILIDADES
// ============================================
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(price);
};

const getTimeAgo = (date) => {
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  if (diffMins < 60) return `Hace ${diffMins} min`;
  if (diffHours < 24) return `Hace ${diffHours}h`;
  return `Hace ${diffDays}d`;
};

// ============================================
// COMPONENTES
// ============================================
const SavingsIndicator = ({ discount }) => {
  let level = discount >= 60 ? 4 : discount >= 41 ? 3 : discount >= 26 ? 2 : 1;
  const isLegendary = discount >= 60;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '12px', color: '#9ca3af' }}>Ahorro:</span>
      <div style={{ display: 'flex', gap: '2px' }}>
        {[1, 2, 3, 4].map((i) => (
          <span key={i} style={{ fontSize: '16px', fontWeight: 'bold', color: i <= level ? (isLegendary ? '#f97316' : '#22c55e') : '#374151', opacity: i <= level ? 1 : 0.3 }}>$</span>
        ))}
      </div>
      {isLegendary && <span style={{ fontSize: '12px', background: 'linear-gradient(135deg, #f97316, #eab308)', padding: '2px 8px', borderRadius: '4px', color: '#000', fontWeight: 'bold' }}>🔥 LEGENDARY</span>}
    </div>
  );
};

const StockIndicator = ({ stock, status }) => {
  if (status === 'soldout') return <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#ef4444' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></span><span>Sold Out 💀</span></div>;
  if (status === 'finished') return <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6b7280' }}></span><span>Finalizado</span></div>;
  if (stock === 'low') return <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#fbbf24' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fbbf24' }}></span><span>Pocas unidades</span></div>;
  return <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#22c55e' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></span><span>Disponible</span></div>;
};

const TypeBadge = ({ type }) => {
  if (type === 'flash') return <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: 'white', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}><span>⚡</span><span>Flash</span></div>;
  return <div></div>;
};

const StoreBadge = ({ store }) => {
  const info = storeLogos[store] || { name: store, color: '#666', textColor: '#FFF' };
  return <div style={{ background: info.color, color: info.textColor, padding: '4px 10px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>{info.name}</div>;
};

const StatusOverlay = ({ status }) => {
  if (status === 'active') return null;
  const config = { soldout: { text: 'SOLD OUT 💀', color: '#ef4444' }, finished: { text: 'FINALIZADO', color: '#6b7280' } };
  const { text, color } = config[status] || config.finished;
  return <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0,0,0,0.9)', color: color, fontWeight: 'bold', fontSize: '14px', padding: '10px 20px', borderRadius: '8px', border: `2px solid ${color}`, textTransform: 'uppercase' }}>{text}</div>;
};

const DealCard = ({ deal }) => {
  const isInactive = deal.status !== 'active';
  return (
    <div style={{ background: 'linear-gradient(to bottom right, #111827, #030712)', borderRadius: '16px', overflow: 'hidden', border: `1px solid ${isInactive ? 'rgba(55,65,81,0.3)' : 'rgba(55,65,81,0.5)'}`, position: 'relative', opacity: isInactive ? 0.6 : 1, filter: isInactive ? 'grayscale(40%)' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid rgba(55,65,81,0.3)' }}>
        <TypeBadge type={deal.type} />
        <StoreBadge store={deal.store} />
      </div>
      <div style={{ position: 'relative', height: '160px', overflow: 'hidden', background: '#1f2937' }}>
        <img src={deal.image} alt={deal.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: isInactive ? 'grayscale(50%)' : 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #111827, transparent)' }} />
        <div style={{ position: 'absolute', top: '12px', right: '12px', background: isInactive ? '#6b7280' : '#22c55e', color: isInactive ? '#fff' : '#000', fontWeight: 'bold', fontSize: '14px', padding: '6px 12px', borderRadius: '8px' }}>-{deal.discount}%</div>
        <StatusOverlay status={deal.status} />
      </div>
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <p style={{ color: '#4ade80', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', margin: '0 0 4px 0' }}>{deal.brand}</p>
          <h3 style={{ color: 'white', fontWeight: '600', fontSize: '15px', lineHeight: '1.3', margin: 0 }}>{deal.name}</h3>
        </div>
        <div>
          <span style={{ fontSize: '26px', fontWeight: 'bold', color: 'white' }}>{formatPrice(deal.currentPrice)}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
            <span style={{ color: '#6b7280', textDecoration: 'line-through', fontSize: '13px' }}>{formatPrice(deal.avgPrice)}</span>
            <span style={{ color: '#9ca3af', fontSize: '11px' }}>promedio 30d</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '12px', borderTop: '1px solid rgba(55,65,81,0.5)' }}>
          <SavingsIndicator discount={deal.discount} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <StockIndicator stock={deal.stock} status={deal.status} />
            <span style={{ fontSize: '11px', color: '#6b7280' }}>{getTimeAgo(deal.publishedAt)}</span>
          </div>
        </div>
        <a href={isInactive ? undefined : deal.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', pointerEvents: isInactive ? 'none' : 'auto' }}>
          <button style={{ width: '100%', background: isInactive ? '#374151' : 'linear-gradient(to right, #22c55e, #06b6d4)', color: isInactive ? '#9ca3af' : 'black', fontWeight: 'bold', padding: '14px 24px', borderRadius: '12px', border: 'none', cursor: isInactive ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '14px' }}>
            <span>{isInactive ? 'Ya no disponible' : `Ver en ${storeLogos[deal.store]?.name || deal.store}`}</span>
            {!isInactive && <span>→</span>}
          </button>
        </a>
      </div>
    </div>
  );
};

const Header = () => {
  const activeCount = dealsData.filter(d => d.status === 'active').length;
  return (
    <header style={{ borderBottom: '1px solid rgba(55,65,81,0.5)', background: 'rgba(0,0,0,0.9)', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(8px)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '42px', height: '42px', background: 'linear-gradient(135deg, #4ade80, #06b6d4)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'black', fontWeight: '900', fontSize: '20px' }}>N</span>
          </div>
          <h1 style={{ fontSize: '22px', fontWeight: 'bold', color: 'white', margin: 0 }}>Ner<span style={{ color: '#4ade80' }}>Deals</span></h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#9ca3af' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></span>
          <span>{activeCount} deals activos</span>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section style={{ padding: '40px 20px 24px', textAlign: 'center' }}>
    <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', lineHeight: '1.15', margin: '0 0 12px 0' }}>
      Ofertas tech <span style={{ color: '#4ade80' }}>sin humo</span>
    </h2>
    <p style={{ color: '#9ca3af', fontSize: '16px', margin: '0 auto', maxWidth: '500px' }}>
      Curamos las mejores ofertas tech de Argentina.<br />
      <strong style={{ color: '#4ade80' }}>Precios reales. Sin humo.</strong>
    </p>
  </section>
);

const Stats = () => {
  const totalDeals = dealsData.filter(d => d.status === 'active').length;
  const totalSavings = dealsData.filter(d => d.status === 'active').reduce((acc, deal) => acc + (deal.avgPrice - deal.currentPrice), 0);
  return (
    <section style={{ maxWidth: '600px', margin: '0 auto 32px', padding: '0 20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', background: 'rgba(17,24,39,0.6)', borderRadius: '12px', border: '1px solid rgba(55,65,81,0.5)', padding: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#4ade80', margin: 0 }}>{totalDeals}</p>
          <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>deals dropeados</p>
        </div>
        <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(55,65,81,0.5)', borderRight: '1px solid rgba(55,65,81,0.5)' }}>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#4ade80', margin: 0 }}>${Math.round(totalSavings / 1000000)}M</p>
          <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>ahorro potencial</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#4ade80', margin: 0 }}>15m</p>
          <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>última update</p>
        </div>
      </div>
    </section>
  );
};

const CategoriesGrid = ({ activeCategory, setActiveCategory }) => (
  <section style={{ maxWidth: '1000px', margin: '0 auto 32px', padding: '0 20px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))', gap: '10px' }}>
      {categories.map(cat => (
        <button key={cat.id} onClick={() => setActiveCategory(cat.id)} style={{
          background: activeCategory === cat.id ? `${cat.color}20` : 'rgba(55,65,81,0.2)',
          border: activeCategory === cat.id ? `2px solid ${cat.color}` : '2px solid transparent',
          borderRadius: '12px', padding: '14px 8px', cursor: 'pointer', transition: 'all 0.2s',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px'
        }}>
          <span style={{ fontSize: '24px' }}>{cat.emoji}</span>
          <span style={{ fontSize: '11px', fontWeight: '600', color: activeCategory === cat.id ? cat.color : '#9ca3af', textAlign: 'center' }}>{cat.name}</span>
        </button>
      ))}
    </div>
  </section>
);

const Potenciadores = () => (
  <section style={{ maxWidth: '1200px', margin: '0 auto 40px', padding: '0 20px' }}>
    <div style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.05))', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '16px', padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <span style={{ fontSize: '24px' }}>💡</span>
        <div>
          <h3 style={{ color: 'white', fontSize: '18px', fontWeight: '600', margin: 0 }}>Potenciá tu compra</h3>
          <p style={{ color: '#9ca3af', fontSize: '13px', margin: '4px 0 0 0' }}>Combiná con estas promos y ahorrá más</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {potenciadores.map(p => (
          <div key={p.id} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid rgba(55,65,81,0.3)' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: p.bancoColor, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '11px' }}>{p.banco.substring(0, 2).toUpperCase()}</div>
            <div>
              <p style={{ color: 'white', fontSize: '14px', fontWeight: '600', margin: 0 }}>{p.descuento} en {p.comercio}</p>
              <p style={{ color: '#6b7280', fontSize: '11px', margin: '2px 0 0 0' }}>{p.dia} · Tope {p.tope} · Hasta {p.vigenciaHasta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DealsSection = ({ deals, title, emoji }) => {
  if (deals.length === 0) return null;
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto 40px', padding: '0 20px' }}>
      <h3 style={{ color: 'white', fontSize: '18px', fontWeight: '600', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>{emoji}</span> {title}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {deals.map(deal => <DealCard key={deal.id} deal={deal} />)}
      </div>
    </section>
  );
};

const ComerciosFeedback = () => (
  <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
    <div style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(6,182,212,0.05))', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '16px', padding: '28px' }}>
      <div style={{ fontSize: '32px', marginBottom: '16px' }}>🏪</div>
      <h3 style={{ color: 'white', fontSize: '18px', fontWeight: '600', margin: '0 0 12px 0' }}>¿Tenés un comercio?</h3>
      <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>Si querés que publiquemos tus ofertas tech, contactanos. Buscamos comercios con buena reputación y ofertas reales.</p>
      <a href="https://forms.gle/Jk2QGcXYH3UGujuY7" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#4ade80', fontWeight: '600', padding: '12px 20px', borderRadius: '10px', border: '1px solid #4ade80', textDecoration: 'none', fontSize: '14px' }}><span>Contactar</span><span>→</span></a>
    </div>
    <div style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.05))', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '16px', padding: '28px' }}>
      <div style={{ fontSize: '32px', marginBottom: '16px' }}>🎯</div>
      <h3 style={{ color: 'white', fontSize: '18px', fontWeight: '600', margin: '0 0 12px 0' }}>¿Encontraste un deal épico?</h3>
      <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>¿Viste una oferta que deberíamos publicar? ¿Algo no funciona? Compartilo y lo revisamos.</p>
      <a href="https://forms.gle/F9feFAC2i2f67BsN8" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#60a5fa', fontWeight: '600', padding: '12px 20px', borderRadius: '10px', border: '1px solid #60a5fa', textDecoration: 'none', fontSize: '14px' }}><span>Enviar sugerencia</span><span>→</span></a>
    </div>
    <div style={{ background: 'linear-gradient(135deg, rgba(251,191,36,0.1), rgba(245,158,11,0.05))', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '16px', padding: '28px' }}>
      <div style={{ fontSize: '32px', marginBottom: '16px' }}>☕</div>
      <h3 style={{ color: 'white', fontSize: '18px', fontWeight: '600', margin: '0 0 12px 0' }}>¿Te salvamos el bolsillo?</h3>
      <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>NerDeals es gratis y sin publicidad molesta. Si te sirvió, invitanos un cafecito ❤️</p>
      <a href="https://cafecito.app/nerdeals" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#6f4e37', color: 'white', fontWeight: '600', padding: '12px 20px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}><span>☕</span><span>Invitar un cafecito</span></a>
    </div>
  </section>
);

const LegalModal = ({ type, onClose }) => {
  const content = {
    terminos: {
      title: 'Términos y Condiciones',
      sections: [
        { title: '1. Sobre NerDeals', text: 'NerDeals es un servicio independiente de curaduría y difusión de ofertas tecnológicas disponible en la República Argentina. NerDeals no es una tienda, no comercializa productos, no intermedia ventas ni presta servicios de pago, y no mantiene relación contractual directa con los vendedores de los productos publicados.' },
        { title: '2. Naturaleza del servicio', text: 'NerDeals identifica y comparte ofertas que considera relevantes para su audiencia, basándose en criterios propios de análisis de precio, reputación del vendedor y disponibilidad pública de la información. NerDeals participa en programas de afiliados de terceros, tales como Mercado Libre Partners y Amazon Associates, entre otros. Cuando el usuario hace clic en un enlace y realiza una compra en un sitio de terceros, NerDeals puede recibir una comisión, sin que ello implique un costo adicional para el usuario.' },
        { title: '3. Información de precios y disponibilidad', text: 'Los precios, descuentos y disponibilidad mostrados en NerDeals son referenciales y pueden modificarse en cualquier momento por los vendedores sin previo aviso. NerDeals no garantiza la vigencia de los precios publicados ni la disponibilidad de stock. El usuario debe verificar siempre el precio final, condiciones de venta y características del producto directamente en el sitio del vendedor antes de realizar una compra.' },
        { title: '4. Comparaciones e historial de precios', text: 'Las comparaciones de precios (por ejemplo, "precio promedio de 30 días") se basan en estimaciones realizadas a partir de información pública disponible al momento del análisis. Dichas comparaciones: no constituyen una garantía de precio, no representan un historial exhaustivo, y pueden no reflejar la totalidad de las variaciones del mercado. NerDeals no garantiza la exactitud absoluta de estos datos, los cuales se ofrecen únicamente con fines informativos.' },
        { title: '5. Responsabilidad', text: 'NerDeals no es responsable por: las transacciones realizadas en sitios de terceros, la calidad, funcionamiento o autenticidad de los productos, envíos, garantías, devoluciones, cancelaciones o reclamos. Cualquier inconveniente relacionado con la compra debe ser gestionado exclusivamente entre el usuario y el vendedor o plataforma correspondiente.' },
        { title: '6. Limitación de responsabilidad', text: 'El uso del sitio NerDeals implica la aceptación expresa de que el servicio se brinda "tal como está", sin garantías explícitas ni implícitas. En ningún caso NerDeals será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso del sitio o de la información publicada.' },
        { title: '7. Aceptación', text: 'El acceso y uso de NerDeals implica la aceptación plena de los presentes Términos y Condiciones.' },
      ]
    },
    privacidad: {
      title: 'Política de Privacidad',
      sections: [
        { title: '1. Información que recopilamos', text: 'NerDeals recopila información mínima y no identificable con el objetivo de mejorar la experiencia del usuario y el funcionamiento del sitio. Esta información puede incluir: datos de navegación anónimos, tipo de dispositivo, navegador y sistema operativo, interacciones con enlaces y contenidos del sitio. NerDeals no recopila datos personales sensibles ni información que permita identificar directamente a los usuarios.' },
        { title: '2. Uso de cookies', text: 'NerDeals utiliza cookies propias y de terceros con fines funcionales, analíticos y de seguimiento de conversiones de afiliados. Las cookies pueden utilizarse para: analizar el uso del sitio, medir el rendimiento de las ofertas publicadas, atribuir compras a programas de afiliados. El usuario puede configurar su navegador para rechazar o eliminar cookies, aunque esto puede afectar el correcto funcionamiento del sitio.' },
        { title: '3. Enlaces a sitios de terceros', text: 'NerDeals contiene enlaces a sitios web de terceros. Al hacer clic en una oferta, el usuario es redirigido a plataformas externas que cuentan con sus propias políticas de privacidad y términos, sobre los cuales NerDeals no tiene control ni responsabilidad.' },
        { title: '4. Programas de afiliados', text: 'NerDeals participa en programas de afiliados de terceros. Estos programas pueden utilizar cookies u otras tecnologías de seguimiento para registrar las compras originadas desde nuestro sitio, sin generar ningún costo adicional para el usuario.' },
        { title: '5. Compartir información', text: 'NerDeals no vende, alquila ni comparte información personal identificable de los usuarios con terceros. La información recopilada es utilizada únicamente con fines estadísticos, analíticos y operativos.' },
        { title: '6. Seguridad', text: 'NerDeals adopta medidas razonables para proteger la información recopilada. Sin embargo, el usuario reconoce que ningún sistema de transmisión o almacenamiento de datos es completamente seguro, y NerDeals no puede garantizar una seguridad absoluta.' },
        { title: '7. Aceptación', text: 'El uso del sitio NerDeals implica la aceptación de la presente Política de Privacidad.' },
      ]
    }
  };
  const { title, sections } = content[type];
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#111827', borderRadius: '16px', border: '1px solid rgba(55,65,81,0.5)', maxWidth: '600px', maxHeight: '80vh', overflow: 'auto', padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{title}</h2>
          <button onClick={onClose} style={{ background: 'rgba(55,65,81,0.5)', border: 'none', color: '#9ca3af', width: '36px', height: '36px', borderRadius: '8px', cursor: 'pointer', fontSize: '18px' }}>✕</button>
        </div>
        <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '24px' }}>Última actualización: Enero 2025</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {sections.map((section, i) => (
            <div key={i}>
              <h3 style={{ color: 'white', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>{section.title}</h3>
              <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = ({ onOpenLegal }) => (
  <footer style={{ borderTop: '1px solid rgba(55,65,81,0.5)', background: 'rgba(0,0,0,0.5)' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '32px', marginBottom: '32px' }}>
        <div style={{ maxWidth: '320px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #4ade80, #06b6d4)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'black', fontWeight: '900', fontSize: '14px' }}>N</span>
            </div>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>Ner<span style={{ color: '#4ade80' }}>Deals</span></span>
          </div>
          <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
            Hecho con ❤️ y muchas horas de scroll.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '48px' }}>
          <div>
            <h4 style={{ color: '#9ca3af', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button onClick={() => onOpenLegal('terminos')} style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: '14px', cursor: 'pointer', textAlign: 'left', padding: 0 }}>Términos</button>
              <button onClick={() => onOpenLegal('privacidad')} style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: '14px', cursor: 'pointer', textAlign: 'left', padding: 0 }}>Privacidad</button>
            </div>
          </div>
          <div>
            <h4 style={{ color: '#9ca3af', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Seguinos</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="https://twitter.com/nerdeals" target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280', fontSize: '14px', textDecoration: 'none' }}>Twitter / X</a>
              <a href="https://cafecito.app/nerdeals" target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280', fontSize: '14px', textDecoration: 'none' }}>☕ Cafecito</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: 'rgba(55,65,81,0.2)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
        <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.7', margin: 0, textAlign: 'center' }}>
          NerDeals es un servicio gratuito de curaduría de ofertas. No vendemos productos. Los enlaces pueden generar comisiones de afiliado sin costo adicional para vos. Precios y disponibilidad sujetos a cambio.
        </p>
      </div>
      <div style={{ borderTop: '1px solid rgba(55,65,81,0.5)', paddingTop: '24px', textAlign: 'center' }}>
        <span style={{ color: '#4b5563', fontSize: '13px' }}>© 2025 NerDeals. Todos los derechos reservados.</span>
      </div>
    </div>
  </footer>
);

// ============================================
// APP PRINCIPAL
// ============================================
export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [legalModal, setLegalModal] = useState(null);

  const activeDeals = dealsData.filter(d => d.status === 'active');
  const inactiveDeals = dealsData.filter(d => d.status !== 'active');
  const filteredDeals = activeCategory === 'all' ? activeDeals : activeDeals.filter(d => d.category === activeCategory);
  const flashDeals = activeDeals.filter(d => d.type === 'flash');

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-150px', left: '5%', width: '500px', height: '500px', background: 'rgba(34,197,94,0.07)', borderRadius: '50%', filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: '-150px', right: '5%', width: '500px', height: '500px', background: 'rgba(6,182,212,0.07)', borderRadius: '50%', filter: 'blur(100px)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Header />
        <Hero />
        <Stats />
        <CategoriesGrid activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        {activeCategory === 'all' && flashDeals.length > 0 && <DealsSection deals={flashDeals} title="Flash Deals" emoji="⚡" />}
        <Potenciadores />
        <DealsSection deals={activeCategory === 'all' ? activeDeals.filter(d => d.type !== 'flash') : filteredDeals} title={activeCategory === 'all' ? 'Todas las ofertas' : categories.find(c => c.id === activeCategory)?.name} emoji={activeCategory === 'all' ? '🔥' : categories.find(c => c.id === activeCategory)?.emoji} />
        {inactiveDeals.length > 0 && <DealsSection deals={inactiveDeals} title="Ofertas finalizadas" emoji="⏰" />}
        <ComerciosFeedback />
        <Footer onOpenLegal={setLegalModal} />
      </div>
      {legalModal && <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />}
    </div>
  );
}