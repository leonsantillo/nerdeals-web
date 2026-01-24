import React, { useState } from 'react';

// ============================================
// DATOS DE OFERTAS
// ============================================
const dealsData = [
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
    status: "active", // active, soldout, finished
    type: "flash",
    stock: "low",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 2,
    name: 'Monitor 27" 144Hz IPS 1ms',
    brand: "LG UltraGear",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    currentPrice: 289000,
    avgPrice: 385000,
    discount: 25,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: 3,
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
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
  },
  {
    id: 4,
    name: "SSD NVMe 1TB Gen4 7000MB/s",
    brand: "Samsung 990 PRO",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
    currentPrice: 142000,
    avgPrice: 189000,
    discount: 25,
    store: "garbarino",
    url: "#",
    status: "active",
    type: "normal",
    stock: "available",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
  },
  {
    id: 5,
    name: "Mouse Inalámbrico Lightspeed",
    brand: "Logitech G502 X",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    currentPrice: 89000,
    avgPrice: 145000,
    discount: 39,
    store: "mercadolibre",
    url: "#",
    status: "active",
    type: "flash",
    stock: "low",
    publishedAt: new Date(Date.now() - 30 * 60 * 1000),
  },
  {
    id: 6,
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
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
  },
  // AGOTADOS
  {
    id: 7,
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
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: 8,
    name: "Webcam 4K Pro Streaming",
    brand: "Logitech Brio",
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&h=300&fit=crop",
    currentPrice: 185000,
    avgPrice: 280000,
    discount: 34,
    store: "garbarino",
    url: "#",
    status: "soldout",
    type: "normal",
    stock: "none",
    publishedAt: new Date(Date.now() - 36 * 60 * 60 * 1000),
  },
  // FINALIZADOS (promo expiró)
  {
    id: 9,
    name: "Gamepad Inalámbrico",
    brand: "Xbox Series X",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400&h=300&fit=crop",
    currentPrice: 65000,
    avgPrice: 95000,
    discount: 32,
    store: "mercadolibre",
    url: "#",
    status: "finished",
    type: "flash",
    stock: "none",
    publishedAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
  },
  {
    id: 10,
    name: "Memoria RAM DDR5 32GB",
    brand: "Corsair Vengeance",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop",
    currentPrice: 125000,
    avgPrice: 178000,
    discount: 30,
    store: "megatone",
    url: "#",
    status: "finished",
    type: "normal",
    stock: "none",
    publishedAt: new Date(Date.now() - 72 * 60 * 60 * 1000),
  },
];

// ============================================
// DATOS DE PROMOS BANCARIAS
// ============================================
const promosData = [
  {
    id: 1,
    banco: "Galicia",
    bancoColor: "#FF6B00",
    comercio: "Garbarino",
    descuento: "30%",
    tope: "$50.000",
    dia: "Jueves",
    vigenciaHasta: "31/01/2025",
    condiciones: "Tarjetas de crédito. 3 cuotas sin interés.",
    url: "#"
  },
  {
    id: 2,
    banco: "Macro",
    bancoColor: "#003087",
    comercio: "Megatone",
    descuento: "25%",
    tope: "$40.000",
    dia: "Miércoles",
    vigenciaHasta: "28/02/2025",
    condiciones: "Tarjetas de crédito y débito.",
    url: "#"
  },
  {
    id: 3,
    banco: "BBVA",
    bancoColor: "#004481",
    comercio: "Frávega",
    descuento: "20%",
    tope: "$35.000",
    dia: "Lunes",
    vigenciaHasta: "15/02/2025",
    condiciones: "Solo tarjetas de crédito.",
    url: "#"
  },
  {
    id: 4,
    banco: "Santander",
    bancoColor: "#EC0000",
    comercio: "Musimundo",
    descuento: "25%",
    tope: "$30.000",
    dia: "Martes",
    vigenciaHasta: "28/02/2025",
    condiciones: "Tarjetas de crédito. Tope por transacción.",
    url: "#"
  },
  {
    id: 5,
    banco: "ICBC",
    bancoColor: "#B2292E",
    comercio: "Garbarino",
    descuento: "20%",
    tope: "$25.000",
    dia: "Viernes",
    vigenciaHasta: "31/01/2025",
    condiciones: "Clientes Select diferentes beneficios.",
    url: "#"
  },
];

