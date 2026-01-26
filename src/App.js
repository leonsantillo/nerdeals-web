import React, { useState, useEffect } from 'react';

// ============================================
// CATEGORÍAS (TOP primero)
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
// STORES CONFIG
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
// DEAL CARD COMPONENT
// ============================================
const DealCard = ({ deal, isPreview = false }) => {
  const store = stores[deal.store] || { name: deal.store, short: deal.store, color: '#666', text: '#fff' };
  const score = getScore(deal.discount);
  const scoreInfo = getScoreLabel(deal.discount);
  const savings = deal.avgPrice - deal.currentPrice;

  if (isPreview) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        background: '#0a0a0a',
        borderRadius: '12px',
        border: '1px solid #222',
        overflow: 'hidden',
        opacity: 0.6,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ flex: 1, background: '#111', overflow: 'hidden' }}>
          <img src={deal.image} alt={deal.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
        </div>
        <div style={{ padding: '10px' }}>
          <p style={{ fontSize: '11px', color: '#6b7280', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{deal.brand}</p>
          <p style={{ fontSize: '13px', color: '#999', margin: '4px 0 0 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{deal.name}</p>
          <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#fff', margin: '6px 0 0 0' }}>{formatPrice(deal.currentPrice)}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      width: '100%',
      maxWidth: '400px',
      background: deal.discount >= 35 
        ? 'linear-gradient(180deg, #1a0f00 0%, #0a0500 100%)' 
        : 'linear-gradient(180deg, #0f0f0f 0%, #050505 100%)',
      borderRadius: '20px',
      border: deal.discount >= 35 ? '2px solid #f97316' : '1px solid #222',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Image Section */}
      <div style={{
        position: 'relative',
        height: '180px',
        overflow: 'hidden',
        background: '#111',
      }}>
        <img src={deal.image} alt={deal.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        
        {/* Gradient */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', background: 'linear-gradient(to top, #000, transparent)' }} />
        
        {/* Score Badge */}
        <div style={{
          position: 'absolute',
          top: '10px', left: '10px',
          background: 'rgba(0,0,0,0.85)',
          padding: '6px 10px',
          borderRadius: '8px',
          border: `1px solid ${scoreInfo.color}`,
        }}>
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: scoreInfo.color, lineHeight: 1 }}>
            {score}<span style={{ fontSize: '11px' }}>/10</span>
          </div>
          <div style={{ fontSize: '8px', fontWeight: '700', color: scoreInfo.color, letterSpacing: '0.5px' }}>
            {scoreInfo.label}
          </div>
        </div>

        {/* Discount Badge */}
        <div style={{
          position: 'absolute',
          top: '10px', right: '10px',
          background: deal.discount >= 35 ? '#f97316' : '#22c55e',
          color: '#000',
          padding: '6px 12px',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '16px',
        }}>-{deal.discount}%</div>

        {/* Store Badge */}
        <div style={{
          position: 'absolute',
          bottom: '10px', left: '10px',
          background: store.color,
          color: store.text,
          padding: '4px 10px',
          borderRadius: '6px',
          fontWeight: 'bold',
          fontSize: '10px',
        }}>{store.short}</div>

        {/* Stock Badge */}
        {deal.stock === 'low' && (
          <div style={{
            position: 'absolute',
            bottom: '10px', right: '10px',
            background: 'rgba(251,191,36,0.2)',
            color: '#fbbf24',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '10px',
            fontWeight: '600',
            border: '1px solid rgba(251,191,36,0.3)',
          }}>⚡ Pocas unidades</div>
        )}
      </div>

      {/* Info Section */}
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Brand & Name */}
        <div>
          <p style={{ color: '#4ade80', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', margin: 0 }}>{deal.brand}</p>
          <h3 style={{ color: 'white', fontSize: '17px', fontWeight: '700', margin: '4px 0 0 0', lineHeight: 1.3 }}>{deal.name}</h3>
        </div>

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
          <span style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>{formatPrice(deal.currentPrice)}</span>
          <span style={{ fontSize: '14px', color: '#6b7280', textDecoration: 'line-through' }}>{formatPrice(deal.avgPrice)}</span>
        </div>

        {/* Savings Box */}
        <div style={{
          background: 'rgba(34,197,94,0.1)',
          border: '1px solid rgba(34,197,94,0.2)',
          borderRadius: '10px',
          padding: '12px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', color: '#9ca3af' }}>💰 Ahorrás</span>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#22c55e' }}>{formatPrice(savings)}</span>
          </div>
          <div style={{ background: '#1a1a1a', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${Math.min(deal.discount * 2.5, 100)}%`,
              background: `linear-gradient(90deg, ${scoreInfo.color}, ${scoreInfo.color}aa)`,
              borderRadius: '4px',
            }} />
          </div>
          <p style={{ fontSize: '11px', color: '#6b7280', margin: '6px 0 0 0', textAlign: 'right' }}>
            {deal.discount}% menos que el promedio
          </p>
        </div>

        {/* CTA */}
        <a href={deal.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '16px',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(135deg, #22c55e, #06b6d4)',
            color: '#000',
            fontSize: '15px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}>
            Ver en {store.name} →
          </button>
        </a>
      </div>
    </div>
  );
};

// ============================================
// MAIN APP
// ============================================
export default function App() {
  const [activeCategory, setActiveCategory] = useState('top');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [legalModal, setLegalModal] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Get deals for current category
  const getDeals = () => {
    if (activeCategory === 'top') {
      return [...dealsData].sort((a, b) => b.discount - a.discount);
    }
    return dealsData.filter(d => d.category === activeCategory);
  };

  const deals = getDeals();
  const currentDeal = deals[currentIndex];
  const prevDeal = deals[currentIndex - 1];
  const nextDeal = deals[currentIndex + 1];
  const category = categories.find(c => c.id === activeCategory);

  // Navigation
  const goNext = () => currentIndex < deals.length - 1 && setCurrentIndex(currentIndex + 1);
  const goPrev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);

  // Category change
  const changeCategory = (catId) => {
    setActiveCategory(catId);
    setCurrentIndex(0);
  };

  // Swipe handlers
  const minSwipeDistance = 50;
  const onTouchStart = (e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) goNext();
    if (distance < -minSwipeDistance) goPrev();
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
    <div style={{
      minHeight: '100vh',
      background: '#000',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* HEADER */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        borderBottom: '1px solid #1a1a1a',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px', height: '36px',
            background: 'linear-gradient(135deg, #4ade80, #06b6d4)',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: '900', fontSize: '18px', color: '#000'
          }}>N</div>
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Ner<span style={{ color: '#4ade80' }}>Deals</span>
          </span>
        </div>
        <a href="https://cafecito.app/nerdeals" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: '#1a1a1a', padding: '8px 14px', borderRadius: '20px',
          color: '#d4a574', fontSize: '13px', fontWeight: '600', textDecoration: 'none',
        }}>☕ Apoyar</a>
      </header>

      {/* CATEGORIES */}
      <div style={{
        display: 'flex',
        gap: '6px',
        padding: '12px 16px',
        overflowX: 'auto',
        borderBottom: '1px solid #1a1a1a',
      }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => changeCategory(cat.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '8px 14px',
              borderRadius: '20px',
              border: activeCategory === cat.id ? `2px solid ${cat.color}` : '2px solid transparent',
              background: activeCategory === cat.id ? `${cat.color}15` : '#111',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
            }}
          >
            <span style={{ fontSize: '16px' }}>{cat.emoji}</span>
            <span style={{ fontSize: '13px', fontWeight: '600', color: activeCategory === cat.id ? cat.color : '#888' }}>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* CATEGORY TITLE + COUNTER */}
      <div style={{ textAlign: 'center', padding: '16px 16px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <span style={{ fontSize: '24px' }}>{category?.emoji}</span>
          <span style={{ fontSize: '20px', fontWeight: '700', color: category?.color }}>{category?.name}</span>
        </div>
        <p style={{ fontSize: '13px', color: '#666', margin: '6px 0 0 0' }}>
          Oferta {currentIndex + 1} de {deals.length}
        </p>
      </div>

      {/* MAIN CAROUSEL */}
      <div 
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          gap: '16px',
          overflow: 'hidden',
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Previous Preview - Desktop only */}
        <div style={{
          width: '140px',
          height: '280px',
          flexShrink: 0,
          display: 'none',
          '@media (min-width: 768px)': { display: 'block' },
        }} className="desktop-only">
          {prevDeal ? <DealCard deal={prevDeal} isPreview /> : <div style={{ width: '100%', height: '100%' }} />}
        </div>

        {/* Arrow Left */}
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          style={{
            width: '44px', height: '44px',
            borderRadius: '50%',
            border: 'none',
            background: currentIndex === 0 ? '#111' : '#222',
            color: currentIndex === 0 ? '#333' : '#fff',
            fontSize: '18px',
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >←</button>

        {/* Main Card */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', maxWidth: '400px' }}>
          {currentDeal && <DealCard deal={currentDeal} />}
        </div>

        {/* Arrow Right */}
        <button
          onClick={goNext}
          disabled={currentIndex === deals.length - 1}
          style={{
            width: '44px', height: '44px',
            borderRadius: '50%',
            border: 'none',
            background: currentIndex === deals.length - 1 ? '#111' : '#222',
            color: currentIndex === deals.length - 1 ? '#333' : '#fff',
            fontSize: '18px',
            cursor: currentIndex === deals.length - 1 ? 'not-allowed' : 'pointer',
            flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >→</button>

        {/* Next Preview - Desktop only */}
        <div style={{
          width: '140px',
          height: '280px',
          flexShrink: 0,
          display: 'none',
        }} className="desktop-only">
          {nextDeal ? <DealCard deal={nextDeal} isPreview /> : <div style={{ width: '100%', height: '100%' }} />}
        </div>
      </div>

      {/* DOTS */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: '8px 16px',
      }}>
        {deals.slice(0, 10).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              width: i === currentIndex ? '20px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === currentIndex ? category?.color : '#333',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          />
        ))}
        {deals.length > 10 && (
          <span style={{ fontSize: '11px', color: '#666', marginLeft: '4px' }}>+{deals.length - 10}</span>
        )}
      </div>

      {/* FOOTER */}
      <footer style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        padding: '16px',
        borderTop: '1px solid #1a1a1a',
      }}>
        <button onClick={() => setLegalModal('terminos')} style={{ background: 'none', border: 'none', color: '#666', fontSize: '12px', cursor: 'pointer' }}>Términos</button>
        <button onClick={() => setLegalModal('privacidad')} style={{ background: 'none', border: 'none', color: '#666', fontSize: '12px', cursor: 'pointer' }}>Privacidad</button>
        <a href="https://twitter.com/nerdeals" target="_blank" rel="noopener noreferrer" style={{ color: '#666', fontSize: '12px', textDecoration: 'none' }}>Twitter</a>
        <a href="https://cafecito.app/nerdeals" target="_blank" rel="noopener noreferrer" style={{ color: '#d4a574', fontSize: '12px', textDecoration: 'none' }}>☕ Cafecito</a>
      </footer>

      {/* LEGAL MODAL */}
      {legalModal && (
        <div onClick={() => setLegalModal(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: '#111', borderRadius: '16px', maxWidth: '500px', maxHeight: '80vh',
            overflow: 'auto', padding: '24px', border: '1px solid #222',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>
                {legalModal === 'terminos' ? 'Términos y Condiciones' : 'Política de Privacidad'}
              </h2>
              <button onClick={() => setLegalModal(null)} style={{
                background: '#222', border: 'none', color: '#fff', width: '32px', height: '32px',
                borderRadius: '8px', cursor: 'pointer', fontSize: '16px',
              }}>✕</button>
            </div>
            <p style={{ color: '#666', fontSize: '12px', marginBottom: '20px' }}>Última actualización: Enero 2025</p>
            
            {legalModal === 'terminos' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>1. Sobre NerDeals</h4>
                  <p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>NerDeals es un servicio de curaduría de ofertas tecnológicas en Argentina. No vendemos productos ni intermediamos ventas.</p>
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>2. Enlaces de afiliados</h4>
                  <p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>Participamos en programas de afiliados. Los clicks pueden generar comisiones sin costo adicional para vos.</p>
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>3. Precios</h4>
                  <p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>Los precios son referenciales y pueden cambiar. Verificá siempre en el sitio del vendedor.</p>
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>4. Responsabilidad</h4>
                  <p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>No somos responsables por transacciones con terceros, calidad de productos, envíos o reclamos.</p>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>1. Datos recopilados</h4>
                  <p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>Recopilamos información anónima de navegación para mejorar el servicio.</p>
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>2. Cookies</h4>
                  <p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>Usamos cookies para análisis y seguimiento de afiliados.</p>
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>3. Enlaces externos</h4>
                  <p style={{ color: '#999', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>Los enlaces llevan a sitios con sus propias políticas de privacidad.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CSS for desktop preview */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-only { display: block !important; }
        }
      `}</style>
    </div>
  );
}