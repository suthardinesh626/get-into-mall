import './Luxury.css';

/* ─────────────────────────────────────────────────
   LUXURY SECTION
   Pure black boutique feel, brand showcase grid, stats
   ───────────────────────────────────────────────── */

const BRANDS = [
  { name: 'Tiffany & Co.', category: 'Fine Jewelry' },
  { name: 'Coach', category: 'Leather Goods' },
  { name: 'Michael Kors', category: 'Fashion' },
  { name: 'Kate Spade', category: 'Accessories' },
  { name: 'Pandora', category: 'Jewelry' },
  { name: 'Swarovski', category: 'Crystal & Lifestyle' },
];

export default function Luxury() {
  return (
    <section id="luxury" className="section luxury">
      <div className="section-inner luxury__inner">
        
        {/* ── Headline ── */}
        <div className="luxury__header reveal">
          <h2 className="luxury__headline">
            Where Premium Brands<br />
            Find <em className="luxury__headline-em">Premium Audiences.</em>
          </h2>
        </div>

        {/* ── Brand Grid ── */}
        <div className="luxury__brands reveal delay-200">
          <div className="luxury__grid">
            {BRANDS.map((brand, i) => (
              <div key={i} className="luxury__brand-card">
                <h3 className="luxury__brand-name">{brand.name}</h3>
                <span className="luxury__brand-category">{brand.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Luxury Stats ── */}
        <div className="luxury__stats reveal delay-300">
          <div className="luxury__stat-item">
            <span className="luxury__stat-number">$150K+</span>
            <span className="luxury__stat-label">Average Household Income</span>
          </div>
          <div className="luxury__stat-divider" aria-hidden="true" />
          <div className="luxury__stat-item">
            <span className="luxury__stat-number">35-55</span>
            <span className="luxury__stat-label">Core Luxury Shopper Age</span>
          </div>
          <div className="luxury__stat-divider" aria-hidden="true" />
          <div className="luxury__stat-item">
            <span className="luxury__stat-number">3.2x</span>
            <span className="luxury__stat-label">Higher Spend vs. Average</span>
          </div>
        </div>

        {/* ── Quote ── */}
        <div className="luxury__quote-wrapper reveal delay-400">
          <blockquote className="luxury__quote">
            "The Collection at Mall of America delivers the audience luxury brands demand — concentrated, high-intent, and ready to spend."
          </blockquote>
        </div>

      </div>
    </section>
  );
}