// ============================================
// CONFIGURACIÓN
// ============================================
const storeLogos = {
  mercadolibre: { name: "Mercado Libre", color: "#FFE600", textColor: "#333" },
  garbarino: { name: "Garbarino", color: "#E31837", textColor: "#FFF" },
  megatone: { name: "Megatone", color: "#0066CC", textColor: "#FFF" },
  amazon: { name: "Amazon", color: "#FF9900", textColor: "#333" },
  fravega: { name: "Frávega", color: "#ED1C24", textColor: "#FFF" },
};

// ============================================
// UTILIDADES
// ============================================
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

const getTimeAgo = (date) => {
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) return `Hace ${diffMins} min`;
  if (diffHours < 24) return `Hace ${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`;
  return `Hace ${diffDays} ${diffDays === 1 ? 'día' : 'días'}`;
};

// ============================================
// COMPONENTES DE OFERTAS
// ============================================
const SavingsIndicator = ({ discount }) => {
  let level;
  if (discount >= 60) level = 4;
  else if (discount >= 41) level = 3;
  else if (discount >= 26) level = 2;
  else level = 1;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '12px', color: '#9ca3af' }}>Ahorro:</span>
      <div style={{ display: 'flex', gap: '2px' }}>
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: i <= level ? (level === 4 ? '#f97316' : '#22c55e') : '#374151',
              opacity: i <= level ? 1 : 0.3,
            }}
          >
            $
          </span>
        ))}
      </div>
      {discount >= 60 && <span style={{ fontSize: '14px' }}>🔥</span>}
    </div>
  );
};

const StockIndicator = ({ stock, status }) => {
  if (status === 'soldout') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#ef4444' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></span>
        <span>Agotado</span>
      </div>
    );
  }
  
  if (status === 'finished') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6b7280' }}></span>
        <span>Finalizado</span>
      </div>
    );
  }
  
  if (stock === 'low') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#fbbf24' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fbbf24' }}></span>
        <span>Pocas unidades</span>
      </div>
    );
  }
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#22c55e' }}>
      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></span>
      <span>Disponible</span>
    </div>
  );
};

const TypeBadge = ({ type }) => {
  if (type === 'flash') {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        background: 'linear-gradient(135deg, #f97316, #ea580c)',
        color: 'white',
        padding: '4px 10px',
        borderRadius: '6px',
        fontSize: '11px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        <span>⚡</span>
        <span>Flash</span>
      </div>
    );
  }
  return <div></div>;
};

const StoreBadge = ({ store }) => {
  const storeInfo = storeLogos[store] || { name: store, color: '#666', textColor: '#FFF' };
  
  return (
    <div style={{
      background: storeInfo.color,
      color: storeInfo.textColor,
      padding: '4px 10px',
      borderRadius: '6px',
      fontSize: '10px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    }}>
      {storeInfo.name}
    </div>
  );
};

const StatusOverlay = ({ status }) => {
  if (status === 'active') return null;
  
  const config = {
    soldout: { text: 'AGOTADO', color: '#ef4444' },
    finished: { text: 'FINALIZADO', color: '#6b7280' }
  };
  
  const { text, color } = config[status] || config.finished;
  
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(0,0,0,0.85)',
      color: color,
      fontWeight: 'bold',
      fontSize: '14px',
      padding: '10px 20px',
      borderRadius: '8px',
      border: `2px solid ${color}`,
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }}>
      {text}
    </div>
  );
};

