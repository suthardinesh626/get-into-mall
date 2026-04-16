import './Luxury.css';

/* ─────────────────────────────────────────────────
   LUXURY SECTION
   Pure black boutique feel, brand showcase grid, stats
   ───────────────────────────────────────────────── */

const BRANDS = [
  { name: 'Tiffany & Co.', category: 'Fine Jewelry' },
  { name: 'Coach', category: 'Leather Goods' },
  { name: 'Michael Kors', category: 'Fashion' },
  { name: 'Swarovski', category: 'Crystal & Lifestyle' },
];

export default function Luxury() {
  return (
    <section id="luxury" className="section luxury" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="section-inner luxury__inner" style={{ padding: '0 4vw' }}>
        
        {/* ── Headline ── */}
        <div className="luxury__header reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="luxury__headline" style={{ fontSize: '3.5rem', lineHeight: '1.2' }}>
            Where Premium Brands<br />
            Find <em className="text-gold" style={{ fontStyle: 'italic' }}>Premium Audiences.</em>
          </h2>
        </div>

        {/* ── Brand Grid ── */}
        <div className="luxury__brands reveal delay-200" style={{ marginBottom: '4rem' }}>
          <div className="luxury__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {BRANDS.map((brand, i) => (
              <div key={i} className="luxury__brand-card glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 className="luxury__brand-name text-gold" style={{ fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>{brand.name}</h3>
                <span className="luxury__brand-category" style={{ color: '#ccc', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{brand.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Luxury Stats ── */}
        <div className="luxury__stats reveal delay-300" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '10px' }}>
          <div className="luxury__stat-item" style={{ textAlign: 'center' }}>
            <span className="luxury__stat-number" style={{ display: 'block', fontSize: '3rem', color: '#fff', marginBottom: '0.5rem' }}>$150K+</span>
            <span className="luxury__stat-label" style={{ color: 'var(--color-gold)', fontSize: '1.1rem' }}>Average Household Income</span>
          </div>
          <div className="luxury__stat-divider" aria-hidden="true" style={{ width: '2px', height: '60px', background: 'rgba(255,255,255,0.1)' }} />
          <div className="luxury__stat-item" style={{ textAlign: 'center' }}>
            <span className="luxury__stat-number" style={{ display: 'block', fontSize: '3rem', color: '#fff', marginBottom: '0.5rem' }}>35-55</span>
            <span className="luxury__stat-label" style={{ color: 'var(--color-gold)', fontSize: '1.1rem' }}>Core Luxury Shopper Age</span>
          </div>
          <div className="luxury__stat-divider" aria-hidden="true" style={{ width: '2px', height: '60px', background: 'rgba(255,255,255,0.1)' }} />
          <div className="luxury__stat-item" style={{ textAlign: 'center' }}>
            <span className="luxury__stat-number" style={{ display: 'block', fontSize: '3rem', color: '#fff', marginBottom: '0.5rem' }}>3.2x</span>
            <span className="luxury__stat-label" style={{ color: 'var(--color-gold)', fontSize: '1.1rem' }}>Higher Spend vs. Average</span>
          </div>
        </div>

      </div>
    </section>
  );
}
