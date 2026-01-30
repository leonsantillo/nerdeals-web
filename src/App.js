import React, { useState, useEffect, useRef } from 'react';

// ============================================
// 🎮 NERDEALS V2 ULTIMATE
// Gen Z + Gamers + Maximum FOMO + Conversión
// ============================================

// DEALS DATA - Actualizar con ofertas reales
const DEALS = [
  {
    id: 1,
    brand: "LOGITECH",
    title: "G502 X LIGHTSPEED",
    subtitle: "Mouse Gaming Inalámbrico",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_931148-MLU72534824393_102023-F.webp",
    currentPrice: 89000,
    originalPrice: 145000,
    discount: 39,
    score: 9.8,
    store: "meli",
    category: "gaming",
    url: "https://mercadolibre.com.ar/g502x",
    isHot: true,
    isLowest: true,
    stock: "low", // low, medium, high
    votes: 2847,
    timeAgo: "2h",
    freeShipping: true,
    tags: ["⚡ ÉPICA", "🏆 #1 GAMING"]
  },
  {
    id: 2,
    brand: "SONY",
    title: "WH-1000XM5",
    subtitle: "Auriculares Noise Cancelling",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_869657-MLA71783191498_092023-F.webp",
    currentPrice: 380000,
    originalPrice: 520000,
    discount: 27,
    score: 9.2,
    store: "meli",
    category: "audio",
    url: "https://mercadolibre.com.ar/xm5",
    isHot: true,
    isLowest: false,
    stock: "medium",
    votes: 1923,
    timeAgo: "5h",
    freeShipping: true,
    tags: ["🎧 MEJOR ANC"]
  },
  {
    id: 3,
    brand: "APPLE",
    title: "AirPods Pro 2",
    subtitle: "USB-C + Adaptive Audio",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_745620-MLA72527447836_102023-F.webp",
    currentPrice: 320000,
    originalPrice: 420000,
    discount: 24,
    score: 9.0,
    store: "meli",
    category: "apple",
    url: "https://mercadolibre.com.ar/airpods",
    isHot: false,
    isLowest: true,
    stock: "low",
    votes: 3241,
    timeAgo: "1h",
    freeShipping: true,
    tags: ["🍎 APPLE", "📉 MÍNIMO"]
  },
  {
    id: 4,
    brand: "ASUS",
    title: "RTX 4060 DUAL OC",
    subtitle: "8GB GDDR6 - Ray Tracing",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_652706-MLA54858949498_042023-F.webp",
    currentPrice: 485000,
    originalPrice: 629000,
    discount: 23,
    score: 8.5,
    store: "meli",
    category: "gaming",
    url: "https://mercadolibre.com.ar/rtx4060",
    isHot: false,
    isLowest: false,
    stock: "high",
    votes: 892,
    timeAgo: "8h",
    freeShipping: true,
    tags: ["🎮 GPU"]
  },
  {
    id: 5,
    brand: "AMAZON",
    title: "Fire TV Stick 4K Max",
    subtitle: "WiFi 6E + Alexa Voice",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_876543-MLA71234567890_092023-F.webp",
    currentPrice: 42000,
    originalPrice: 65000,
    discount: 35,
    score: 9.5,
    store: "meli",
    category: "stream",
    url: "https://mercadolibre.com.ar/firestick",
    isHot: true,
    isLowest: true,
    stock: "low",
    votes: 4521,
    timeAgo: "30m",
    freeShipping: false,
    tags: ["⚡ ÉPICA", "📺 SMART"]
  },
  {
    id: 6,
    brand: "SAMSUNG",
    title: "Galaxy S24 Ultra",
    subtitle: "256GB - AI Features",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_928294-MLA72604618538_112023-F.webp",
    currentPrice: 1850000,
    originalPrice: 2200000,
    discount: 16,
    score: 8.0,
    store: "meli",
    category: "mobile",
    url: "https://mercadolibre.com.ar/s24ultra",
    isHot: false,
    isLowest: false,
    stock: "high",
    votes: 1247,
    timeAgo: "12h",
    freeShipping: true,
    tags: ["📱 FLAGSHIP"]
  },
  {
    id: 7,
    brand: "REDRAGON",
    title: "K530 DRACONIC",
    subtitle: "Teclado 60% RGB Hot-Swap",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_746651-MLA50099406953_052022-F.webp",
    currentPrice: 45900,
    originalPrice: 68000,
    discount: 32,
    score: 8.8,
    store: "meli",
    category: "gaming",
    url: "https://mercadolibre.com.ar/k530",
    isHot: true,
    isLowest: false,
    stock: "medium",
    votes: 2156,
    timeAgo: "4h",
    freeShipping: false,
    tags: ["⌨️ MECÁNICO"]
  },
  {
    id: 8,
    brand: "SECRETLAB",
    title: "TITAN Evo 2024",
    subtitle: "Silla Gaming Ergonómica",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_997561-MLA48049028812_102021-F.webp",
    currentPrice: 890000,
    originalPrice: 1200000,
    discount: 26,
    score: 9.1,
    store: "meli",
    category: "gaming",
    url: "https://mercadolibre.com.ar/titan",
    isHot: false,
    isLowest: true,
    stock: "low",
    votes: 743,
    timeAgo: "6h",
    freeShipping: true,
    tags: ["🪑 PRO", "📉 MÍNIMO"]
  }
];

