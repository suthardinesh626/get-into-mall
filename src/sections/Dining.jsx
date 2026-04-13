import CTAButton from '../components/CTAButton';
import './Dining.css';

const CONCEPTS = [
  { id: 'fine',     emoji: '🍽️', category: 'Fine Dining',       count: '12+', desc: 'White-tablecloth experiences anchored by celebrity chef concepts.' },
  { id: 'fast',     emoji: '⚡', category: 'Fast Casual',        count: '80+', desc: 'High-volume formats serving the 40M annual visitor stream.' },
  { id: 'bar',      emoji: '🍸', category: 'Bars & Nightlife',   count: '15+', desc: 'Evening entertainment destinations driving late-night spend.' },
  { id: 'food',     emoji: '🏪', category: 'Food Hall',          count: '30+', desc: 'Curated marketplace of artisan and regional food concepts.' },
  { id: 'bakery',   emoji: '🥐', category: 'Specialty & Bakery', count: '20+', desc: 'Destination concepts that fuel social media shareability.' },
  { id: 'intl',     emoji: '🌍', category: 'International',      count: '25+', desc: 'Global cuisine that mirrors MOA\'s diverse guest base.' },
];

const DINING_STATS = [
  { value: '$18M+', label: 'Monthly F&B Revenue' },
  { value: '4.8h',  label: 'Avg. Dwell Time' },
  { value: '62%',   label: 'Guests Dine on Visit' },
  { value: '180+',  label: 'F&B Locations' },
];

export default function Dining() {
  return (
    <section id="dining" className="section dining">
      <div className="dining__bg" aria-hidden="true">
        <div className="dining__bg-gradient" />
      </div>

      <div className="dining__inner section-inner">
        {/* Header */}
        <div className="dining__header">
          <span className="gold-label reveal">For F&B Operators</span>
          <h2 className="display-2 reveal delay-100">
            Feed{' '}
            <span className="text-gold">Millions</span>
          </h2>
          <p className="body-lg reveal delay-200">
            MOA's food & beverage ecosystem is a destination in its own right —
            driving 62% dining participation per visit and generating over $18M monthly.
          </p>
        </div>

        {/* Stats */}
        <div className="dining__stats reveal delay-300">
          {DINING_STATS.map((s) => (
            <div key={s.label} className="dining__stat">
              <div className="dining__stat-value stat-number">{s.value}</div>
              <div className="dining__stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Concept grid */}
        <div className="dining__grid">
          {CONCEPTS.map((concept, i) => (
            <div
              key={concept.id}
              id={`dining-concept-${concept.id}`}
              className={`dining__concept glass-card reveal delay-${(i + 1) * 100}`}
            >
              <div className="dining__concept-emoji" aria-hidden="true">{concept.emoji}</div>
              <div className="dining__concept-category">{concept.category}</div>
              <div className="dining__concept-count">{concept.count} concepts</div>
              <p className="dining__concept-desc">{concept.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="dining__cta reveal">
          <CTAButton
            id="dining-cta-inquire"
            variant="primary"
            href="mailto:dining@mallofamerica.com"
          >
            F&B Leasing Inquiry
          </CTAButton>
          <CTAButton
            id="dining-cta-tour"
            variant="outline"
            href="mailto:dining@mallofamerica.com"
          >
            Schedule Site Tour
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
