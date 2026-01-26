import React, { useState, useEffect, useMemo, useCallback } from 'react';

// ============================================
// CATEGORÍAS
// ============================================
const categories = [
  { id: 'top', name: 'TOP', emoji: '🔥', color: '#f97316' },
  { id: 'gaming', name: 'Gaming', emoji: '🎮', color: '#8b5cf6' },
  { id: 'pc', name: 'PC', emoji: '💻', color: '#3b82f6' },
  { id: 'mobile', name: 'Mobile', emoji: '📱', color: '#10b981' },
  { id: 'apple', name: 'Apple', emoji: '🍎', color: '#f43f5e' },
  { id: 'office', name: 'Office', emoji: '🏠', color: '#6366f1' },
  { id: 'streaming', name: 'Stream', emoji: '📺', color: '#f97316' },
  { id: 'audio', name: 'Audio', emoji: '🎧', color: '#ec4899' },
  { id: 'subs', name: 'Subs', emoji: '🎫', color: '#a855f7' },
  { id: 'geek', name: 'Geek', emoji: '👾', color: '#eab308' },
];

// ============================================
// OFERTAS
// ============================================
const dealsData = [
  // GAMING
  { id: 1, name: "Mouse Inalámbrico Lightspeed", brand: "Logitech G502 X", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop", currentPrice: 89000, avgPrice: 145000, discount: 39, store: "mercadolibre", url: "#", stock: "low", category: "gaming" },
  { id: 2, name: "RTX 4060 8GB GDDR6", brand: "ASUS Dual", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=600&fit=crop", currentPrice: 485000, avgPrice: 629000, discount: 23, store: "mercadolibre", url: "#", stock: "available", category: "gaming" },
  { id: 3, name: "Teclado Mecánico RGB Hot-Swap", brand: "Redragon K530", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&h=600&fit=crop", currentPrice: 45900, avgPrice: 62000, discount: 26, store: "mercadolibre", url: "#", stock: "available", category: "gaming" },
  { id: 4, name: "Silla Gamer Ergonómica", brand: "Cougar Armor", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&h=600&fit=crop", currentPrice: 289000, avgPrice: 380000, discount: 24, store: "garbarino", url: "#", stock: "available", category: "gaming" },
  { id: 5, name: "Gamepad Inalámbrico", brand: "Xbox Series", image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=800&h=600&fit=crop", currentPrice: 65000, avgPrice: 95000, discount: 32, store: "mercadolibre", url: "#", stock: "low", category: "gaming" },

  // PC
  { id: 6, name: "Notebook 15.6\" Ryzen 5 16GB", brand: "Lenovo IdeaPad", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop", currentPrice: 650000, avgPrice: 850000, discount: 24, store: "mercadolibre", url: "#", stock: "low", category: "pc" },
  { id: 7, name: "SSD NVMe 1TB Gen4", brand: "Samsung 990 PRO", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=600&fit=crop", currentPrice: 142000, avgPrice: 189000, discount: 25, store: "garbarino", url: "#", stock: "available", category: "pc" },
  { id: 8, name: "RAM DDR5 32GB 5600MHz", brand: "Corsair Vengeance", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&h=600&fit=crop", currentPrice: 125000, avgPrice: 178000, discount: 30, store: "megatone", url: "#", stock: "available", category: "pc" },
  { id: 9, name: "Procesador Ryzen 7 5800X", brand: "AMD", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=600&fit=crop", currentPrice: 320000, avgPrice: 420000, discount: 24, store: "garbarino", url: "#", stock: "available", category: "pc" },
  { id: 10, name: "Monitor 27\" 144Hz IPS", brand: "LG UltraGear", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=600&fit=crop", currentPrice: 289000, avgPrice: 385000, discount: 25, store: "mercadolibre", url: "#", stock: "low", category: "pc" },

  // MOBILE
  { id: 11, name: "Galaxy S23 Ultra 256GB", brand: "Samsung", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&h=600&fit=crop", currentPrice: 1200000, avgPrice: 1550000, discount: 23, store: "mercadolibre", url: "#", stock: "low", category: "mobile" },
  { id: 12, name: "Cargador Inalámbrico 15W", brand: "Anker", image: "https://images.unsplash.com/photo-1622675272481-38a38c238cf1?w=800&h=600&fit=crop", currentPrice: 25000, avgPrice: 38000, discount: 34, store: "mercadolibre", url: "#", stock: "available", category: "mobile" },
  { id: 13, name: "Redmi Note 13 Pro 256GB", brand: "Xiaomi", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=600&fit=crop", currentPrice: 320000, avgPrice: 420000, discount: 24, store: "mercadolibre", url: "#", stock: "available", category: "mobile" },
  { id: 14, name: "Power Bank 20000mAh 65W", brand: "Baseus", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=600&fit=crop", currentPrice: 55000, avgPrice: 75000, discount: 27, store: "mercadolibre", url: "#", stock: "available", category: "mobile" },
  { id: 15, name: "Moto G54 5G 256GB", brand: "Motorola", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop", currentPrice: 280000, avgPrice: 350000, discount: 20, store: "garbarino", url: "#", stock: "available", category: "mobile" },

  // APPLE
  { id: 16, name: "AirPods Pro 2da Gen", brand: "Apple", image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&h=600&fit=crop", currentPrice: 320000, avgPrice: 420000, discount: 24, store: "mercadolibre", url: "#", stock: "low", category: "apple" },
  { id: 17, name: "iPad 10.9\" 64GB WiFi", brand: "Apple", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop", currentPrice: 580000, avgPrice: 750000, discount: 23, store: "garbarino", url: "#", stock: "low", category: "apple" },
  { id: 18, name: "Apple Watch Series 9", brand: "Apple", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&h=600&fit=crop", currentPrice: 650000, avgPrice: 820000, discount: 21, store: "mercadolibre", url: "#", stock: "available", category: "apple" },
  { id: 19, name: "Magic Keyboard Touch ID", brand: "Apple", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop", currentPrice: 189000, avgPrice: 250000, discount: 24, store: "garbarino", url: "#", stock: "available", category: "apple" },
  { id: 20, name: "Cable USB-C Lightning 2m", brand: "Apple Original", image: "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=800&h=600&fit=crop", currentPrice: 25000, avgPrice: 38000, discount: 34, store: "mercadolibre", url: "#", stock: "available", category: "apple" },

  // OFFICE
  { id: 21, name: "Webcam 4K Pro Streaming", brand: "Logitech Brio", image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=800&h=600&fit=crop", currentPrice: 185000, avgPrice: 280000, discount: 34, store: "garbarino", url: "#", stock: "available", category: "office" },
  { id: 22, name: "Escritorio Elevable", brand: "Flexispot", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=600&fit=crop", currentPrice: 420000, avgPrice: 580000, discount: 28, store: "mercadolibre", url: "#", stock: "available", category: "office" },
  { id: 23, name: "Luz LED para Monitor", brand: "BenQ ScreenBar", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop", currentPrice: 95000, avgPrice: 130000, discount: 27, store: "mercadolibre", url: "#", stock: "available", category: "office" },
  { id: 24, name: "Hub USB-C 7 en 1", brand: "Anker", image: "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=800&h=600&fit=crop", currentPrice: 45000, avgPrice: 65000, discount: 31, store: "mercadolibre", url: "#", stock: "low", category: "office" },
  { id: 25, name: "Silla Ergonómica Mesh", brand: "Ergocit", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=600&fit=crop", currentPrice: 290000, avgPrice: 400000, discount: 28, store: "mercadolibre", url: "#", stock: "available", category: "office" },

  // STREAMING
  { id: 26, name: "Fire TV Stick 4K Max", brand: "Amazon", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600&fit=crop", currentPrice: 42000, avgPrice: 65000, discount: 35, store: "mercadolibre", url: "#", stock: "low", category: "streaming" },
  { id: 27, name: "Smart TV 55\" 4K UHD", brand: "Samsung", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=600&fit=crop", currentPrice: 520000, avgPrice: 720000, discount: 28, store: "garbarino", url: "#", stock: "available", category: "streaming" },
  { id: 28, name: "Chromecast Google TV 4K", brand: "Google", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop", currentPrice: 48000, avgPrice: 68000, discount: 29, store: "mercadolibre", url: "#", stock: "available", category: "streaming" },
  { id: 29, name: "Soundbar 2.1 Bluetooth", brand: "JBL Bar", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=600&fit=crop", currentPrice: 180000, avgPrice: 250000, discount: 28, store: "megatone", url: "#", stock: "available", category: "streaming" },
  { id: 30, name: "Proyector Full HD", brand: "Epson", image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=800&h=600&fit=crop", currentPrice: 450000, avgPrice: 620000, discount: 27, store: "mercadolibre", url: "#", stock: "low", category: "streaming" },

  // AUDIO
  { id: 31, name: "Auriculares Noise Cancelling", brand: "Sony WH-1000XM5", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=600&fit=crop", currentPrice: 380000, avgPrice: 520000, discount: 27, store: "garbarino", url: "#", stock: "low", category: "audio" },
  { id: 32, name: "Parlante Bluetooth", brand: "JBL Flip 6", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=600&fit=crop", currentPrice: 95000, avgPrice: 130000, discount: 27, store: "mercadolibre", url: "#", stock: "available", category: "audio" },
  { id: 33, name: "Micrófono USB Streaming", brand: "Blue Yeti", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop", currentPrice: 185000, avgPrice: 250000, discount: 26, store: "mercadolibre", url: "#", stock: "available", category: "audio" },
  { id: 34, name: "Auriculares Gaming 7.1", brand: "HyperX Cloud III", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=600&fit=crop", currentPrice: 156000, avgPrice: 210000, discount: 26, store: "megatone", url: "#", stock: "available", category: "audio" },
  { id: 35, name: "Earbuds True Wireless", brand: "Galaxy Buds2 Pro", image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&h=600&fit=crop", currentPrice: 85000, avgPrice: 120000, discount: 29, store: "mercadolibre", url: "#", stock: "available", category: "audio" },

  // SUBS
  { id: 36, name: "PlayStation Plus 12 Meses", brand: "Sony", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&h=600&fit=crop", currentPrice: 45000, avgPrice: 65000, discount: 31, store: "mercadolibre", url: "#", stock: "available", category: "subs" },
  { id: 37, name: "Xbox Game Pass Ultimate 3M", brand: "Microsoft", image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800&h=600&fit=crop", currentPrice: 28000, avgPrice: 38000, discount: 26, store: "mercadolibre", url: "#", stock: "available", category: "subs" },
  { id: 38, name: "Spotify Premium 6 Meses", brand: "Spotify", image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=600&fit=crop", currentPrice: 12000, avgPrice: 18000, discount: 33, store: "mercadolibre", url: "#", stock: "available", category: "subs" },
  { id: 39, name: "Nintendo Switch Online 12M", brand: "Nintendo", image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&h=600&fit=crop", currentPrice: 18000, avgPrice: 25000, discount: 28, store: "mercadolibre", url: "#", stock: "available", category: "subs" },
  { id: 40, name: "YouTube Premium 12 Meses", brand: "Google", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop", currentPrice: 22000, avgPrice: 32000, discount: 31, store: "mercadolibre", url: "#", stock: "available", category: "subs" },

  // GEEK
  { id: 41, name: "Funko Pop! Mandalorian", brand: "Funko", image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=800&h=600&fit=crop", currentPrice: 18000, avgPrice: 28000, discount: 36, store: "mercadolibre", url: "#", stock: "low", category: "geek" },
  { id: 42, name: "Mousepad XXL RGB", brand: "Razer", image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=800&h=600&fit=crop", currentPrice: 45000, avgPrice: 62000, discount: 27, store: "mercadolibre", url: "#", stock: "available", category: "geek" },
  { id: 43, name: "Lámpara LED Pikachu", brand: "Pokemon", image: "https://images.unsplash.com/photo-1609372332255-611485350f25?w=800&h=600&fit=crop", currentPrice: 25000, avgPrice: 38000, discount: 34, store: "mercadolibre", url: "#", stock: "available", category: "geek" },
  { id: 44, name: "Remera Stranger Things", brand: "Netflix", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop", currentPrice: 15000, avgPrice: 22000, discount: 32, store: "mercadolibre", url: "#", stock: "low", category: "geek" },
  { id: 45, name: "Lego Star Wars Falcon", brand: "Lego", image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&h=600&fit=crop", currentPrice: 85000, avgPrice: 120000, discount: 29, store: "mercadolibre", url: "#", stock: "available", category: "geek" },
];

// ============================================
// STORES
// ============================================
const stores = {
  mercadolibre: { name: "Mercado Libre", short: "MELI", color: "#FFE600", text: "#000" },
  garbarino: { name: "Garbarino", short: "GARBA", color: "#E31837", text: "#FFF" },
  megatone: { name: "Megatone", short: "MEGA", color: "#0066CC", text: "#FFF" },
};

// ============================================
// UTILS
// ============================================
const formatPrice = (p) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(p);
const getScore = (discount) => Math.min((discount / 40 * 10), 10).toFixed(1);
const getScoreLabel = (discount) => {
  if (discount >= 35) return { label: 'ÉPICA', color: '#f97316' };
  if (discount >= 28) return { label: 'MUY BUENA', color: '#22c55e' };
  if (discount >= 20) return { label: 'BUENA', color: '#3b82f6' };
  return { label: 'OK', color: '#6b7280' };
};

// ============================================
// PREVIEW CARD (lateral)
// ============================================
const PreviewCard = ({ deal, onClick }) => {
  if (!deal) return <div style={{ width: '200px', flexShrink: 0 }} />;
  
  const store = stores[deal.store];
  const scoreInfo = getScoreLabel(deal.discount);
  
  return (
    <div 
      onClick={onClick}
      style={{
        width: '200px',
        flexShrink: 0,
        background: '#0a0a0a',
        borderRadius: '16px',
        border: '1px solid #222',
        overflow: 'hidden',
        cursor: 'pointer',
        opacity: 0.7,
        transition: 'all 0.3s',
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '1'}
      onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
    >
      <div style={{ position: 'relative', height: '120px', overflow: 'hidden' }}>
        <img src={deal.image} alt={deal.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: '8px', right: '8px', background: scoreInfo.color, color: '#000', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>
          -{deal.discount}%
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to top, #0a0a0a, transparent)' }} />
      </div>
      <div style={{ padding: '12px' }}>
        <p style={{ fontSize: '10px', color: '#4ade80', margin: 0, textTransform: 'uppercase', fontWeight: '600' }}>{deal.brand}</p>
        <p style={{ fontSize: '13px', color: '#fff', margin: '4px 0', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{deal.name}</p>
        <p style={{ fontSize: '16px', color: '#fff', margin: 0, fontWeight: 'bold' }}>{formatPrice(deal.currentPrice)}</p>
        <p style={{ fontSize: '11px', color: '#666', margin: '2px 0 0 0', textDecoration: 'line-through' }}>{formatPrice(deal.avgPrice)}</p>
      </div>
    </div>
  );
};

// ============================================
// MAIN CARD
// ============================================
const MainCard = ({ deal }) => {
  const store = stores[deal.store] || { name: deal.store, short: deal.store, color: '#666', text: '#fff' };
  const score = getScore(deal.discount);
  const scoreInfo = getScoreLabel(deal.discount);
  const savings = deal.avgPrice - deal.currentPrice;

  return (
    <div style={{
      width: '100%',
      maxWidth: '420px',
      background: deal.discount >= 35 ? 'linear-gradient(180deg, #1a0f00 0%, #0a0500 100%)' : 'linear-gradient(180deg, #0f0f0f 0%, #050505 100%)',
      borderRadius: '20px',
      border: deal.discount >= 35 ? '2px solid #f97316' : '1px solid #222',
      overflow: 'hidden',
    }}>
      {/* Image */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#111' }}>
        <img src={deal.image} alt={deal.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', background: 'linear-gradient(to top, #000, transparent)' }} />
        
        {/* Score */}
        <div style={{
          position: 'absolute', top: '12px', left: '12px',
          background: 'rgba(0,0,0,0.85)', padding: '8px 12px', borderRadius: '10px',
          border: `1px solid ${scoreInfo.color}`,
        }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: scoreInfo.color, lineHeight: 1 }}>
            {score}<span style={{ fontSize: '12px' }}>/10</span>
          </div>
          <div style={{ fontSize: '9px', fontWeight: '700', color: scoreInfo.color, letterSpacing: '0.5px' }}>{scoreInfo.label}</div>
        </div>

        {/* Discount */}
        <div style={{
          position: 'absolute', top: '12px', right: '12px',
          background: deal.discount >= 35 ? '#f97316' : '#22c55e',
          color: '#000', padding: '8px 14px', borderRadius: '10px',
          fontWeight: 'bold', fontSize: '18px',
        }}>-{deal.discount}%</div>

        {/* Store */}
        <div style={{
          position: 'absolute', bottom: '12px', left: '12px',
          background: store.color, color: store.text,
          padding: '6px 12px', borderRadius: '8px',
          fontWeight: 'bold', fontSize: '11px',
        }}>{store.short}</div>

        {/* Stock */}
        {deal.stock === 'low' && (
          <div style={{
            position: 'absolute', bottom: '12px', right: '12px',
            background: 'rgba(251,191,36,0.2)', color: '#fbbf24',
            padding: '6px 12px', borderRadius: '8px',
            fontSize: '11px', fontWeight: '600',
            border: '1px solid rgba(251,191,36,0.3)',
          }}>⚡ Pocas unidades</div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '20px' }}>
        <p style={{ color: '#4ade80', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', margin: 0 }}>{deal.brand}</p>
        <h3 style={{ color: 'white', fontSize: '20px', fontWeight: '700', margin: '6px 0 16px 0', lineHeight: 1.3 }}>{deal.name}</h3>

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px' }}>
          <span style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>{formatPrice(deal.currentPrice)}</span>
          <span style={{ fontSize: '16px', color: '#666', textDecoration: 'line-through' }}>{formatPrice(deal.avgPrice)}</span>
        </div>

        {/* Savings */}
        <div style={{
          background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
          borderRadius: '12px', padding: '14px', marginBottom: '16px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '13px', color: '#9ca3af' }}>💰 Ahorrás</span>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#22c55e' }}>{formatPrice(savings)}</span>
          </div>
          <div style={{ background: '#1a1a1a', borderRadius: '6px', height: '8px', overflow: 'hidden' }}>
            <div style={{
              height: '100%', width: `${Math.min(deal.discount * 2.5, 100)}%`,
              background: `linear-gradient(90deg, ${scoreInfo.color}, ${scoreInfo.color}aa)`,
              borderRadius: '6px',
            }} />
          </div>
          <p style={{ fontSize: '12px', color: '#666', margin: '8px 0 0 0', textAlign: 'right' }}>{deal.discount}% menos que el promedio</p>
        </div>

        {/* CTA */}
        <a href={deal.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%', padding: '18px', borderRadius: '14px', border: 'none',
            background: 'linear-gradient(135deg, #22c55e, #06b6d4)',
            color: '#000', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer',
          }}>Ver en {store.name} →</button>
        </a>
      </div>
    </div>
  );
};

// ============================================
// HOW IT WORKS MODAL
// ============================================
const HowItWorksModal = ({ onClose }) => (
  <div onClick={onClose} style={{
    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
  }}>
    <div onClick={e => e.stopPropagation()} style={{
      background: '#111', borderRadius: '20px', maxWidth: '450px', width: '100%',
      padding: '28px', border: '1px solid #222',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: 'white' }}>¿Cómo funciona?</h2>
        <button onClick={onClose} style={{
          background: '#222', border: 'none', color: '#fff', width: '36px', height: '36px',
          borderRadius: '10px', cursor: 'pointer', fontSize: '18px',
        }}>✕</button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ width: '44px', height: '44px', background: '#1a1a1a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>🔍</div>
          <div>
            <h4 style={{ color: 'white', fontSize: '15px', margin: '0 0 4px 0', fontWeight: '600' }}>Curamos ofertas</h4>
            <p style={{ color: '#888', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>Buscamos los mejores precios en tecnología de Argentina todos los días.</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ width: '44px', height: '44px', background: '#1a1a1a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>📊</div>
          <div>
            <h4 style={{ color: 'white', fontSize: '15px', margin: '0 0 4px 0', fontWeight: '600' }}>Verificamos el descuento</h4>
            <p style={{ color: '#888', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>Comparamos contra el precio promedio de los últimos 30 días. Sin humo.</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ width: '44px', height: '44px', background: '#1a1a1a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>🛒</div>
          <div>
            <h4 style={{ color: 'white', fontSize: '15px', margin: '0 0 4px 0', fontWeight: '600' }}>Vos decidís</h4>
            <p style={{ color: '#888', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>Si te convence, hacé click y comprá directo en la tienda oficial.</p>
          </div>
        </div>
      </div>
      
      <div style={{
        marginTop: '24px', padding: '16px', background: 'rgba(34,197,94,0.1)',
        borderRadius: '12px', border: '1px solid rgba(34,197,94,0.2)',
      }}>
        <p style={{ color: '#4ade80', fontSize: '13px', margin: 0, textAlign: 'center' }}>
          💡 Es 100% gratis y sin costo extra para vos
        </p>
      </div>
    </div>
  </div>
);

// ============================================
// LEGAL MODAL
// ============================================
const LegalModal = ({ type, onClose }) => (
  <div onClick={onClose} style={{
    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
  }}>
    <div onClick={e => e.stopPropagation()} style={{
      background: '#111', borderRadius: '16px', maxWidth: '500px', maxHeight: '80vh',
      overflow: 'auto', padding: '24px', border: '1px solid #222',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>
          {type === 'terminos' ? 'Términos y Condiciones' : 'Política de Privacidad'}
        </h2>
        <button onClick={onClose} style={{
          background: '#222', border: 'none', color: '#fff', width: '32px', height: '32px',
          borderRadius: '8px', cursor: 'pointer', fontSize: '16px',
        }}>✕</button>
      </div>
      <p style={{ color: '#666', fontSize: '12px', marginBottom: '20px' }}>Última actualización: Enero 2026</p>
      
      {type === 'terminos' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>1. Sobre NerDeals</h4><p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>NerDeals es un servicio independiente de curaduría y difusión de ofertas tecnológicas disponible en la República Argentina. NerDeals no es una tienda, no comercializa productos, no intermedia ventas ni presta servicios de pago, y no mantiene relación contractual directa con los vendedores de los productos publicados.</p></div>
          <div><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>2. Naturaleza del servicio</h4><p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>NerDeals identifica y comparte ofertas que considera relevantes para su audiencia, basándose en criterios propios de análisis de precio, reputación del vendedor y disponibilidad pública de la información. NerDeals participa en programas de afiliados de terceros, tales como Mercado Libre Partners y Amazon Associates, entre otros. Cuando el usuario hace clic en un enlace y realiza una compra en un sitio de terceros, NerDeals puede recibir una comisión, sin que ello implique un costo adicional para el usuario.</p></div>
          <div><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>3. Información de precios y disponibilidad</h4><p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>Los precios, descuentos y disponibilidad mostrados en NerDeals son referenciales y pueden modificarse en cualquier momento por los vendedores sin previo aviso. NerDeals no garantiza la vigencia de los precios publicados ni la disponibilidad de stock. El usuario debe verificar siempre el precio final, condiciones de venta y características del producto directamente en el sitio del vendedor antes de realizar una compra.</p></div>
          <div><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>4. Comparaciones e historial de precios</h4><p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>Las comparaciones de precios (por ejemplo, "precio promedio de 30 días") se basan en estimaciones realizadas a partir de información pública disponible al momento del análisis. Dichas comparaciones no constituyen una garantía de precio, no representan un historial exhaustivo, y pueden no reflejar la totalidad de las variaciones del mercado. NerDeals no garantiza la exactitud absoluta de estos datos, los cuales se ofrecen únicamente con fines informativos.</p></div>
          <div><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>5. Responsabilidad</h4><p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>NerDeals no es responsable por: las transacciones realizadas en sitios de terceros, la calidad, funcionamiento o autenticidad de los productos, envíos, garantías, devoluciones, cancelaciones o reclamos. Cualquier inconveniente relacionado con la compra debe ser gestionado exclusivamente entre el usuario y el vendedor o plataforma correspondiente.</p></div>
          <div><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>6. Limitación de responsabilidad</h4><p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>El uso del sitio NerDeals implica la aceptación expresa de que el servicio se brinda "tal como está", sin garantías explícitas ni implícitas. En ningún caso NerDeals será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso del sitio o de la información publicada.</p></div>
          <div><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>7. Aceptación</h4><p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>El acceso y uso de NerDeals implica la aceptación plena de los presentes Términos y Condiciones.</p></div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>1. Información que recopilamos</h4><p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>NerDeals recopila información mínima y no identificable con el objetivo de mejorar la experiencia del usuario y el funcionamiento del sitio. Esta información puede incluir: datos de navegación anónimos, tipo de dispositivo, navegador y sistema operativo, interacciones con enlaces y contenidos del sitio. NerDeals no recopila datos personales sensibles ni información que permita identificar directamente a los usuarios.</p></div>
          <div><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>2. Uso de cookies</h4><p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>NerDeals utiliza cookies propias y de terceros con fines funcionales, analíticos y de seguimiento de conversiones de afiliados. Las cookies pueden utilizarse para: analizar el uso del sitio, medir el rendimiento de las ofertas publicadas, atribuir compras a programas de afiliados. El usuario puede configurar su navegador para rechazar o eliminar cookies, aunque esto puede afectar el correcto funcionamiento del sitio.</p></div>
          <div><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>3. Enlaces a sitios de terceros</h4><p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>NerDeals contiene enlaces a sitios web de terceros. Al hacer clic en una oferta, el usuario es redirigido a plataformas externas que cuentan con sus propias políticas de privacidad y términos, sobre los cuales NerDeals no tiene control ni responsabilidad.</p></div>
          <div><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>4. Programas de afiliados</h4><p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>NerDeals participa en programas de afiliados de terceros. Estos programas pueden utilizar cookies u otras tecnologías de seguimiento para registrar las compras originadas desde nuestro sitio, sin generar ningún costo adicional para el usuario.</p></div>
          <div><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>5. Compartir información</h4><p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>NerDeals no vende, alquila ni comparte información personal identificable de los usuarios con terceros. La información recopilada es utilizada únicamente con fines estadísticos, analíticos y operativos.</p></div>
          <div><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>6. Seguridad</h4><p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>NerDeals adopta medidas razonables para proteger la información recopilada. Sin embargo, el usuario reconoce que ningún sistema de transmisión o almacenamiento de datos es completamente seguro, y NerDeals no puede garantizar una seguridad absoluta.</p></div>
          <div><h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>7. Aceptación</h4><p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>El uso del sitio NerDeals implica la aceptación de la presente Política de Privacidad.</p></div>
        </div>
      )}
    </div>
  </div>
);

// ============================================
// MAIN APP
// ============================================
export default function App() {
  const [activeCategory, setActiveCategory] = useState('top');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [legalModal, setLegalModal] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [countdown, setCountdown] = useState({ hours: 2, minutes: 45, seconds: 30 });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Get filtered deals
  const deals = useMemo(() => {
    let filtered = activeCategory === 'top' 
      ? [...dealsData].sort((a, b) => b.discount - a.discount)
      : dealsData.filter(d => d.category === activeCategory);
    
    if (searchTerm) {
      filtered = filtered.filter(d => 
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [activeCategory, searchTerm]);

  const currentDeal = deals[currentIndex];
  const prevDeal = deals[currentIndex - 1];
  const nextDeal = deals[currentIndex + 1];
  const category = categories.find(c => c.id === activeCategory);

  // Navigation
  const goNext = () => currentIndex < deals.length - 1 && setCurrentIndex(currentIndex + 1);
  const goPrev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
  const changeCategory = (catId) => { setActiveCategory(catId); setCurrentIndex(0); setSearchTerm(''); };

  // Swipe
  const onTouchStart = (e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goNext();
    if (distance < -50) goPrev();
  };

  // Keyboard
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: 'white', fontFamily: 'system-ui, -apple-system, sans-serif', display: 'flex', flexDirection: 'column' }}>
      
      {/* HEADER */}
      <header style={{ borderBottom: '1px solid #1a1a1a', padding: '12px 20px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', background: 'linear-gradient(135deg, #4ade80, #06b6d4)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '20px', color: '#000' }}>N</div>
            <span style={{ fontSize: '22px', fontWeight: 'bold' }}>Ner<span style={{ color: '#4ade80' }}>Deals</span></span>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button onClick={() => setShowHowItWorks(true)} style={{ background: '#111', border: '1px solid #222', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>❓</span><span className="hide-mobile">¿Cómo funciona?</span>
            </button>
            <a href="https://forms.gle/Jk2QGcXYH3UGujuY7" target="_blank" rel="noopener noreferrer" style={{ background: '#111', border: '1px solid #222', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>🏪</span><span className="hide-mobile">Comercios</span>
            </a>
            <a href="https://forms.gle/F9feFAC2i2f67BsN8" target="_blank" rel="noopener noreferrer" style={{ background: '#111', border: '1px solid #222', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>💬</span><span className="hide-mobile">Feedback</span>
            </a>
            <a href="https://cafecito.app/nerdeals" target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(135deg, #6f4e37, #8B4513)', borderRadius: '10px', padding: '10px 16px', color: '#fff', fontSize: '13px', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>☕</span><span className="hide-mobile">Apoyar</span>
            </a>
          </div>
        </div>
      </header>

      {/* CATEGORIES + SEARCH */}
      <div style={{ borderBottom: '1px solid #1a1a1a', padding: '12px 20px', overflowX: 'auto' }}>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', minWidth: 'max-content' }}>
          {/* Search */}
          <div style={{ display: 'flex', alignItems: 'center', background: '#111', borderRadius: '25px', padding: '8px 16px', gap: '8px', border: '1px solid #222', marginRight: '8px' }}>
            <span style={{ color: '#666', fontSize: '14px' }}>🔍</span>
            <input 
              type="text" 
              placeholder="Buscar..." 
              value={searchTerm}
              onChange={e => { setSearchTerm(e.target.value); setCurrentIndex(0); }}
              style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', fontSize: '13px', width: '120px' }}
            />
          </div>
          
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => changeCategory(cat.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '10px 18px', borderRadius: '25px',
                border: activeCategory === cat.id ? `2px solid ${cat.color}` : '2px solid transparent',
                background: activeCategory === cat.id ? `${cat.color}15` : '#111',
                cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s',
              }}
            >
              <span style={{ fontSize: '16px' }}>{cat.emoji}</span>
              <span style={{ fontSize: '14px', fontWeight: '600', color: activeCategory === cat.id ? cat.color : '#888' }}>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CATEGORY TITLE + URGENCY */}
      <div style={{ textAlign: 'center', padding: '20px 16px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <span style={{ fontSize: '28px' }}>{category?.emoji}</span>
          <span style={{ fontSize: '24px', fontWeight: '700', color: category?.color }}>{category?.name}</span>
        </div>
        <p style={{ fontSize: '14px', color: '#666', margin: '8px 0 0 0' }}>
          {searchTerm ? `${deals.length} resultados para "${searchTerm}"` : `Oferta ${currentIndex + 1} de ${deals.length}`}
        </p>
      </div>

      {/* URGENCY BANNER */}
      {currentDeal && (
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '24px',
          padding: '12px 20px',
          flexWrap: 'wrap',
        }}>
          {/* Countdown */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(239,68,68,0.1)',
            border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: '12px',
            padding: '10px 16px',
          }}>
            <span style={{ fontSize: '18px' }}>⏰</span>
            <span style={{ color: '#ef4444', fontSize: '14px', fontWeight: '600' }}>Termina en</span>
            <span style={{ 
              color: '#ef4444', 
              fontSize: '18px', 
              fontWeight: 'bold',
              fontFamily: 'monospace',
            }}>
              {String(countdown.hours).padStart(2, '0')}:{String(countdown.minutes).padStart(2, '0')}:{String(countdown.seconds).padStart(2, '0')}
            </span>
          </div>

          {/* Dynamic Message */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: currentDeal.stock === 'low' 
              ? 'rgba(251,191,36,0.1)' 
              : currentDeal.discount >= 35 
                ? 'rgba(249,115,22,0.1)' 
                : 'rgba(34,197,94,0.1)',
            border: `1px solid ${currentDeal.stock === 'low' 
              ? 'rgba(251,191,36,0.3)' 
              : currentDeal.discount >= 35 
                ? 'rgba(249,115,22,0.3)' 
                : 'rgba(34,197,94,0.3)'}`,
            borderRadius: '12px',
            padding: '10px 16px',
          }}>
            <span style={{ fontSize: '18px' }}>
              {currentDeal.stock === 'low' ? '⚡' : currentDeal.discount >= 35 ? '🔥' : '💎'}
            </span>
            <span style={{ 
              color: currentDeal.stock === 'low' 
                ? '#fbbf24' 
                : currentDeal.discount >= 35 
                  ? '#f97316' 
                  : '#22c55e', 
              fontSize: '14px', 
              fontWeight: '600' 
            }}>
              {currentDeal.stock === 'low' 
                ? '¡Últimas unidades disponibles!' 
                : currentDeal.discount >= 35 
                  ? '¡Precio histórico más bajo!' 
                  : 'Solo hoy a este precio'}
            </span>
          </div>
        </div>
      )}

      {/* CAROUSEL */}
      <div 
        style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 20px', gap: '20px' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Prev Card - Desktop */}
        <div className="desktop-only" style={{ display: 'none' }}>
          <PreviewCard deal={prevDeal} onClick={goPrev} />
        </div>

        {/* Arrow Left */}
        <button onClick={goPrev} disabled={currentIndex === 0} style={{
          width: '50px', height: '50px', borderRadius: '50%', border: 'none',
          background: currentIndex === 0 ? '#111' : '#222',
          color: currentIndex === 0 ? '#333' : '#fff',
          fontSize: '20px', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
          flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>←</button>

        {/* Main Card */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {currentDeal ? <MainCard deal={currentDeal} /> : (
            <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
              <p style={{ fontSize: '48px', margin: '0 0 16px 0' }}>🔍</p>
              <p style={{ fontSize: '16px', margin: 0 }}>No hay ofertas para mostrar</p>
            </div>
          )}
        </div>

        {/* Arrow Right */}
        <button onClick={goNext} disabled={currentIndex === deals.length - 1} style={{
          width: '50px', height: '50px', borderRadius: '50%', border: 'none',
          background: currentIndex === deals.length - 1 ? '#111' : '#222',
          color: currentIndex === deals.length - 1 ? '#333' : '#fff',
          fontSize: '20px', cursor: currentIndex === deals.length - 1 ? 'not-allowed' : 'pointer',
          flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>→</button>

        {/* Next Card - Desktop */}
        <div className="desktop-only" style={{ display: 'none' }}>
          <PreviewCard deal={nextDeal} onClick={goNext} />
        </div>
      </div>

      {/* DOTS */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '12px 16px' }}>
        {deals.slice(0, 10).map((_, i) => (
          <button key={i} onClick={() => setCurrentIndex(i)} style={{
            width: i === currentIndex ? '24px' : '8px', height: '8px', borderRadius: '4px',
            background: i === currentIndex ? category?.color : '#333',
            border: 'none', cursor: 'pointer', transition: 'all 0.2s',
          }} />
        ))}
        {deals.length > 10 && <span style={{ fontSize: '11px', color: '#666', marginLeft: '6px' }}>+{deals.length - 10} más</span>}
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #1a1a1a', padding: '16px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <button onClick={() => setLegalModal('terminos')} style={{ background: 'none', border: 'none', color: '#666', fontSize: '13px', cursor: 'pointer' }}>Términos</button>
          <button onClick={() => setLegalModal('privacidad')} style={{ background: 'none', border: 'none', color: '#666', fontSize: '13px', cursor: 'pointer' }}>Privacidad</button>
          <a href="https://twitter.com/nerdeals" target="_blank" rel="noopener noreferrer" style={{ color: '#666', fontSize: '13px', textDecoration: 'none' }}>Twitter</a>
          <a href="https://cafecito.app/nerdeals" target="_blank" rel="noopener noreferrer" style={{ color: '#d4a574', fontSize: '13px', textDecoration: 'none' }}>☕ Cafecito</a>
        </div>
        <p style={{ textAlign: 'center', color: '#444', fontSize: '11px', margin: '12px 0 0 0' }}>
          NerDeals © 2026 · Precios referenciales · Los enlaces pueden generar comisiones sin costo extra
        </p>
      </footer>

      {/* MODALS */}
      {showHowItWorks && <HowItWorksModal onClose={() => setShowHowItWorks(false)} />}
      {legalModal && <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />}

      {/* CSS */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-only { display: block !important; }
        }
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}