const DealCard = ({ deal }) => {
  const isInactive = deal.status !== 'active';
  
  return (
    <div style={{
      background: 'linear-gradient(to bottom right, #111827, #030712)',
      borderRadius: '16px',
      overflow: 'hidden',
      border: `1px solid ${isInactive ? 'rgba(55, 65, 81, 0.3)' : 'rgba(55, 65, 81, 0.5)'}`,
      position: 'relative',
      opacity: isInactive ? 0.6 : 1,
      filter: isInactive ? 'grayscale(40%)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
        borderBottom: '1px solid rgba(55, 65, 81, 0.3)'
      }}>
        <TypeBadge type={deal.type} />
        <StoreBadge store={deal.store} />
      </div>

      {/* Imagen */}
      <div style={{ position: 'relative', height: '160px', overflow: 'hidden', background: '#1f2937' }}>
        <img 
          src={deal.image} 
          alt={deal.name} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            filter: isInactive ? 'grayscale(50%)' : 'none'
          }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #111827, transparent)' }} />
        
        {/* Descuento */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: isInactive ? '#6b7280' : '#22c55e',
          color: isInactive ? '#fff' : '#000',
          fontWeight: 'bold',
          fontSize: '14px',
          padding: '6px 12px',
          borderRadius: '8px'
        }}>
          -{deal.discount}%
        </div>

        <StatusOverlay status={deal.status} />
      </div>

      {/* Contenido */}
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <p style={{ color: '#4ade80', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px 0' }}>
            {deal.brand}
          </p>
          <h3 style={{ color: 'white', fontWeight: '600', fontSize: '15px', lineHeight: '1.3', margin: 0 }}>
            {deal.name}
          </h3>
        </div>

        <div>
          <span style={{ fontSize: '26px', fontWeight: 'bold', color: 'white' }}>
            {formatPrice(deal.currentPrice)}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
            <span style={{ color: '#6b7280', textDecoration: 'line-through', fontSize: '13px' }}>
              {formatPrice(deal.avgPrice)}
            </span>
            <span style={{ color: '#9ca3af', fontSize: '11px' }}>promedio 30d</span>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px', 
          paddingTop: '12px', 
          borderTop: '1px solid rgba(55, 65, 81, 0.5)' 
        }}>
          <SavingsIndicator discount={deal.discount} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <StockIndicator stock={deal.stock} status={deal.status} />
            <span style={{ fontSize: '11px', color: '#6b7280' }}>
              {getTimeAgo(deal.publishedAt)}
            </span>
          </div>
        </div>

        <a 
          href={isInactive ? undefined : deal.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: 'none', pointerEvents: isInactive ? 'none' : 'auto' }}
        >
          <button style={{
            width: '100%',
            background: isInactive 
              ? '#374151' 
              : 'linear-gradient(to right, #22c55e, #06b6d4)',
            color: isInactive ? '#9ca3af' : 'black',
            fontWeight: 'bold',
            padding: '14px 24px',
            borderRadius: '12px',
            border: 'none',
            cursor: isInactive ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '14px',
            marginTop: '4px'
          }}>
            <span>{isInactive ? 'Ya no disponible' : `Ver en ${storeLogos[deal.store]?.name || deal.store}`}</span>
            {!isInactive && <span>→</span>}
          </button>
        </a>
      </div>
    </div>
  );
};

