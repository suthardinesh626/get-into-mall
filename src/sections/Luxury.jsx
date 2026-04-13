import CTAButton from '../components/CTAButton';
import './Luxury.css';

const BRANDS = [
  'Louis Vuitton', 'Coach', 'Nordstrom', 'Anthropologie',
  'Tesla', 'Apple', 'Lululemon', 'Sephora',
  'Hugo Boss', 'Kate Spade', 'Pandora', 'TAG Heuer',
];

const PROOF_POINTS = [
  {
    id: 'lv',
    brand: 'Louis Vuitton',
    result: '340%',
    metric: 'sales growth in Year 1',
    quote: 'MOA delivers customers who arrive with intention. It is the rare mall where luxury resonates.',
  },
  {
    id: 'tesla',
    brand: 'Tesla Motors',
    result: '$28M',
    metric: 'in test drives in 18 months',
    quote: 'The foot traffic is unlike any location in our portfolio. MOA is our highest-converting showroom.',
  },
  {
    id: 'apple',
    brand: 'Apple Inc.',
    result: '4.8★',
    metric: 'customer satisfaction score',
    quote: 'MOA shoppers are tech-savvy and spend-ready. Our Genius Bar books out weeks in advance.',
  },
];

export default function Luxury() {
  return (
    <section id="luxury" className="section luxury">
      {/* Background */}
      <div className="luxury__bg" aria-hidden="true">
        <div className="luxury__bg-texture" />
        <div className="luxury__bg-gradient" />
      </div>

      <div className="luxury__inner section-inner">
        {/* Header */}
        <div className="luxury__header">
          <span className="gold-label reveal">Luxury & Premium</span>
          <h2 className="display-2 reveal delay-100">
            Where Premium{' '}
            <br />
            <em className="text-gold">Brands Belong</em>
          </h2>
          <p className="body-lg reveal delay-200">
            A curated ecosystem of 500+ tenants — including 80+ luxury and aspirational brands
            that drive average transaction values 3× above national mall benchmarks.
          </p>
        </div>

        {/* Brand grid */}
        <div className="luxury__brand-grid reveal delay-300" aria-label="Partner brands">
          {BRANDS.map((brand) => (
            <div key={brand} className="luxury__brand-pill">
              {brand}
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="luxury__proof">
          {PROOF_POINTS.map((pt, i) => (
            <article
              key={pt.id}
              id={`luxury-proof-${pt.id}`}
              className={`luxury__proof-card glass-card reveal delay-${(i + 1) * 100}`}
            >
              <div className="luxury__proof-header">
                <div className="luxury__proof-brand">{pt.brand}</div>
                <div className="luxury__proof-result">
                  <span className="stat-number">{pt.result}</span>
                  <span className="luxury__proof-metric">{pt.metric}</span>
                </div>
              </div>
              <blockquote className="luxury__proof-quote">
                "{pt.quote}"
              </blockquote>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="luxury__cta reveal">
          <p className="luxury__cta-text">
            Interested in a luxury positioning at MOA?
          </p>
          <CTAButton
            id="luxury-cta-inquire"
            variant="primary"
            href="mailto:luxuryleasing@mallofamerica.com"
          >
            Luxury Leasing Inquiry
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
