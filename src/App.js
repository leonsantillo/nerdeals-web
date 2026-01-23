import React from 'react';

const dealsData = [
  {
    id: 1,
    name: "NVIDIA RTX 4060 8GB GDDR6",
    brand: "ASUS Dual",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop",
    currentPrice: 485000,
    avgPrice: 629000,
    discount: 23,
    seller: "Venex Gaming",
    sellerRating: 98,
    stock: 4,
    url: "#",
    trend: [85, 87, 82, 79, 77, 74, 65, 61]
  },
  {
    id: 2,
    name: 'Monitor LG 27" 144Hz IPS 1ms',
    brand: "LG UltraGear",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    currentPrice: 289000,
    avgPrice: 385000,
    discount: 25,
    seller: "LG Argentina Oficial",
    sellerRating: 99,
    stock: 12,
    url: "#",
    trend: [90, 88, 85, 86, 82, 76, 68, 64]
  },
  {
    id: 3,
    name: "Teclado Mecánico RGB Hot-Swap",
    brand: "Redragon K530 Draconic",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=300&fit=crop",
    currentPrice: 45900,
    avgPrice: 62000,
    discount: 26,
    seller: "Redragon Oficial",
    sellerRating: 97,
    stock: 8,
    url: "#",
    trend: [92, 87, 83, 79, 74, 66, 61, 59]
  },
  {
    id: 4,
    name: "SSD NVMe 1TB Gen4 7000MB/s",
    brand: "Samsung 990 PRO",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
    currentPrice: 142000,
    avgPrice: 189000,
    discount: 25,
    seller: "Samsung Store",
    sellerRating: 99,
    stock: 3,
    url: "#",
    trend: [95, 92, 88, 86, 81, 77, 72, 66]
  }
];

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