// ============================================
// COMPONENTES DE PROMOS BANCARIAS
// ============================================
const PromoCard = ({ promo }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1e293b, #0f172a)',
      borderRadius: '12px',
      padding: '20px',
      border: '1px solid rgba(55, 65, 81, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      {/* Header: Banco + Descuento */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '10px',
            background: promo.bancoColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            {promo.banco.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <p style={{ color: 'white', fontWeight: '600', fontSize: '16px', margin: 0 }}>{promo.banco}</p>
            <p style={{ color: '#9ca3af', fontSize: '13px', margin: '2px 0 0 0' }}>en {promo.comercio}</p>
          </div>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '18px',
          padding: '8px 16px',
          borderRadius: '8px'
        }}>
          {promo.descuento}
        </div>
      </div>

      {/* Detalles */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ 
          background: 'rgba(255,255,255,0.05)', 
          padding: '8px 12px', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{ fontSize: '14px' }}>📅</span>
          <span style={{ color: '#d1d5db', fontSize: '13px' }}>{promo.dia}</span>
        </div>
        <div style={{ 
          background: 'rgba(255,255,255,0.05)', 
          padding: '8px 12px', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{ fontSize: '14px' }}>💰</span>
          <span style={{ color: '#d1d5db', fontSize: '13px' }}>Tope: {promo.tope}</span>
        </div>
        <div style={{ 
          background: 'rgba(255,255,255,0.05)', 
          padding: '8px 12px', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{ fontSize: '14px' }}>⏰</span>
          <span style={{ color: '#d1d5db', fontSize: '13px' }}>Hasta {promo.vigenciaHasta}</span>
        </div>
      </div>

      {/* Condiciones */}
      <p style={{ color: '#6b7280', fontSize: '12px', margin: 0, lineHeight: '1.5' }}>
        {promo.condiciones}
      </p>

      {/* CTA */}
      <a href={promo.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <button style={{
          width: '100%',
          background: 'transparent',
          color: '#60a5fa',
          fontWeight: '600',
          padding: '12px',
          borderRadius: '10px',
          border: '1px solid #3b82f6',
          cursor: 'pointer',
          fontSize: '14px',
          transition: 'all 0.2s'
        }}>
          Ver condiciones completas →
        </button>
      </a>
    </div>
  );
};

// ============================================
// COMPONENTES DE LAYOUT
// ============================================
const Header = () => {
  const activeCount = dealsData.filter(d => d.status === 'active').length;
  
  return (
    <header style={{ 
      borderBottom: '1px solid rgba(55, 65, 81, 0.5)', 
      background: 'rgba(0,0,0,0.9)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 50,
      backdropFilter: 'blur(8px)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ 
            width: '42px', 
            height: '42px', 
            background: 'linear-gradient(135deg, #4ade80, #06b6d4)', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <span style={{ color: 'black', fontWeight: '900', fontSize: '20px' }}>N</span>
          </div>
          <h1 style={{ fontSize: '22px', fontWeight: 'bold', color: 'white', margin: 0 }}>
            Ner<span style={{ color: '#4ade80' }}>Deals</span>
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#9ca3af' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></span>
          <span>{activeCount} ofertas activas</span>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section style={{ padding: '48px 20px 32px' }}>
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: '38px', fontWeight: 'bold', color: 'white', lineHeight: '1.15', margin: '0 0 16px 0' }}>
        Ofertas tech <span style={{ color: '#4ade80' }}>sin humo</span>
      </h2>
      <p style={{ color: '#d1d5db', fontSize: '18px', maxWidth: '600px', margin: '0 auto 32px', lineHeight: '1.6' }}>
        Curamos las mejores ofertas tech de Argentina.<br/>
        <strong style={{ color: '#4ade80' }}>Precios reales. Sin humo.</strong>
      </p>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '24px', 
        padding: '20px 24px',
        background: 'rgba(17, 24, 39, 0.6)',
        borderRadius: '12px',
        border: '1px solid rgba(55, 65, 81, 0.5)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d1d5db', fontSize: '14px' }}>
          <span style={{ fontSize: '18px' }}>🎯</span>
          <span>Selección manual</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d1d5db', fontSize: '14px' }}>
          <span style={{ fontSize: '18px' }}>📊</span>
          <span>Precio vs promedio 30d</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d1d5db', fontSize: '14px' }}>
          <span style={{ fontSize: '18px' }}>⚡</span>
          <span>Actualizado constantemente</span>
        </div>
      </div>
    </div>
  </section>
);

