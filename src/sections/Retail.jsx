import CTAButton from '../components/CTAButton';
import './Retail.css';

const OPPORTUNITIES = [
  {
    id: 'flagship',
    tag: 'Most Popular',
    size: '2,000–15,000 sq ft',
    type: 'Flagship Store',
    desc: 'Anchor your brand in the heart of MOA. Flagship positions deliver maximum dwell time, highest traffic corridors, and permanent brand statements.',
    highlights: ['Level 1–3 premium placement', 'Corner & inline options', 'Custom buildout support', 'Co-marketing investment'],
  },
  {
    id: 'popup',
    tag: 'Flexible',
    size: '200–1,000 sq ft',
    type: 'Pop-Up & Kiosk',
    desc: 'Test your concept, launch a seasonal activation, or create buzz with a short-term format that reaches millions without long-term commitment.',
    highlights: ['30-day to 12-month terms', 'Turnkey options available', 'High-traffic endcaps', 'Flexible build options'],
  },
  {
    id: 'experience',
    tag: 'Exclusive',
    size: '5,000–50,000 sq ft',
    type: 'Experiential Venue',
    desc: 'Beyond retail. Create an immersive brand world — an indoor attraction, showroom, or multi-sensory experience that generates media and loyalty.',
    highlights: ['Attraction-grade spaces', 'Entertainment district zones', 'Long-term lease structures', 'Joint marketing programs'],
  },
];

const METRICS = [
  { value: '520K', label: 'sq ft retail' },
  { value: '$680', label: 'avg transaction' },
  { value: '4.2h', label: 'avg dwell time' },
  { value: '87%', label: 'repeat visit rate' },
];

export default function Retail() {
  return (
    <section id="retail" className="section retail">
      <div className="retail__bg" aria-hidden="true">
        <div className="retail__bg-gradient" />
      </div>

      <div className="retail__inner section-inner">
        {/* Header */}
        <div className="retail__header">
          <span className="gold-label reveal">For Retail Tenants</span>
          <h2 className="display-2 reveal delay-100">
            Your Store,{' '}
            <span className="text-gold">Their Stage</span>
          </h2>
          <p className="body-lg reveal delay-200">
            40 million pairs of eyes looking for exactly what you sell.
            Find the format that fits your brand.
          </p>
        </div>

        {/* Metrics bar */}
        <div className="retail__metrics reveal delay-300">
          {METRICS.map((m) => (
            <div key={m.label} className="retail__metric">
              <span className="retail__metric-value stat-number">{m.value}</span>
              <span className="retail__metric-label">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Opportunity cards */}
        <div className="retail__cards">
          {OPPORTUNITIES.map((opp, i) => (
            <article
              key={opp.id}
              id={`retail-card-${opp.id}`}
              className={`retail__card glass-card reveal delay-${(i + 1) * 100}`}
            >
              {opp.tag && (
                <div className="retail__card-tag">{opp.tag}</div>
              )}

              <div className="retail__card-size">{opp.size}</div>
              <h3 className="retail__card-type">{opp.type}</h3>
              <p className="retail__card-desc">{opp.desc}</p>

              <ul className="retail__card-highlights">
                {opp.highlights.map((h) => (
                  <li key={h} className="retail__card-highlight">
                    <span className="retail__card-check" aria-hidden="true">✦</span>
                    {h}
                  </li>
                ))}
              </ul>

              <CTAButton
                id={`retail-cta-${opp.id}`}
                variant="outline"
                className="retail__card-cta"
                href="mailto:leasing@mallofamerica.com"
                icon={
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              >
                Inquire Now
              </CTAButton>
            </article>
          ))}
        </div>

        {/* Bottom action */}
        <div className="retail__footer reveal">
          <p className="retail__footer-text">
            Ready to talk square footage? Our leasing team responds in 24 hours.
          </p>
          <CTAButton
            id="retail-cta-contact"
            variant="primary"
            href="mailto:leasing@mallofamerica.com"
          >
            Contact Leasing Team
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