const MiniChart = ({ trend }) => {
  const max = Math.max(...trend);
  const min = Math.min(...trend);
  const range = max - min;
  
  const points = trend.map((val, i) => {
    const x = (i / (trend.length - 1)) * 100;
    const y = 100 - ((val - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');
  
  return (
    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '50px', overflow: 'visible' }}>
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
};

const DealCard = ({ deal }) => {
  const isLowStock = deal.stock <= 5;
  
  return (
    <div style={{
      background: 'linear-gradient(to bottom right, #111827, #030712)',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid rgba(55, 65, 81, 0.5)',
      position: 'relative'
    }}>
      <div style={{ 
        position: 'absolute', 
        top: '16px', 
        right: '16px', 
        zIndex: 10,
        background: '#22c55e', 
        color: 'black', 
        fontWeight: 'bold', 
        fontSize: '14px', 
        padding: '4px 12px', 
        borderRadius: '9999px' 
      }}>
        -{deal.discount}%
      </div>

      <div style={{ position: 'relative', height: '180px', overflow: 'hidden', background: '#1f2937' }}>
        <img src={deal.image} alt={deal.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #111827, transparent)' }} />
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <p style={{ color: '#4ade80', fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', margin: 0 }}>{deal.brand}</p>
          <h3 style={{ color: 'white', fontWeight: '600', fontSize: '16px', lineHeight: '1.3', margin: 0 }}>{deal.name}</h3>
        </div>

        <div>
          <span style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>{formatPrice(deal.currentPrice)}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
            <span style={{ color: '#6b7280', textDecoration: 'line-through', fontSize: '14px' }}>{formatPrice(deal.avgPrice)}</span>
            <span style={{ color: '#4ade80', fontSize: '11px' }}>promedio 30d</span>
          </div>
        </div>

        <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(55, 65, 81, 0.5)' }}>
          <p style={{ fontSize: '11px', color: '#6b7280', marginBottom: '8px', margin: '0 0 8px 0' }}>Historial de precio</p>
          <MiniChart trend={deal.trend} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#6b7280', marginTop: '4px' }}>
            <span>Hace 30 días</span>
            <span>Hoy</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '12px', borderTop: '1px solid rgba(55, 65, 81, 0.5)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: '#9ca3af', fontSize: '13px' }}>{deal.seller}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', padding: '2px 8px', borderRadius: '9999px' }}>
                <span>✓</span>
                <span>Verificado</span>
              </div>
              <span style={{ color: '#6b7280' }}>{deal.sellerRating}%</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: isLowStock ? '#fbbf24' : '#9ca3af' }}>
            {isLowStock && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }}></span>}
            <span>{isLowStock ? `¡Solo ${deal.stock} unidades!` : `${deal.stock} disponibles`}</span>
          </div>
        </div>

        <a href={deal.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            background: 'linear-gradient(to right, #22c55e, #06b6d4)',
            color: 'black',
            fontWeight: 'bold',
            padding: '14px 24px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '14px'
          }}>
            <span>Ver en Mercado Libre</span>
            <span>→</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'black', color: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', left: '10%', width: '400px', height: '400px', background: 'rgba(34, 197, 94, 0.08)', borderRadius: '50%', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-100px', right: '10%', width: '400px', height: '400px', background: 'rgba(6, 182, 212, 0.08)', borderRadius: '50%', filter: 'blur(80px)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <header style={{ borderBottom: '1px solid rgba(55, 65, 81, 0.5)', background: 'rgba(0,0,0,0.8)', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', background: 'linear-gradient(to bottom right, #4ade80, #06b6d4)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'black', fontWeight: '900', fontSize: '18px' }}>N</span>
              </div>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>Ner<span style={{ color: '#4ade80' }}>Deals</span></h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#9ca3af' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></span>
              <span>{dealsData.length} ofertas activas</span>
            </div>
          </div>
        </header>

        <section style={{ padding: '48px 16px' }}>
          <div style={{ maxWidth: '768px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', padding: '8px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: '500', border: '1px solid rgba(34, 197, 94, 0.2)', marginBottom: '24px' }}>
              <span>✓</span>
              <span>Precios verificados vs historial real</span>
            </div>
            <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: 'white', lineHeight: '1.1', marginBottom: '16px', margin: '0 0 16px 0' }}>
              Ofertas tech <span style={{ color: '#4ade80' }}>sin humo</span>
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '18px', maxWidth: '560px', margin: '0 auto' }}>
              Solo publicamos descuentos reales. Comparamos contra el precio promedio de 30 días, no contra precios inflados.
            </p>
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(55, 65, 81, 0.5)', borderBottom: '1px solid rgba(55, 65, 81, 0.5)', background: 'rgba(17, 24, 39, 0.3)', padding: '24px 16px', marginBottom: '48px' }}>
          <div style={{ maxWidth: '896px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', fontSize: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af' }}>
              <span style={{ color: '#22c55e' }}>✓</span>
              <span>Descuentos <strong style={{ color: 'white' }}>verificados</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af' }}>
              <span style={{ color: '#22c55e' }}>📈</span>
              <span>Historial de <strong style={{ color: 'white' }}>30 días</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af' }}>
              <span style={{ color: '#22c55e' }}>🔒</span>
              <span>Solo vendedores <strong style={{ color: 'white' }}>+95% rep</strong></span>
            </div>
          </div>
        </div>

        <main style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 16px 64px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {dealsData.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </main>

        <footer style={{ borderTop: '1px solid rgba(55, 65, 81, 0.5)', padding: '32px 16px' }}>
          <div style={{ maxWidth: '1152px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', fontSize: '14px', color: '#6b7280' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '24px', height: '24px', background: 'linear-gradient(to bottom right, #4ade80, #06b6d4)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'black', fontWeight: '900', fontSize: '11px' }}>N</span>
              </div>
              <span>NerDeals © 2025</span>
            </div>
            <p style={{ color: '#4b5563', margin: 0 }}>
              Los precios pueden variar. Verificá siempre antes de comprar.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}