const CATEGORIES = [
  { id: 'all', name: 'TODO', emoji: '🔥', color: '#ff6b35' },
  { id: 'gaming', name: 'GAMING', emoji: '🎮', color: '#bf5af2' },
  { id: 'audio', name: 'AUDIO', emoji: '🎧', color: '#ff2d55' },
  { id: 'mobile', name: 'MOBILE', emoji: '📱', color: '#30d158' },
  { id: 'apple', name: 'APPLE', emoji: '🍎', color: '#007aff' },
  { id: 'pc', name: 'PC', emoji: '💻', color: '#5e5ce6' },
  { id: 'stream', name: 'STREAM', emoji: '📺', color: '#ff9500' },
];

// Format price
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
};

// ============================================
// MAIN APP
// ============================================
export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [votes, setVotes] = useState({});
  const [showToast, setShowToast] = useState(null);
  const [viewMode, setViewMode] = useState('swipe'); // swipe or grid
  const containerRef = useRef(null);

  // Filter deals
  const filteredDeals = activeCategory === 'all' 
    ? DEALS 
    : DEALS.filter(d => d.category === activeCategory);

  // Handle swipe/scroll
  const goToNext = () => {
    if (currentIndex < filteredDeals.length - 1) {
      setCurrentIndex(currentIndex + 1);
      vibrate();
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      vibrate();
    }
  };

  // Haptic feedback
  const vibrate = () => {
    if (navigator.vibrate) navigator.vibrate(10);
  };

  // Vote handler
  const handleVote = (dealId) => {
    const newVotes = { ...votes };
    newVotes[dealId] = !newVotes[dealId];
    setVotes(newVotes);
    localStorage.setItem('nerdeals_votes', JSON.stringify(newVotes));
    
    if (newVotes[dealId]) {
      toast('🔥 ¡VOTASTE!');
      vibrate();
    }
  };

  // Toast notification
  const toast = (message) => {
    setShowToast(message);
    setTimeout(() => setShowToast(null), 2000);
  };

  // Load votes from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('nerdeals_votes');
    if (saved) setVotes(JSON.parse(saved));
  }, []);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goToNext();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goToPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, filteredDeals.length]);

  // Touch swipe
  const touchStart = useRef(0);
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  };

  const currentDeal = filteredDeals[currentIndex];

  return (
    <div style={styles.app}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>N</div>
            <span style={styles.logoText}>Ner<span style={styles.logoAccent}>Deals</span></span>
          </div>
          <div style={styles.headerActions}>
            <button 
              style={{...styles.viewToggle, ...(viewMode === 'grid' ? styles.viewToggleActive : {})}}
              onClick={() => setViewMode(viewMode === 'swipe' ? 'grid' : 'swipe')}
            >
              {viewMode === 'swipe' ? '▦' : '◧'}
            </button>
            <a href="https://cafecito.app/nerdeals" target="_blank" rel="noopener" style={styles.coffeeBtn}>
              ☕
            </a>
          </div>
        </div>
      </header>

      {/* CATEGORIES */}
      <nav style={styles.categories}>
        <div style={styles.categoriesInner}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                ...styles.catPill,
                ...(activeCategory === cat.id ? {
                  background: `${cat.color}22`,
                  borderColor: cat.color,
                  color: cat.color,
                  boxShadow: `0 0 20px ${cat.color}33`
                } : {})
              }}
            >
              <span>{cat.emoji}</span>
              <span style={styles.catName}>{cat.name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* LIVE COUNTER */}
      <div style={styles.liveBar}>
        <div style={styles.liveDot}></div>
        <span>{filteredDeals.length} ofertas activas</span>
        <span style={styles.liveTime}>• Actualizado hace 5m</span>
      </div>

      {/* MAIN CONTENT */}
      {viewMode === 'swipe' ? (
        /* SWIPE MODE */
        <main 
          style={styles.swipeContainer}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          ref={containerRef}
        >
          {currentDeal && (
            <DealCard 
              deal={currentDeal} 
              isVoted={votes[currentDeal.id]}
              onVote={() => handleVote(currentDeal.id)}
              index={currentIndex}
              total={filteredDeals.length}
            />
          )}
          
          {/* Navigation arrows */}
          <button 
            style={{...styles.navArrow, ...styles.navPrev, ...(currentIndex === 0 ? styles.navDisabled : {})}}
            onClick={goToPrev}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <button 
            style={{...styles.navArrow, ...styles.navNext, ...(currentIndex === filteredDeals.length - 1 ? styles.navDisabled : {})}}
            onClick={goToNext}
            disabled={currentIndex === filteredDeals.length - 1}
          >
            →
          </button>

          {/* Progress dots */}
          <div style={styles.dots}>
            {filteredDeals.slice(0, 10).map((_, i) => (
              <div 
                key={i} 
                style={{
                  ...styles.dot,
                  ...(i === currentIndex ? styles.dotActive : {}),
                  ...(i === currentIndex && filteredDeals[i]?.isHot ? styles.dotHot : {})
                }}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
            {filteredDeals.length > 10 && <span style={styles.dotMore}>+{filteredDeals.length - 10}</span>}
          </div>
        </main>
      ) : (
        /* GRID MODE */
        <main style={styles.gridContainer}>
          {filteredDeals.map((deal, i) => (
            <DealCardMini 
              key={deal.id}
              deal={deal}
              isVoted={votes[deal.id]}
              onVote={() => handleVote(deal.id)}
            />
          ))}
        </main>
      )}

      {/* TOAST */}
      {showToast && (
        <div style={styles.toast}>{showToast}</div>
      )}

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>NerDeals © 2026 • Los precios pueden variar</p>
        <p style={styles.footerDisclaimer}>💡 Links de afiliado. Podés generar comisiones sin costo extra.</p>
      </footer>
    </div>
  );
}

// ============================================
// DEAL CARD (Full - Swipe mode)
// ============================================
function DealCard({ deal, isVoted, onVote, index, total }) {
  const savings = deal.originalPrice - deal.currentPrice;
  const scoreColor = deal.score >= 9 ? '#ff6b35' : deal.score >= 8 ? '#30d158' : '#ffd60a';
  
  return (
    <article style={styles.card}>
      {/* Image section */}
      <div style={styles.cardImage}>
        <img src={deal.image} alt={deal.title} style={styles.cardImg} />
        
        {/* Overlay gradient */}
        <div style={styles.cardOverlay}></div>
        
        {/* Top badges */}
        <div style={styles.cardTopBadges}>
          <div style={{...styles.scoreBadge, borderColor: scoreColor, color: scoreColor}}>
            <span style={styles.scoreNum}>{deal.score}</span>
            <span style={styles.scoreMax}>/10</span>
          </div>
          <div style={{
            ...styles.discountBadge,
            background: deal.discount >= 30 ? 'linear-gradient(135deg, #ff6b35, #ff2d55)' : '#30d158'
          }}>
            -{deal.discount}%
          </div>
        </div>

        {/* Bottom badges */}
        <div style={styles.cardBottomBadges}>
          <div style={{
            ...styles.storeBadge,
            background: deal.store === 'meli' ? '#ffe600' : '#e31837',
            color: deal.store === 'meli' ? '#000' : '#fff'
          }}>
            {deal.store === 'meli' ? 'MELI' : 'GARBA'}
          </div>
          {deal.stock === 'low' && (
            <div style={styles.stockBadge}>
              ⚡ ÚLTIMAS UNIDADES
            </div>
          )}
        </div>

        {/* Counter */}
        <div style={styles.cardCounter}>
          {index + 1} / {total}
        </div>
      </div>

      {/* Content section */}
      <div style={styles.cardContent}>
        {/* Tags */}
        {deal.tags && (
          <div style={styles.cardTags}>
            {deal.tags.map((tag, i) => (
              <span key={i} style={styles.tag}>{tag}</span>
            ))}
          </div>
        )}

        {/* Brand & Title */}
        <div style={styles.cardBrand}>{deal.brand}</div>
        <h2 style={styles.cardTitle}>{deal.title}</h2>
        <p style={styles.cardSubtitle}>{deal.subtitle}</p>

        {/* Price */}
        <div style={styles.priceSection}>
          <div style={styles.priceRow}>
            <span style={styles.priceCurrent}>{formatPrice(deal.currentPrice)}</span>
            <span style={styles.priceOriginal}>{formatPrice(deal.originalPrice)}</span>
          </div>
          <div style={styles.savingsBox}>
            <span style={styles.savingsIcon}>💰</span>
            <span style={styles.savingsText}>Ahorrás</span>
            <span style={styles.savingsAmount}>{formatPrice(savings)}</span>
          </div>
          <div style={styles.progressBar}>
            <div style={{...styles.progressFill, width: `${deal.discount}%`}}></div>
          </div>
          <span style={styles.progressText}>{deal.discount}% menos que el precio habitual</span>
        </div>

        {/* Trust signals */}
        <div style={styles.signals}>
          {deal.isLowest && <span style={styles.signal}>📉 Precio más bajo</span>}
          {deal.freeShipping && <span style={styles.signal}>🚚 Envío gratis</span>}
          <span style={styles.signal}>✓ Vendedor top</span>
          <span style={styles.signal}>🕐 Hace {deal.timeAgo}</span>
        </div>

        {/* Actions */}
        <div style={styles.actions}>
          <button 
            style={{...styles.voteBtn, ...(isVoted ? styles.voteBtnActive : {})}}
            onClick={onVote}
          >
            <span style={styles.voteIcon}>🔥</span>
            <span>{deal.votes + (isVoted ? 1 : 0)}</span>
          </button>
          <a 
            href={deal.url} 
            target="_blank" 
            rel="noopener sponsored"
            style={styles.ctaBtn}
          >
            <span>VER OFERTA</span>
            <span style={styles.ctaArrow}>→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

// ============================================
// DEAL CARD MINI (Grid mode)
// ============================================
function DealCardMini({ deal, isVoted, onVote }) {
  return (
    <article style={styles.miniCard}>
      <div style={styles.miniImage}>
        <img src={deal.image} alt={deal.title} style={styles.miniImg} />
        <div style={styles.miniDiscount}>-{deal.discount}%</div>
        {deal.isHot && <div style={styles.miniHot}>🔥</div>}
      </div>
      <div style={styles.miniContent}>
        <div style={styles.miniBrand}>{deal.brand}</div>
        <div style={styles.miniTitle}>{deal.title}</div>
        <div style={styles.miniPrice}>{formatPrice(deal.currentPrice)}</div>
        <a href={deal.url} target="_blank" rel="noopener sponsored" style={styles.miniCta}>
          VER →
        </a>
      </div>
    </article>
  );
}

// ============================================
// STYLES
// ============================================
const styles = {
  app: {
    minHeight: '100vh',
    background: '#000',
    color: '#fff',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    overflow: 'hidden',
  },

  // Header
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(0,0,0,0.9)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid #222',
  },
  headerInner: {
    maxWidth: 600,
    margin: '0 auto',
    padding: '12px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  logoIcon: {
    width: 36,
    height: 36,
    background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    fontSize: 18,
    color: '#000',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 700,
  },
  logoAccent: {
    background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  headerActions: {
    display: 'flex',
    gap: 8,
  },
  viewToggle: {
    width: 40,
    height: 40,
    border: '1px solid #333',
    borderRadius: 10,
    background: '#111',
    color: '#888',
    fontSize: 18,
    cursor: 'pointer',
  },
  viewToggleActive: {
    borderColor: '#00ff88',
    color: '#00ff88',
  },
  coffeeBtn: {
    width: 40,
    height: 40,
    border: '1px solid #8b5a2b',
    borderRadius: 10,
    background: 'linear-gradient(135deg, #8b5a2b, #d4a574)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    textDecoration: 'none',
  },

  // Categories
  categories: {
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    borderBottom: '1px solid #1a1a1a',
  },
  categoriesInner: {
    display: 'flex',
    gap: 8,
    padding: '12px 16px',
    minWidth: 'max-content',
  },
  catPill: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '10px 16px',
    border: '1px solid #333',
    borderRadius: 20,
    background: '#111',
    color: '#888',
    fontSize: 12,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  },
  catName: {
    letterSpacing: '0.5px',
  },

  // Live bar
  liveBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '10px 16px',
    background: 'linear-gradient(90deg, rgba(255,107,53,0.1), transparent, rgba(255,107,53,0.1))',
    fontSize: 12,
    color: '#ff6b35',
    fontWeight: 500,
  },
  liveDot: {
    width: 8,
    height: 8,
    background: '#ff6b35',
    borderRadius: '50%',
    animation: 'pulse 1.5s ease-in-out infinite',
  },
  liveTime: {
    color: '#666',
  },

  // Swipe container
  swipeContainer: {
    position: 'relative',
    maxWidth: 500,
    margin: '0 auto',
    padding: '16px',
    minHeight: 'calc(100vh - 200px)',
  },

  // Card
  card: {
    background: '#111',
    borderRadius: 24,
    overflow: 'hidden',
    border: '1px solid #222',
    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
  },
  cardImage: {
    position: 'relative',
    aspectRatio: '4/3',
    background: '#0a0a0a',
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)',
  },
  cardTopBadges: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    display: 'flex',
    justifyContent: 'space-between',
  },
  scoreBadge: {
    padding: '8px 12px',
    background: 'rgba(0,0,0,0.8)',
    backdropFilter: 'blur(10px)',
    borderRadius: 12,
    border: '2px solid',
    fontWeight: 700,
  },
  scoreNum: {
    fontSize: 20,
  },
  scoreMax: {
    fontSize: 12,
    opacity: 0.7,
  },
  discountBadge: {
    padding: '8px 14px',
    borderRadius: 12,
    fontWeight: 800,
    fontSize: 18,
    color: '#fff',
  },
  cardBottomBadges: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  storeBadge: {
    padding: '6px 12px',
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 12,
  },
  stockBadge: {
    padding: '6px 12px',
    background: 'rgba(255,45,58,0.9)',
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 11,
    color: '#fff',
    animation: 'pulse 2s ease-in-out infinite',
  },
  cardCounter: {
    position: 'absolute',
    top: 16,
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '4px 12px',
    background: 'rgba(0,0,0,0.6)',
    borderRadius: 20,
    fontSize: 11,
    color: '#888',
  },

  // Card content
  cardContent: {
    padding: 20,
  },
  cardTags: {
    display: 'flex',
    gap: 8,
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  tag: {
    padding: '4px 10px',
    background: 'rgba(255,107,53,0.15)',
    border: '1px solid rgba(255,107,53,0.3)',
    borderRadius: 6,
    fontSize: 11,
    fontWeight: 600,
    color: '#ff6b35',
  },
  cardBrand: {
    fontSize: 12,
    fontWeight: 700,
    color: '#00ff88',
    letterSpacing: 2,
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 800,
    margin: 0,
    lineHeight: 1.2,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },

  // Price section
  priceSection: {
    marginTop: 20,
    padding: 16,
    background: 'linear-gradient(135deg, rgba(0,255,136,0.05), rgba(0,212,255,0.05))',
    borderRadius: 16,
    border: '1px solid rgba(0,255,136,0.2)',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 12,
  },
  priceCurrent: {
    fontSize: 32,
    fontWeight: 800,
    fontFamily: "'JetBrains Mono', monospace",
  },
  priceOriginal: {
    fontSize: 18,
    color: '#666',
    textDecoration: 'line-through',
  },
  savingsBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
  },
  savingsIcon: {
    fontSize: 16,
  },
  savingsText: {
    fontSize: 13,
    color: '#888',
  },
  savingsAmount: {
    fontSize: 18,
    fontWeight: 700,
    color: '#30d158',
  },
  progressBar: {
    height: 6,
    background: '#222',
    borderRadius: 3,
    marginTop: 12,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #30d158, #00ff88)',
    borderRadius: 3,
    transition: 'width 0.5s ease',
  },
  progressText: {
    display: 'block',
    fontSize: 11,
    color: '#666',
    marginTop: 6,
    textAlign: 'center',
  },

  // Signals
  signals: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  signal: {
    fontSize: 11,
    color: '#888',
    padding: '4px 8px',
    background: '#1a1a1a',
    borderRadius: 6,
  },

  // Actions
  actions: {
    display: 'flex',
    gap: 12,
    marginTop: 20,
  },
  voteBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '14px 20px',
    border: '1px solid #333',
    borderRadius: 14,
    background: '#0a0a0a',
    color: '#888',
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  voteBtnActive: {
    borderColor: '#ff6b35',
    background: 'rgba(255,107,53,0.15)',
    color: '#ff6b35',
  },
  voteIcon: {
    fontSize: 18,
  },
  ctaBtn: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '14px 24px',
    background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
    borderRadius: 14,
    color: '#000',
    fontSize: 15,
    fontWeight: 800,
    textDecoration: 'none',
    transition: 'all 0.2s',
  },
  ctaArrow: {
    fontSize: 18,
  },

  // Navigation
  navArrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 48,
    height: 48,
    border: '1px solid #333',
    borderRadius: '50%',
    background: 'rgba(0,0,0,0.8)',
    color: '#fff',
    fontSize: 20,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    zIndex: 10,
  },
  navPrev: {
    left: -8,
  },
  navNext: {
    right: -8,
  },
  navDisabled: {
    opacity: 0.3,
    cursor: 'not-allowed',
  },

  // Dots
  dots: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    background: '#333',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  dotActive: {
    width: 24,
    borderRadius: 4,
    background: '#00ff88',
  },
  dotHot: {
    background: '#ff6b35',
  },
  dotMore: {
    fontSize: 10,
    color: '#666',
    marginLeft: 4,
  },

  // Grid mode
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 12,
    padding: 16,
    maxWidth: 600,
    margin: '0 auto',
  },
  miniCard: {
    background: '#111',
    borderRadius: 16,
    overflow: 'hidden',
    border: '1px solid #222',
  },
  miniImage: {
    position: 'relative',
    aspectRatio: '1',
    background: '#0a0a0a',
  },
  miniImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  miniDiscount: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: '4px 8px',
    background: '#30d158',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 700,
    color: '#fff',
  },
  miniHot: {
    position: 'absolute',
    top: 8,
    left: 8,
    fontSize: 16,
  },
  miniContent: {
    padding: 12,
  },
  miniBrand: {
    fontSize: 9,
    color: '#00ff88',
    fontWeight: 600,
    letterSpacing: 1,
  },
  miniTitle: {
    fontSize: 13,
    fontWeight: 700,
    marginTop: 2,
    lineHeight: 1.2,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  miniPrice: {
    fontSize: 16,
    fontWeight: 800,
    marginTop: 8,
  },
  miniCta: {
    display: 'block',
    marginTop: 8,
    padding: '8px',
    background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
    borderRadius: 8,
    color: '#000',
    fontSize: 12,
    fontWeight: 700,
    textDecoration: 'none',
    textAlign: 'center',
  },

  // Toast
  toast: {
    position: 'fixed',
    bottom: 100,
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '12px 24px',
    background: '#111',
    border: '1px solid #00ff88',
    borderRadius: 12,
    fontSize: 14,
    fontWeight: 600,
    color: '#00ff88',
    zIndex: 1000,
    animation: 'slideUp 0.3s ease',
  },

  // Footer
  footer: {
    textAlign: 'center',
    padding: '40px 16px',
    borderTop: '1px solid #1a1a1a',
    marginTop: 40,
  },
  footerDisclaimer: {
    fontSize: 11,
    color: '#666',
    marginTop: 8,
  },
};

// Add keyframes
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  @keyframes slideUp {
    from { transform: translateX(-50%) translateY(20px); opacity: 0; }
    to { transform: translateX(-50%) translateY(0); opacity: 1; }
  }
  *::-webkit-scrollbar { display: none; }
  * { scrollbar-width: none; }
`;
document.head.appendChild(styleSheet);