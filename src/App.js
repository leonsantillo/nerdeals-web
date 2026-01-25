import React, { useState, useMemo } from 'react';

// ============================================
// CATEGORÍAS (9 - sin Storage)
// ============================================
const categories = [
  { id: 'all', name: 'Todas', emoji: '🔥', color: '#22c55e' },
  { id: 'gaming', name: 'Gaming', emoji: '🎮', color: '#8b5cf6' },
  { id: 'pc', name: 'PC & Laptops', emoji: '💻', color: '#3b82f6' },
  { id: 'mobile', name: 'Mobile', emoji: '📱', color: '#10b981' },
  { id: 'apple', name: 'Apple', emoji: '🍎', color: '#f43f5e' },
  { id: 'office', name: 'Office', emoji: '🏠', color: '#6366f1' },
  { id: 'streaming', name: 'Streaming', emoji: '📺', color: '#f97316' },
  { id: 'audio', name: 'Audio', emoji: '🎧', color: '#ec4899' },
  { id: 'suscripciones', name: 'Subs', emoji: '🎫', color: '#a855f7' },
  { id: 'geek', name: 'Geek', emoji: '👾', color: '#eab308' },
];

// ============================================
// DATOS DE OFERTAS
// ============================================
const dealsData = [
  // GAMING (5)
  { id: 1, name: "NVIDIA RTX 4060 8GB GDDR6", brand: "ASUS Dual", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop", currentPrice: 485000, avgPrice: 629000, discount: 23, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "low", category: "gaming", publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000) },
  { id: 2, name: "Teclado Mecánico RGB Hot-Swap", brand: "Redragon K530", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=300&fit=crop", currentPrice: 45900, avgPrice: 62000, discount: 26, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "gaming", publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000) },
  { id: 3, name: "Mouse Inalámbrico Lightspeed", brand: "Logitech G502 X", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop", currentPrice: 89000, avgPrice: 145000, discount: 39, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "low", category: "gaming", publishedAt: new Date(Date.now() - 30 * 60 * 1000) },
  { id: 4, name: "Silla Gamer Ergonómica", brand: "Cougar Armor", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=300&fit=crop", currentPrice: 289000, avgPrice: 380000, discount: 24, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "gaming", publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000) },
  { id: 5, name: "Gamepad Inalámbrico", brand: "Xbox Series X", image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400&h=300&fit=crop", currentPrice: 65000, avgPrice: 95000, discount: 32, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "low", category: "gaming", publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000) },

  // PC & LAPTOPS (5) - incluye storage
  { id: 6, name: "Notebook 15.6\" Ryzen 5 16GB 512SSD", brand: "Lenovo IdeaPad", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop", currentPrice: 650000, avgPrice: 850000, discount: 24, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "low", category: "pc", publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000) },
  { id: 7, name: "SSD NVMe 1TB Gen4 7000MB/s", brand: "Samsung 990 PRO", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop", currentPrice: 142000, avgPrice: 189000, discount: 25, store: "garbarino", url: "#", status: "active", type: "normal", stock: "available", category: "pc", publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000) },
  { id: 8, name: "Memoria RAM DDR5 32GB 5600MHz", brand: "Corsair Vengeance", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop", currentPrice: 125000, avgPrice: 178000, discount: 30, store: "megatone", url: "#", status: "active", type: "normal", stock: "available", category: "pc", publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000) },
  { id: 9, name: "Procesador Ryzen 7 5800X", brand: "AMD", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop", currentPrice: 320000, avgPrice: 420000, discount: 24, store: "garbarino", url: "#", status: "active", type: "normal", stock: "available", category: "pc", publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000) },
  { id: 10, name: "Disco Externo 2TB USB 3.0", brand: "Seagate", image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=300&fit=crop", currentPrice: 75000, avgPrice: 98000, discount: 23, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "pc", publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000) },

  // MOBILE (5)
  { id: 11, name: "Galaxy S23 Ultra 256GB", brand: "Samsung", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop", currentPrice: 1200000, avgPrice: 1550000, discount: 23, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "low", category: "mobile", publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000) },
  { id: 12, name: "Moto G54 5G 256GB", brand: "Motorola", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop", currentPrice: 280000, avgPrice: 350000, discount: 20, store: "garbarino", url: "#", status: "active", type: "normal", stock: "available", category: "mobile", publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000) },
  { id: 13, name: "Redmi Note 13 Pro 256GB", brand: "Xiaomi", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop", currentPrice: 320000, avgPrice: 420000, discount: 24, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "mobile", publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000) },
  { id: 14, name: "Cargador Inalámbrico 15W", brand: "Anker", image: "https://images.unsplash.com/photo-1622675272481-38a38c238cf1?w=400&h=300&fit=crop", currentPrice: 25000, avgPrice: 38000, discount: 34, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "low", category: "mobile", publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000) },
  { id: 15, name: "Power Bank 20000mAh 65W", brand: "Baseus", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop", currentPrice: 55000, avgPrice: 75000, discount: 27, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "mobile", publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000) },

  // APPLE (5)
  { id: 16, name: "AirPods Pro 2da Generación", brand: "Apple", image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop", currentPrice: 320000, avgPrice: 420000, discount: 24, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "low", category: "apple", publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000) },
  { id: 17, name: "Magic Keyboard con Touch ID", brand: "Apple", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop", currentPrice: 189000, avgPrice: 250000, discount: 24, store: "garbarino", url: "#", status: "active", type: "normal", stock: "available", category: "apple", publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000) },
  { id: 18, name: "Apple Watch Series 9 45mm", brand: "Apple", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop", currentPrice: 650000, avgPrice: 820000, discount: 21, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "apple", publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000) },
  { id: 19, name: "iPad 10.9\" 64GB WiFi", brand: "Apple", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop", currentPrice: 580000, avgPrice: 750000, discount: 23, store: "garbarino", url: "#", status: "active", type: "flash", stock: "low", category: "apple", publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000) },
  { id: 20, name: "Cable USB-C a Lightning 2m", brand: "Apple Original", image: "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=400&h=300&fit=crop", currentPrice: 25000, avgPrice: 38000, discount: 34, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "apple", publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000) },

  // OFFICE (5)
  { id: 21, name: 'Monitor 27" 144Hz IPS 1ms', brand: "LG UltraGear", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop", currentPrice: 289000, avgPrice: 385000, discount: 25, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "low", category: "office", publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000) },
  { id: 22, name: "Webcam 4K Pro Streaming", brand: "Logitech Brio", image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&h=300&fit=crop", currentPrice: 185000, avgPrice: 280000, discount: 34, store: "garbarino", url: "#", status: "active", type: "normal", stock: "available", category: "office", publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000) },
  { id: 23, name: "Escritorio Elevable Eléctrico", brand: "Flexispot", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop", currentPrice: 420000, avgPrice: 580000, discount: 28, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "office", publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000) },
  { id: 24, name: "Luz LED para Monitor", brand: "BenQ ScreenBar", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop", currentPrice: 95000, avgPrice: 130000, discount: 27, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "office", publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000) },
  { id: 25, name: "Hub USB-C 7 en 1", brand: "Anker", image: "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=400&h=300&fit=crop", currentPrice: 45000, avgPrice: 65000, discount: 31, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "low", category: "office", publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000) },

  // STREAMING (5)
  { id: 26, name: "Fire TV Stick 4K Max", brand: "Amazon", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop", currentPrice: 42000, avgPrice: 65000, discount: 35, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "low", category: "streaming", publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000) },
  { id: 27, name: "Smart TV 55\" 4K UHD", brand: "Samsung", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop", currentPrice: 520000, avgPrice: 720000, discount: 28, store: "garbarino", url: "#", status: "active", type: "normal", stock: "available", category: "streaming", publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000) },
  { id: 28, name: "Chromecast con Google TV 4K", brand: "Google", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop", currentPrice: 48000, avgPrice: 68000, discount: 29, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "streaming", publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000) },
  { id: 29, name: "Soundbar 2.1 Bluetooth", brand: "JBL Bar", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop", currentPrice: 180000, avgPrice: 250000, discount: 28, store: "megatone", url: "#", status: "active", type: "normal", stock: "available", category: "streaming", publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000) },
  { id: 30, name: "Proyector Full HD 1080p", brand: "Epson", image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=400&h=300&fit=crop", currentPrice: 450000, avgPrice: 620000, discount: 27, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "low", category: "streaming", publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000) },

  // AUDIO (5)
  { id: 31, name: "Auriculares Gaming 7.1", brand: "HyperX Cloud III", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop", currentPrice: 156000, avgPrice: 210000, discount: 26, store: "megatone", url: "#", status: "active", type: "normal", stock: "available", category: "audio", publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000) },
  { id: 32, name: "Parlante Bluetooth Portátil", brand: "JBL Flip 6", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop", currentPrice: 95000, avgPrice: 130000, discount: 27, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "low", category: "audio", publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000) },
  { id: 33, name: "Micrófono USB Streaming", brand: "Blue Yeti", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop", currentPrice: 185000, avgPrice: 250000, discount: 26, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "audio", publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000) },
  { id: 34, name: "Auriculares Noise Cancelling", brand: "Sony WH-1000XM5", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop", currentPrice: 380000, avgPrice: 520000, discount: 27, store: "garbarino", url: "#", status: "active", type: "flash", stock: "low", category: "audio", publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000) },
  { id: 35, name: "Earbuds True Wireless", brand: "Samsung Galaxy Buds2", image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=300&fit=crop", currentPrice: 85000, avgPrice: 120000, discount: 29, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "audio", publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000) },

  // SUSCRIPCIONES (5)
  { id: 36, name: "PlayStation Plus 12 Meses", brand: "Sony", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop", currentPrice: 45000, avgPrice: 65000, discount: 31, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "available", category: "suscripciones", publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000) },
  { id: 37, name: "Xbox Game Pass Ultimate 3M", brand: "Microsoft", image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=300&fit=crop", currentPrice: 28000, avgPrice: 38000, discount: 26, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "suscripciones", publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000) },
  { id: 38, name: "Nintendo Switch Online 12M", brand: "Nintendo", image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=300&fit=crop", currentPrice: 18000, avgPrice: 25000, discount: 28, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "suscripciones", publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000) },
  { id: 39, name: "Spotify Premium 6 Meses", brand: "Spotify", image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop", currentPrice: 12000, avgPrice: 18000, discount: 33, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "available", category: "suscripciones", publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000) },
  { id: 40, name: "YouTube Premium 12 Meses", brand: "Google", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop", currentPrice: 22000, avgPrice: 32000, discount: 31, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "suscripciones", publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000) },

  // GEEK (5)
  { id: 41, name: "Funko Pop! The Mandalorian", brand: "Funko", image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=300&fit=crop", currentPrice: 18000, avgPrice: 28000, discount: 36, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "low", category: "geek", publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000) },
  { id: 42, name: "Mousepad XXL RGB Gaming", brand: "Razer", image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=400&h=300&fit=crop", currentPrice: 45000, avgPrice: 62000, discount: 27, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "geek", publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000) },
  { id: 43, name: "Lámpara LED Pikachu", brand: "Pokemon", image: "https://images.unsplash.com/photo-1609372332255-611485350f25?w=400&h=300&fit=crop", currentPrice: 25000, avgPrice: 38000, discount: 34, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "geek", publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000) },
  { id: 44, name: "Remera Stranger Things", brand: "Netflix Official", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop", currentPrice: 15000, avgPrice: 22000, discount: 32, store: "mercadolibre", url: "#", status: "active", type: "flash", stock: "low", category: "geek", publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000) },
  { id: 45, name: "Lego Star Wars Millennium", brand: "Lego", image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=400&h=300&fit=crop", currentPrice: 85000, avgPrice: 120000, discount: 29, store: "mercadolibre", url: "#", status: "active", type: "normal", stock: "available", category: "geek", publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000) },

  // SOLD OUT
  { id: 46, name: "PlayStation 5 Slim Digital", brand: "Sony", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop", currentPrice: 699000, avgPrice: 950000, discount: 26, store: "mercadolibre", url: "#", status: "soldout", type: "flash", stock: "none", category: "gaming", publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
  { id: 47, name: "RTX 4090 24GB", brand: "NVIDIA", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop", currentPrice: 2500000, avgPrice: 3200000, discount: 22, store: "mercadolibre", url: "#", status: "soldout", type: "flash", stock: "none", category: "gaming", publishedAt: new Date(Date.now() - 48 * 60 * 60 * 1000) },
];

// ============================================
// POTENCIADORES
// ============================================
const potenciadores = [
  { id: 1, banco: "Galicia", color: "#FF6B00", comercio: "Garbarino", descuento: "30%", dia: "Jueves" },
  { id: 2, banco: "Macro", color: "#003087", comercio: "Megatone", descuento: "25%", dia: "Miércoles" },
  { id: 3, banco: "Santander", color: "#EC0000", comercio: "Musimundo", descuento: "25%", dia: "Martes" },
];

// ============================================
// CONFIG
// ============================================
const storeLogos = {
  mercadolibre: { name: "Mercado Libre", short: "MELI", color: "#FFE600", textColor: "#333" },
  garbarino: { name: "Garbarino", short: "GARBA", color: "#E31837", textColor: "#FFF" },
  megatone: { name: "Megatone", short: "MEGA", color: "#0066CC", textColor: "#FFF" },
};

// ============================================
// UTILS
// ============================================
const formatPrice = (p) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(p);
const getTimeAgo = (d) => { const m = Math.floor((new Date() - d) / 60000); if (m < 60) return `${m}m`; const h = Math.floor(m / 60); if (h < 24) return `${h}h`; return `${Math.floor(h / 24)}d`; };

// ============================================
// STYLES (Mobile First)
// ============================================
const styles = {
  container: { minHeight: '100vh', background: '#000', color: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' },
  // Header
  header: { background: '#000', borderBottom: '1px solid #222', position: 'sticky', top: 0, zIndex: 100 },
  headerInner: { maxWidth: '1200px', margin: '0 auto', padding: '12px 16px' },
  headerTop: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' },
  logo: { display: 'flex', alignItems: 'center', gap: '8px' },
  logoIcon: { width: '36px', height: '36px', background: 'linear-gradient(135deg, #4ade80, #06b6d4)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '18px', color: '#000' },
  logoText: { fontSize: '20px', fontWeight: 'bold' },
  headerBadges: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' },
  badge: { display: 'flex', alignItems: 'center', gap: '4px', background: '#111', padding: '6px 10px', borderRadius: '20px', fontSize: '12px' },
  searchBox: { display: 'flex', alignItems: 'center', background: '#111', borderRadius: '10px', padding: '10px 14px', gap: '8px' },
  searchInput: { background: 'transparent', border: 'none', outline: 'none', color: 'white', fontSize: '14px', width: '100%' },
  // Banner Potenciadores
  banner: { background: 'linear-gradient(90deg, #1e3a5f, #1e1e3f)', padding: '10px 16px', overflowX: 'auto', whiteSpace: 'nowrap' },
  bannerInner: { display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '1200px', margin: '0 auto' },
  bannerItem: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#d1d5db' },
  // Hero
  hero: { padding: '24px 16px 16px', textAlign: 'center' },
  heroTitle: { fontSize: '28px', fontWeight: 'bold', margin: '0 0 8px 0', lineHeight: 1.2 },
  heroSub: { fontSize: '14px', color: '#9ca3af', margin: 0 },
  // Stats
  stats: { display: 'flex', justifyContent: 'center', gap: '0', margin: '0 16px 20px', background: '#111', borderRadius: '12px', overflow: 'hidden' },
  statItem: { flex: 1, padding: '16px 8px', textAlign: 'center', borderRight: '1px solid #222' },
  statValue: { fontSize: '24px', fontWeight: 'bold', color: '#4ade80', margin: 0 },
  statLabel: { fontSize: '11px', color: '#6b7280', margin: '4px 0 0 0' },
  // Categories
  catsWrapper: { padding: '0 16px 20px', overflowX: 'auto' },
  catsInner: { display: 'flex', gap: '8px', paddingBottom: '4px' },
  catBtn: (active, color) => ({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '12px 16px', borderRadius: '12px', border: active ? `2px solid ${color}` : '2px solid transparent', background: active ? `${color}15` : '#111', cursor: 'pointer', minWidth: '70px', transition: 'all 0.2s' }),
  catEmoji: { fontSize: '22px' },
  catName: (active, color) => ({ fontSize: '11px', fontWeight: '600', color: active ? color : '#9ca3af', whiteSpace: 'nowrap' }),
  // Section
  section: { padding: '0 16px 24px', maxWidth: '1200px', margin: '0 auto' },
  sectionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' },
  sectionTitle: { fontSize: '18px', fontWeight: '600', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' },
  sectionLink: { fontSize: '13px', color: '#4ade80', background: 'none', border: 'none', cursor: 'pointer' },
  // Cards Grid
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' },
  // Card
  card: (isHot, isInactive) => ({ background: isHot ? 'linear-gradient(135deg, #1a1a0a, #0a0a05)' : '#0a0a0a', borderRadius: '16px', overflow: 'hidden', border: isHot ? '2px solid #f97316' : '1px solid #222', opacity: isInactive ? 0.5 : 1, filter: isInactive ? 'grayscale(40%)' : 'none' }),
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', borderBottom: '1px solid #222' },
  cardBadge: (bg, color) => ({ padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', background: bg, color: color }),
  cardImage: { position: 'relative', height: '140px', background: '#111' },
  cardImg: { width: '100%', height: '100%', objectFit: 'cover' },
  cardDiscount: (isHot) => ({ position: 'absolute', top: '8px', right: '8px', background: isHot ? '#f97316' : '#22c55e', color: '#000', fontWeight: 'bold', fontSize: '14px', padding: '4px 10px', borderRadius: '8px' }),
  cardHotBadge: { position: 'absolute', top: '8px', left: '8px', background: 'linear-gradient(135deg, #f97316, #eab308)', color: '#000', fontWeight: 'bold', fontSize: '10px', padding: '4px 8px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '4px' },
  cardBody: { padding: '14px' },
  cardBrand: { color: '#4ade80', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', margin: '0 0 4px 0' },
  cardName: { color: 'white', fontSize: '14px', fontWeight: '600', margin: '0 0 10px 0', lineHeight: 1.3 },
  cardPriceRow: { display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' },
  cardPrice: { fontSize: '24px', fontWeight: 'bold', color: 'white' },
  cardOldPrice: { fontSize: '13px', color: '#6b7280', textDecoration: 'line-through' },
  cardMeta: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #222' },
  cardStock: (color) => ({ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: color }),
  cardDot: (color) => ({ width: '8px', height: '8px', borderRadius: '50%', background: color }),
  cardTime: { fontSize: '11px', color: '#6b7280' },
  cardCta: (disabled) => ({ width: '100%', marginTop: '12px', padding: '14px', borderRadius: '10px', border: 'none', fontWeight: 'bold', fontSize: '14px', cursor: disabled ? 'not-allowed' : 'pointer', background: disabled ? '#333' : 'linear-gradient(to right, #22c55e, #06b6d4)', color: disabled ? '#666' : '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }),
  // Footer
  footerSection: { padding: '32px 16px', maxWidth: '1200px', margin: '0 auto' },
  ctaGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '32px' },
  ctaCard: (color) => ({ background: `${color}10`, border: `1px solid ${color}30`, borderRadius: '16px', padding: '24px' }),
  ctaEmoji: { fontSize: '28px', marginBottom: '12px' },
  ctaTitle: { color: 'white', fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0' },
  ctaDesc: { color: '#9ca3af', fontSize: '13px', lineHeight: 1.5, margin: '0 0 16px 0' },
  ctaBtn: (color) => ({ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 16px', borderRadius: '8px', border: `1px solid ${color}`, color: color, fontWeight: '600', fontSize: '13px', textDecoration: 'none' }),
  footer: { borderTop: '1px solid #222', padding: '24px 16px', textAlign: 'center' },
  footerLogo: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' },
  footerText: { fontSize: '12px', color: '#6b7280', margin: '0 0 8px 0' },
  footerLinks: { display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '16px' },
  footerLink: { color: '#6b7280', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer' },
  disclaimer: { background: '#111', borderRadius: '8px', padding: '12px', marginBottom: '16px' },
  disclaimerText: { fontSize: '11px', color: '#6b7280', margin: 0, lineHeight: 1.6 },
  copyright: { fontSize: '12px', color: '#4b5563' },
  // Modal
  modal: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' },
  modalContent: { background: '#111', borderRadius: '16px', maxWidth: '500px', maxHeight: '80vh', overflow: 'auto', padding: '24px' },
  modalHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' },
  modalTitle: { fontSize: '20px', fontWeight: 'bold', margin: 0 },
  modalClose: { background: '#333', border: 'none', color: 'white', width: '32px', height: '32px', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' },
};

// ============================================
// COMPONENTES
// ============================================
const Header = ({ searchTerm, setSearchTerm, flashCount, totalCount }) => (
  <header style={styles.header}>
    <div style={styles.headerInner}>
      <div style={styles.headerTop}>
        <div style={styles.logo}>
          <div style={styles.logoIcon}>N</div>
          <span style={styles.logoText}>Ner<span style={{ color: '#4ade80' }}>Deals</span></span>
        </div>
        <div style={styles.headerBadges}>
          <span style={{ ...styles.badge, background: '#f9731620', color: '#f97316' }}>⚡ {flashCount}</span>
          <span style={{ ...styles.badge, color: '#4ade80' }}>🟢 {totalCount}</span>
          <a href="https://cafecito.app/nerdeals" target="_blank" rel="noopener noreferrer" style={{ ...styles.badge, background: '#6f4e3730', color: '#d4a574', textDecoration: 'none' }}>☕</a>
        </div>
      </div>
      <div style={styles.searchBox}>
        <span style={{ color: '#6b7280' }}>🔍</span>
        <input type="text" placeholder="Buscar ofertas..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} style={styles.searchInput} />
      </div>
    </div>
  </header>
);

const BannerPotenciadores = () => (
  <div style={styles.banner}>
    <div style={styles.bannerInner}>
      <span style={{ color: '#fbbf24', fontWeight: '600', fontSize: '13px' }}>💡 HOY:</span>
      {potenciadores.map(p => (
        <span key={p.id} style={styles.bannerItem}>
          <span style={{ color: p.color, fontWeight: '600' }}>{p.banco}</span>
          <span>{p.descuento} en {p.comercio}</span>
          <span style={{ color: '#6b7280' }}>({p.dia})</span>
        </span>
      ))}
    </div>
  </div>
);

const Hero = () => (
  <section style={styles.hero}>
    <h1 style={styles.heroTitle}>Ofertas tech <span style={{ color: '#4ade80' }}>sin humo</span></h1>
    <p style={styles.heroSub}>Precios reales. Sin humo. 🇦🇷</p>
  </section>
);

const Stats = ({ deals }) => {
  const active = deals.filter(d => d.status === 'active');
  const savings = active.reduce((a, d) => a + (d.avgPrice - d.currentPrice), 0);
  return (
    <div style={styles.stats}>
      <div style={styles.statItem}>
        <p style={styles.statValue}>{active.length}</p>
        <p style={styles.statLabel}>deals activos</p>
      </div>
      <div style={{ ...styles.statItem, borderRight: '1px solid #222' }}>
        <p style={styles.statValue}>${Math.round(savings / 1000000)}M</p>
        <p style={styles.statLabel}>ahorro potencial</p>
      </div>
      <div style={{ ...styles.statItem, borderRight: 'none' }}>
        <p style={styles.statValue}>15m</p>
        <p style={styles.statLabel}>última update</p>
      </div>
    </div>
  );
};

const Categories = ({ active, setActive }) => (
  <div style={styles.catsWrapper}>
    <div style={styles.catsInner}>
      {categories.map(c => (
        <button key={c.id} onClick={() => setActive(c.id)} style={styles.catBtn(active === c.id, c.color)}>
          <span style={styles.catEmoji}>{c.emoji}</span>
          <span style={styles.catName(active === c.id, c.color)}>{c.name}</span>
        </button>
      ))}
    </div>
  </div>
);

const DealCard = ({ deal }) => {
  const isInactive = deal.status !== 'active';
  const isHot = deal.discount >= 35;
  const store = storeLogos[deal.store] || { name: deal.store, short: deal.store.toUpperCase(), color: '#666', textColor: '#fff' };
  const stockColor = deal.status === 'soldout' ? '#ef4444' : deal.status === 'finished' ? '#6b7280' : deal.stock === 'low' ? '#fbbf24' : '#22c55e';
  const stockText = deal.status === 'soldout' ? 'Sold Out 💀' : deal.status === 'finished' ? 'Finalizado' : deal.stock === 'low' ? 'Pocas unidades' : 'Disponible';

  return (
    <div style={styles.card(isHot && !isInactive, isInactive)}>
      <div style={styles.cardHeader}>
        {deal.type === 'flash' ? <span style={styles.cardBadge('linear-gradient(135deg, #f97316, #ea580c)', '#fff')}>⚡ FLASH</span> : <span></span>}
        <span style={styles.cardBadge(store.color, store.textColor)}>{store.short}</span>
      </div>
      <div style={styles.cardImage}>
        <img src={deal.image} alt={deal.name} style={styles.cardImg} />
        {isHot && !isInactive && <span style={styles.cardHotBadge}>🔥 HOT</span>}
        <span style={styles.cardDiscount(isHot && !isInactive)}>-{deal.discount}%</span>
        {isInactive && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '16px', border: '2px solid #ef4444', padding: '8px 16px', borderRadius: '8px' }}>SOLD OUT 💀</span>
          </div>
        )}
      </div>
      <div style={styles.cardBody}>
        <p style={styles.cardBrand}>{deal.brand}</p>
        <h3 style={styles.cardName}>{deal.name}</h3>
        <div style={styles.cardPriceRow}>
          <span style={styles.cardPrice}>{formatPrice(deal.currentPrice)}</span>
          <span style={styles.cardOldPrice}>{formatPrice(deal.avgPrice)}</span>
        </div>
        <div style={styles.cardMeta}>
          <span style={styles.cardStock(stockColor)}><span style={styles.cardDot(stockColor)}></span>{stockText}</span>
          <span style={styles.cardTime}>{getTimeAgo(deal.publishedAt)}</span>
        </div>
        <a href={isInactive ? undefined : deal.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', pointerEvents: isInactive ? 'none' : 'auto' }}>
          <button style={styles.cardCta(isInactive)}>{isInactive ? 'No disponible' : `Ver en ${store.name} →`}</button>
        </a>
      </div>
    </div>
  );
};

const DealsSection = ({ title, emoji, deals, showAll, onToggle }) => {
  if (!deals.length) return null;
  const visible = showAll ? deals : deals.slice(0, 6);
  return (
    <section style={styles.section}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}><span>{emoji}</span> {title}</h2>
        {deals.length > 6 && <button style={styles.sectionLink} onClick={onToggle}>{showAll ? 'Ver menos' : `Ver todas (${deals.length})`}</button>}
      </div>
      <div style={styles.grid}>{visible.map(d => <DealCard key={d.id} deal={d} />)}</div>
    </section>
  );
};

const CtaSection = () => (
  <section style={styles.footerSection}>
    <div style={styles.ctaGrid}>
      <div style={styles.ctaCard('#22c55e')}>
        <div style={styles.ctaEmoji}>🏪</div>
        <h3 style={styles.ctaTitle}>¿Tenés un comercio?</h3>
        <p style={styles.ctaDesc}>Contactanos para publicar tus ofertas tech.</p>
        <a href="https://forms.gle/Jk2QGcXYH3UGujuY7" target="_blank" rel="noopener noreferrer" style={styles.ctaBtn('#22c55e')}>Contactar →</a>
      </div>
      <div style={styles.ctaCard('#3b82f6')}>
        <div style={styles.ctaEmoji}>🎯</div>
        <h3 style={styles.ctaTitle}>¿Encontraste un deal épico?</h3>
        <p style={styles.ctaDesc}>Compartilo y lo revisamos.</p>
        <a href="https://forms.gle/F9feFAC2i2f67BsN8" target="_blank" rel="noopener noreferrer" style={styles.ctaBtn('#3b82f6')}>Enviar →</a>
      </div>
      <div style={styles.ctaCard('#f59e0b')}>
        <div style={styles.ctaEmoji}>☕</div>
        <h3 style={styles.ctaTitle}>¿Te salvamos el bolsillo?</h3>
        <p style={styles.ctaDesc}>Invitanos un cafecito ❤️</p>
        <a href="https://cafecito.app/nerdeals" target="_blank" rel="noopener noreferrer" style={styles.ctaBtn('#f59e0b')}>Cafecito →</a>
      </div>
    </div>
  </section>
);

const LegalModal = ({ type, onClose }) => {
  const content = {
    terminos: { title: 'Términos y Condiciones', sections: [
      { t: '1. Sobre NerDeals', p: 'NerDeals es un servicio independiente de curaduría de ofertas tecnológicas en Argentina. No vendemos productos.' },
      { t: '2. Enlaces de afiliados', p: 'Participamos en programas de afiliados. Los clicks pueden generar comisiones sin costo adicional para el usuario.' },
      { t: '3. Precios', p: 'Los precios son referenciales y pueden cambiar. Verificá siempre en el sitio del vendedor.' },
      { t: '4. Responsabilidad', p: 'No somos responsables por transacciones con terceros.' },
    ]},
    privacidad: { title: 'Política de Privacidad', sections: [
      { t: '1. Datos', p: 'Recopilamos información anónima de navegación para mejorar el servicio.' },
      { t: '2. Cookies', p: 'Usamos cookies para análisis y seguimiento de afiliados.' },
      { t: '3. Terceros', p: 'Los enlaces llevan a sitios con sus propias políticas de privacidad.' },
    ]},
  };
  const { title, sections } = content[type];
  return (
    <div style={styles.modal} onClick={onClose}>
      <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <h2 style={styles.modalTitle}>{title}</h2>
          <button style={styles.modalClose} onClick={onClose}>✕</button>
        </div>
        {sections.map((s, i) => <div key={i} style={{ marginBottom: '16px' }}><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 6px 0' }}>{s.t}</h4><p style={{ color: '#9ca3af', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>{s.p}</p></div>)}
      </div>
    </div>
  );
};

const Footer = ({ onLegal }) => (
  <footer style={styles.footer}>
    <div style={styles.footerLogo}>
      <div style={{ ...styles.logoIcon, width: '28px', height: '28px', fontSize: '14px' }}>N</div>
      <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Ner<span style={{ color: '#4ade80' }}>Deals</span></span>
    </div>
    <p style={styles.footerText}>Hecho con ❤️ y muchas horas de scroll</p>
    <div style={styles.footerLinks}>
      <button style={styles.footerLink} onClick={() => onLegal('terminos')}>Términos</button>
      <button style={styles.footerLink} onClick={() => onLegal('privacidad')}>Privacidad</button>
      <a href="https://twitter.com/nerdeals" target="_blank" rel="noopener noreferrer" style={{ ...styles.footerLink, textDecoration: 'none' }}>Twitter</a>
    </div>
    <div style={styles.disclaimer}>
      <p style={styles.disclaimerText}>NerDeals es gratuito. No vendemos productos. Los enlaces pueden generar comisiones de afiliado sin costo adicional. Precios sujetos a cambio.</p>
    </div>
    <p style={styles.copyright}>© 2025 NerDeals</p>
  </footer>
);

// ============================================
// APP
// ============================================
export default function App() {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [modal, setModal] = useState(null);

  const filtered = useMemo(() => {
    let d = dealsData.filter(x => x.status === 'active');
    if (category !== 'all') d = d.filter(x => x.category === category);
    if (searchTerm) d = d.filter(x => x.name.toLowerCase().includes(searchTerm.toLowerCase()) || x.brand.toLowerCase().includes(searchTerm.toLowerCase()));
    return d;
  }, [category, searchTerm]);

  const flash = filtered.filter(d => d.type === 'flash');
  const normal = filtered.filter(d => d.type !== 'flash');
  const inactive = dealsData.filter(d => d.status !== 'active');
  const flashCount = dealsData.filter(d => d.status === 'active' && d.type === 'flash').length;
  const totalCount = dealsData.filter(d => d.status === 'active').length;

  return (
    <div style={styles.container}>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} flashCount={flashCount} totalCount={totalCount} />
      <BannerPotenciadores />
      <Hero />
      <Stats deals={dealsData} />
      <Categories active={category} setActive={setCategory} />
      
      {category === 'all' && flash.length > 0 && (
        <DealsSection title="Flash Deals" emoji="⚡" deals={flash} showAll={showAll} onToggle={() => setShowAll(!showAll)} />
      )}
      
      <DealsSection 
        title={category === 'all' ? 'Todas las ofertas' : categories.find(c => c.id === category)?.name} 
        emoji={category === 'all' ? '🔥' : categories.find(c => c.id === category)?.emoji} 
        deals={category === 'all' ? normal : filtered} 
        showAll={showAll} 
        onToggle={() => setShowAll(!showAll)} 
      />

      {inactive.length > 0 && (
        <DealsSection title="Finalizadas" emoji="⏰" deals={inactive} showAll={false} onToggle={() => {}} />
      )}

      <CtaSection />
      <Footer onLegal={setModal} />
      {modal && <LegalModal type={modal} onClose={() => setModal(null)} />}
    </div>
  );
}