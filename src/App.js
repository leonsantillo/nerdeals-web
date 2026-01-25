import React, { useState, useEffect } from 'react';

// ============================================
// CATEGORÍAS
// ============================================
const categories = [
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
// OFERTAS POR CATEGORÍA
// ============================================
const dealsData = [
  // GAMING
  { id: 1, name: "Mouse Inalámbrico Lightspeed", brand: "Logitech G502 X", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop", currentPrice: 89000, avgPrice: 145000, discount: 39, store: "mercadolibre", url: "#", stock: "low", category: "gaming" },
  { id: 2, name: "NVIDIA RTX 4060 8GB GDDR6", brand: "ASUS Dual", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=600&fit=crop", currentPrice: 485000, avgPrice: 629000, discount: 23, store: "mercadolibre", url: "#", stock: "low", category: "gaming" },
  { id: 3, name: "Teclado Mecánico RGB Hot-Swap", brand: "Redragon K530", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&h=600&fit=crop", currentPrice: 45900, avgPrice: 62000, discount: 26, store: "mercadolibre", url: "#", stock: "available", category: "gaming" },
  { id: 4, name: "Silla Gamer Ergonómica", brand: "Cougar Armor", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&h=600&fit=crop", currentPrice: 289000, avgPrice: 380000, discount: 24, store: "garbarino", url: "#", stock: "available", category: "gaming" },
  { id: 5, name: "Gamepad Inalámbrico", brand: "Xbox Series X", image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=800&h=600&fit=crop", currentPrice: 65000, avgPrice: 95000, discount: 32, store: "mercadolibre", url: "#", stock: "low", category: "gaming" },

  // PC
  { id: 6, name: "Notebook 15.6\" Ryzen 5 16GB", brand: "Lenovo IdeaPad", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop", currentPrice: 650000, avgPrice: 850000, discount: 24, store: "mercadolibre", url: "#", stock: "low", category: "pc" },
  { id: 7, name: "SSD NVMe 1TB Gen4", brand: "Samsung 990 PRO", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=600&fit=crop", currentPrice: 142000, avgPrice: 189000, discount: 25, store: "garbarino", url: "#", stock: "available", category: "pc" },
  { id: 8, name: "Memoria RAM DDR5 32GB", brand: "Corsair Vengeance", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&h=600&fit=crop", currentPrice: 125000, avgPrice: 178000, discount: 30, store: "megatone", url: "#", stock: "available", category: "pc" },
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
  { id: 25, name: "Silla Ergonómica Pro", brand: "Herman Miller", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=600&fit=crop", currentPrice: 890000, avgPrice: 1200000, discount: 26, store: "mercadolibre", url: "#", stock: "available", category: "office" },

  // STREAMING
  { id: 26, name: "Fire TV Stick 4K Max", brand: "Amazon", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600&fit=crop", currentPrice: 42000, avgPrice: 65000, discount: 35, store: "mercadolibre", url: "#", stock: "low", category: "streaming" },
  { id: 27, name: "Smart TV 55\" 4K UHD", brand: "Samsung", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600&fit=crop", currentPrice: 520000, avgPrice: 720000, discount: 28, store: "garbarino", url: "#", stock: "available", category: "streaming" },
  { id: 28, name: "Chromecast Google TV 4K", brand: "Google", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop", currentPrice: 48000, avgPrice: 68000, discount: 29, store: "mercadolibre", url: "#", stock: "available", category: "streaming" },
  { id: 29, name: "Soundbar 2.1 Bluetooth", brand: "JBL Bar", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=600&fit=crop", currentPrice: 180000, avgPrice: 250000, discount: 28, store: "megatone", url: "#", stock: "available", category: "streaming" },
  { id: 30, name: "Proyector Full HD 1080p", brand: "Epson", image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=800&h=600&fit=crop", currentPrice: 450000, avgPrice: 620000, discount: 27, store: "mercadolibre", url: "#", stock: "low", category: "streaming" },

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
// POTENCIADORES
// ============================================
const potenciadores = {
  garbarino: { banco: "Galicia", descuento: "30% extra", dia: "Jueves", color: "#FF6B00" },
  megatone: { banco: "Macro", descuento: "25% extra", dia: "Miércoles", color: "#003087" },
};

// ============================================
// CONFIG
// ============================================
const stores = {
  mercadolibre: { name: "Mercado Libre", color: "#FFE600", text: "#000" },
  garbarino: { name: "Garbarino", color: "#E31837", text: "#FFF" },
  megatone: { name: "Megatone", color: "#0066CC", text: "#FFF" },
};

const formatPrice = (p) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(p);

// ============================================
// MAIN APP
// ============================================
export default function App() {
  const [activeCategory, setActiveCategory] = useState('gaming');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [legalModal, setLegalModal] = useState(null);

  // Get deals for current category
  const categoryDeals = dealsData.filter(d => d.category === activeCategory);
  const currentDeal = categoryDeals[currentIndex];
  const totalDeals = categoryDeals.length;

  // Get category info
  const category = categories.find(c => c.id === activeCategory);

  // Handle category change
  const changeCategory = (catId) => {
    setActiveCategory(catId);
    setCurrentIndex(0);
  };

  // Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < totalDeals - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Keyboard navigation (for desktop)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentIndex < totalDeals - 1) {
        setCurrentIndex(currentIndex + 1);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalDeals]);

  // Check if deal has potenciador
  const potenciador = potenciadores[currentDeal?.store];
  const store = stores[currentDeal?.store] || { name: currentDeal?.store, color: '#666', text: '#fff' };
  const isHot = currentDeal?.discount >= 30;

  // Navigation functions
  const goNext = () => {
    if (currentIndex < totalDeals - 1) setCurrentIndex(currentIndex + 1);
  };
  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div style={{
      minHeight: '100vh',
      maxHeight: '100vh',
      background: '#000',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
    }}>

      {/* HEADER */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        borderBottom: '1px solid #222',
        background: '#000',
        zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '32px', height: '32px',
            background: 'linear-gradient(135deg, #4ade80, #06b6d4)',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: '900', fontSize: '16px', color: '#000'
          }}>N</div>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Ner<span style={{ color: '#4ade80' }}>Deals</span>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            background: '#111', padding: '6px 10px', borderRadius: '20px',
            fontSize: '12px', color: '#4ade80'
          }}>
            🟢 {dealsData.length}
          </span>
          <button 
            onClick={() => setShowMenu(!showMenu)}
            style={{
              background: '#111', border: 'none', padding: '8px 12px',
              borderRadius: '20px', color: '#fff', cursor: 'pointer', fontSize: '14px'
            }}
          >☰</button>
        </div>
      </header>

      {/* MENU OVERLAY */}
      {showMenu && (
        <div style={{
          position: 'absolute', top: '60px', right: '16px',
          background: '#111', borderRadius: '12px', padding: '8px',
          zIndex: 100, border: '1px solid #333',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          <a href="https://cafecito.app/nerdeals" target="_blank" rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'none', padding: '10px 16px', borderRadius: '8px', fontSize: '14px' }}>
            ☕ Cafecito
          </a>
          <a href="https://twitter.com/nerdeals" target="_blank" rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'none', padding: '10px 16px', borderRadius: '8px', fontSize: '14px' }}>
            🐦 Twitter
          </a>
          <a href="https://forms.gle/F9feFAC2i2f67BsN8" target="_blank" rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'none', padding: '10px 16px', borderRadius: '8px', fontSize: '14px' }}>
            💡 Sugerir deal
          </a>
        </div>
      )}

      {/* CATEGORY LABEL */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '12px', gap: '8px',
      }}>
        <span style={{ fontSize: '24px' }}>{category?.emoji}</span>
        <span style={{ 
          fontSize: '18px', fontWeight: '600', 
          color: category?.color,
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>{category?.name}</span>
      </div>

      {/* MAIN CARD - SWIPEABLE */}
      <div 
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          overflow: 'hidden',
          gap: '8px',
        }}
      >
        {/* LEFT ARROW */}
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: 'none',
            background: currentIndex === 0 ? '#1a1a1a' : '#222',
            color: currentIndex === 0 ? '#444' : '#fff',
            fontSize: '20px',
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.2s',
          }}
        >←</button>

        {/* CARD */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '100%',
            overflow: 'hidden',
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
        {currentDeal && (
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            background: isHot 
              ? 'linear-gradient(180deg, #1a1000 0%, #0a0500 100%)' 
              : 'linear-gradient(180deg, #111 0%, #050505 100%)',
            borderRadius: '20px',
            border: isHot ? '2px solid #f97316' : '1px solid #222',
            overflow: 'hidden',
            position: 'relative',
          }}>

            {/* IMAGE */}
            <div style={{
              flex: 1,
              minHeight: '200px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <img 
                src={currentDeal.image} 
                alt={currentDeal.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '50%',
                background: 'linear-gradient(to top, #000, transparent)',
              }} />

              {/* HOT Badge */}
              {isHot && (
                <div style={{
                  position: 'absolute',
                  top: '12px', left: '12px',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  color: '#fff',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  display: 'flex', alignItems: 'center', gap: '4px',
                }}>🔥 HOT DEAL</div>
              )}

              {/* Discount Badge */}
              <div style={{
                position: 'absolute',
                top: '12px', right: '12px',
                background: isHot ? '#f97316' : '#22c55e',
                color: '#000',
                padding: '8px 14px',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '18px',
              }}>-{currentDeal.discount}%</div>

              {/* Store Badge */}
              <div style={{
                position: 'absolute',
                bottom: '12px', left: '12px',
                background: store.color,
                color: store.text,
                padding: '6px 12px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '11px',
                textTransform: 'uppercase',
              }}>{store.name}</div>

              {/* Potenciador Badge */}
              {potenciador && (
                <div style={{
                  position: 'absolute',
                  bottom: '12px', right: '12px',
                  background: `${potenciador.color}`,
                  color: '#fff',
                  padding: '6px 10px',
                  borderRadius: '8px',
                  fontSize: '10px',
                  fontWeight: 'bold',
                }}>
                  +{potenciador.descuento} {potenciador.banco}
                </div>
              )}
            </div>

            {/* INFO */}
            <div style={{ padding: '20px' }}>
              {/* Brand */}
              <p style={{
                color: '#4ade80',
                fontSize: '12px',
                fontWeight: '600',
                textTransform: 'uppercase',
                margin: '0 0 4px 0',
                letterSpacing: '0.5px',
              }}>{currentDeal.brand}</p>

              {/* Name */}
              <h2 style={{
                color: 'white',
                fontSize: '20px',
                fontWeight: '700',
                margin: '0 0 16px 0',
                lineHeight: 1.3,
              }}>{currentDeal.name}</h2>

              {/* Price */}
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '12px',
                marginBottom: '12px',
              }}>
                <span style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: 'white',
                }}>{formatPrice(currentDeal.currentPrice)}</span>
                <span style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  textDecoration: 'line-through',
                }}>{formatPrice(currentDeal.avgPrice)}</span>
              </div>

              {/* Stock */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '16px',
              }}>
                <span style={{
                  width: '8px', height: '8px',
                  borderRadius: '50%',
                  background: currentDeal.stock === 'low' ? '#fbbf24' : '#22c55e',
                }} />
                <span style={{
                  fontSize: '13px',
                  color: currentDeal.stock === 'low' ? '#fbbf24' : '#22c55e',
                }}>
                  {currentDeal.stock === 'low' ? 'Pocas unidades' : 'Disponible'}
                </span>
              </div>

              {/* CTA */}
              <a 
                href={currentDeal.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button style={{
                  width: '100%',
                  padding: '18px',
                  borderRadius: '14px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #22c55e, #06b6d4)',
                  color: '#000',
                  fontSize: '16px',
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
        )}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={goNext}
          disabled={currentIndex === totalDeals - 1}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: 'none',
            background: currentIndex === totalDeals - 1 ? '#1a1a1a' : '#222',
            color: currentIndex === totalDeals - 1 ? '#444' : '#fff',
            fontSize: '20px',
            cursor: currentIndex === totalDeals - 1 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.2s',
          }}
        >→</button>
      </div>

      {/* DOTS INDICATOR */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: '12px 12px 8px',
      }}>
        {categoryDeals.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              width: i === currentIndex ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === currentIndex ? category?.color : '#333',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          />
        ))}
      </div>

      {/* CATEGORY TABS */}
      <div style={{
        display: 'flex',
        gap: '4px',
        padding: '12px',
        overflowX: 'auto',
        borderTop: '1px solid #222',
        background: '#000',
      }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => changeCategory(cat.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              padding: '10px 14px',
              borderRadius: '12px',
              border: activeCategory === cat.id ? `2px solid ${cat.color}` : '2px solid transparent',
              background: activeCategory === cat.id ? `${cat.color}15` : 'transparent',
              cursor: 'pointer',
              minWidth: '60px',
              transition: 'all 0.2s',
            }}
          >
            <span style={{ fontSize: '20px' }}>{cat.emoji}</span>
            <span style={{
              fontSize: '10px',
              fontWeight: '600',
              color: activeCategory === cat.id ? cat.color : '#6b7280',
            }}>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* FOOTER */}
      <footer style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        padding: '12px 16px',
        borderTop: '1px solid #222',
        background: '#000',
        flexWrap: 'wrap',
      }}>
        <a 
          href="https://cafecito.app/nerdeals" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'linear-gradient(135deg, #6f4e37, #8B4513)',
            color: '#fff',
            padding: '8px 14px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >☕ Cafecito</a>
        <button 
          onClick={() => setLegalModal('terminos')}
          style={{
            background: 'none',
            border: 'none',
            color: '#6b7280',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >Términos</button>
        <button 
          onClick={() => setLegalModal('privacidad')}
          style={{
            background: 'none',
            border: 'none',
            color: '#6b7280',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >Privacidad</button>
        <a 
          href="https://twitter.com/nerdeals" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: '#6b7280',
            fontSize: '12px',
            textDecoration: 'none',
          }}
        >Twitter</a>
      </footer>

      {/* LEGAL MODAL */}
      {legalModal && (
        <div 
          onClick={() => setLegalModal(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              background: '#111',
              borderRadius: '16px',
              maxWidth: '500px',
              maxHeight: '80vh',
              overflow: 'auto',
              padding: '24px',
              border: '1px solid #333',
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
            }}>
              <h2 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                margin: 0,
                color: 'white',
              }}>
                {legalModal === 'terminos' ? 'Términos y Condiciones' : 'Política de Privacidad'}
              </h2>
              <button 
                onClick={() => setLegalModal(null)}
                style={{
                  background: '#333',
                  border: 'none',
                  color: '#fff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >✕</button>
            </div>
            
            <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '20px' }}>
              Última actualización: Enero 2025
            </p>

            {legalModal === 'terminos' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>1. Sobre NerDeals</h4>
                  <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                    NerDeals es un servicio independiente de curaduría de ofertas tecnológicas en Argentina. No vendemos productos ni intermediamos ventas.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>2. Enlaces de afiliados</h4>
                  <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                    Participamos en programas de afiliados (Mercado Libre Partners, Amazon Associates). Los clicks pueden generar comisiones sin costo adicional para el usuario.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>3. Precios</h4>
                  <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                    Los precios son referenciales y pueden cambiar sin previo aviso. Verificá siempre en el sitio del vendedor antes de comprar.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>4. Responsabilidad</h4>
                  <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                    NerDeals no es responsable por transacciones realizadas en sitios de terceros, calidad de productos, envíos, garantías o reclamos.
                  </p>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>1. Datos recopilados</h4>
                  <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                    Recopilamos información anónima de navegación para mejorar el servicio. No recopilamos datos personales sensibles.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>2. Cookies</h4>
                  <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                    Usamos cookies para análisis y seguimiento de afiliados. Podés configurar tu navegador para rechazarlas.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>3. Enlaces externos</h4>
                  <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                    Los enlaces llevan a sitios de terceros con sus propias políticas de privacidad sobre las cuales no tenemos control.
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '14px', margin: '0 0 8px 0' }}>4. Contacto</h4>
                  <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                    Para consultas sobre privacidad, contactanos a través de nuestras redes sociales.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}