const Tabs = ({ activeTab, setActiveTab }) => (
  <div style={{ 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '0 20px 24px',
    display: 'flex',
    gap: '8px'
  }}>
    <button
      onClick={() => setActiveTab('ofertas')}
      style={{
        padding: '12px 24px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: activeTab === 'ofertas' ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'rgba(55, 65, 81, 0.3)',
        color: activeTab === 'ofertas' ? 'black' : '#9ca3af',
        transition: 'all 0.2s'
      }}
    >
      <span>🔥</span>
      <span>Ofertas</span>
    </button>
    <button
      onClick={() => setActiveTab('promos')}
      style={{
        padding: '12px 24px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: activeTab === 'promos' ? 'linear-gradient(135deg, #3b82f6, #2563eb)' : 'rgba(55, 65, 81, 0.3)',
        color: activeTab === 'promos' ? 'white' : '#9ca3af',
        transition: 'all 0.2s'
      }}
    >
      <span>🏦</span>
      <span>Promos Bancarias</span>
    </button>
  </div>
);

const SectionDivider = ({ title }) => (
  <div style={{ 
    maxWidth: '1200px', 
    margin: '0 auto 24px', 
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
    <h3 style={{ 
      color: '#6b7280', 
      fontSize: '13px', 
      fontWeight: '600', 
      textTransform: 'uppercase',
      letterSpacing: '1px',
      margin: 0,
      whiteSpace: 'nowrap'
    }}>
      {title}
    </h3>
    <div style={{ flex: 1, height: '1px', background: 'rgba(55, 65, 81, 0.5)' }}></div>
  </div>
);

// ============================================
// SECCIONES COMERCIOS Y FEEDBACK
// ============================================
const ComerciosFeedback = () => (
  <section style={{ 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '48px 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px'
  }}>
    {/* Comercios */}
    <div style={{
      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(6, 182, 212, 0.05))',
      border: '1px solid rgba(34, 197, 94, 0.2)',
      borderRadius: '16px',
      padding: '28px'
    }}>
      <div style={{ fontSize: '32px', marginBottom: '16px' }}>🏪</div>
      <h3 style={{ color: 'white', fontSize: '18px', fontWeight: '600', margin: '0 0 12px 0' }}>
        ¿Tenés un comercio?
      </h3>
      <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
        Si querés que publiquemos tus ofertas tech, contactanos. Buscamos comercios con buena reputación y ofertas reales.
      </p>
      <a 
        href="https://forms.gle/Jk2QGcXYH3UGujuY7"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'transparent',
          color: '#4ade80',
          fontWeight: '600',
          padding: '12px 20px',
          borderRadius: '10px',
          border: '1px solid #4ade80',
          textDecoration: 'none',
          fontSize: '14px'
        }}
      >
        <span>Contactar</span>
        <span>→</span>
      </a>
    </div>

    {/* Feedback */}
    <div style={{
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.05))',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      borderRadius: '16px',
      padding: '28px'
    }}>
      <div style={{ fontSize: '32px', marginBottom: '16px' }}>💬</div>
      <h3 style={{ color: 'white', fontSize: '18px', fontWeight: '600', margin: '0 0 12px 0' }}>
        ¿Encontraste una oferta?
      </h3>
      <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
        ¿Viste una oferta que deberíamos publicar? ¿Algo no funciona? Contanos y lo revisamos.
      </p>
      <a 
        href="https://forms.gle/F9feFAC2i2f67BsN8"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'transparent',
          color: '#60a5fa',
          fontWeight: '600',
          padding: '12px 20px',
          borderRadius: '10px',
          border: '1px solid #60a5fa',
          textDecoration: 'none',
          fontSize: '14px'
        }}
      >
        <span>Enviar sugerencia</span>
        <span>→</span>
      </a>
    </div>
  </section>
);

// ============================================
// MODAL LEGAL
// ============================================
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
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(4px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: '#111827',
          borderRadius: '16px',
          border: '1px solid rgba(55, 65, 81, 0.5)',
          maxWidth: '600px',
          maxHeight: '80vh',
          overflow: 'auto',
          padding: '32px'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{title}</h2>
          <button 
            onClick={onClose}
            style={{
              background: 'rgba(55, 65, 81, 0.5)',
              border: 'none',
              color: '#9ca3af',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '18px'
            }}
          >
            ✕
          </button>
        </div>
        
        <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '24px' }}>
          Última actualización: Enero 2025
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {sections.map((section, i) => (
            <div key={i}>
              <h3 style={{ color: 'white', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                {section.title}
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================
// FOOTER
// ============================================
const Footer = ({ onOpenLegal }) => (
  <footer style={{ 
    borderTop: '1px solid rgba(55, 65, 81, 0.5)', 
    background: 'rgba(0,0,0,0.5)'
  }}>
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '40px 20px'
    }}>
      {/* Top */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        gap: '32px',
        marginBottom: '32px'
      }}>
        {/* Logo */}
        <div style={{ maxWidth: '320px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              background: 'linear-gradient(135deg, #4ade80, #06b6d4)', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <span style={{ color: 'black', fontWeight: '900', fontSize: '14px' }}>N</span>
            </div>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>
              Ner<span style={{ color: '#4ade80' }}>Deals</span>
            </span>
          </div>
          <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
            Las mejores ofertas tech de Argentina, curadas manualmente. Sin humo, sin descuentos inflados.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '48px' }}>
          <div>
            <h4 style={{ color: '#9ca3af', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
              Legal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button 
                onClick={() => onOpenLegal('terminos')}
                style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: '14px', cursor: 'pointer', textAlign: 'left', padding: 0 }}
              >
                Términos y Condiciones
              </button>
              <button 
                onClick={() => onOpenLegal('privacidad')}
                style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: '14px', cursor: 'pointer', textAlign: 'left', padding: 0 }}
              >
                Política de Privacidad
              </button>
            </div>
          </div>
          <div>
            <h4 style={{ color: '#9ca3af', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
              Seguinos
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="https://twitter.com/nerdeals" target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280', fontSize: '14px', textDecoration: 'none' }}>Twitter / X</a>
              <a href="https://t.me/nerdeals" target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280', fontSize: '14px', textDecoration: 'none' }}>Telegram</a>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{
        background: 'rgba(55, 65, 81, 0.2)',
        borderRadius: '10px',
        padding: '16px 20px',
        marginBottom: '24px'
      }}>
        <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.7', margin: 0, textAlign: 'center' }}>
          NerDeals es un servicio gratuito de curaduría de ofertas. No vendemos productos. Los enlaces pueden generar comisiones de afiliado sin costo adicional para vos. Precios y disponibilidad sujetos a cambio.
        </p>
      </div>

      {/* Copyright */}
      <div style={{ 
        borderTop: '1px solid rgba(55, 65, 81, 0.5)', 
        paddingTop: '24px',
        textAlign: 'center'
      }}>
        <span style={{ color: '#4b5563', fontSize: '13px' }}>
          © 2025 NerDeals. Todos los derechos reservados.
        </span>
      </div>
    </div>
  </footer>
);

// ============================================
// APP PRINCIPAL
// ============================================
export default function App() {
  const [activeTab, setActiveTab] = useState('ofertas');
  const [legalModal, setLegalModal] = useState(null);

  const activeDeals = dealsData.filter(d => d.status === 'active');
  const inactiveDeals = dealsData.filter(d => d.status !== 'active');

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-150px', left: '5%', width: '500px', height: '500px', background: 'rgba(34, 197, 94, 0.07)', borderRadius: '50%', filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: '-150px', right: '5%', width: '500px', height: '500px', background: 'rgba(6, 182, 212, 0.07)', borderRadius: '50%', filter: 'blur(100px)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Header />
        <Hero />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Contenido según tab */}
        {activeTab === 'ofertas' && (
          <>
            <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 48px' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                gap: '24px' 
              }}>
                {activeDeals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            </main>

            {inactiveDeals.length > 0 && (
              <>
                <SectionDivider title="Ofertas finalizadas" />
                <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 48px' }}>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                    gap: '24px' 
                  }}>
                    {inactiveDeals.map((deal) => (
                      <DealCard key={deal.id} deal={deal} />
                    ))}
                  </div>
                </section>
              </>
            )}
          </>
        )}

        {activeTab === 'promos' && (
          <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px 48px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {promosData.map((promo) => (
                <PromoCard key={promo.id} promo={promo} />
              ))}
            </div>
            <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '13px', marginTop: '32px' }}>
              Las condiciones pueden variar. Consultá siempre con tu banco.
            </p>
          </main>
        )}

        <ComerciosFeedback />
        <Footer onOpenLegal={setLegalModal} />
      </div>

      {/* Modal Legal */}
      {legalModal && (
        <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
      )}
    </div>
  );
}