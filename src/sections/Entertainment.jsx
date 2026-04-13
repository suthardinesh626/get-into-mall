import CTAButton from '../components/CTAButton';
import './Entertainment.css';

const ATTRACTIONS = [
  {
    id: 'nickelodeon',
    name: 'Nickelodeon Universe®',
    tagline: 'The Largest Indoor Theme Park in the USA',
    features: ['27 rides & attractions', '7 acres indoor', 'Family & thrill rides', 'Character experiences'],
    accent: '#FF6B35',
  },
  {
    id: 'sealife',
    name: 'SEA LIFE Minnesota',
    tagline: 'An Underwater World of Wonder',
    features: ['Ocean tunnel walk-through', '10,000+ sea creatures', 'Interactive touch pools', 'Conservation programs'],
    accent: '#0EA5E9',
  },
  {
    id: 'miniature',
    name: 'Crayola Experience',
    tagline: 'Where Creativity Has No Limits',
    features: ['25+ hands-on activities', 'Custom crayon making', 'Art studio experiences', 'Birthday party venue'],
    accent: '#FACC15',
  },
  {
    id: 'escape',
    name: 'FlyOver America',
    tagline: 'Soar Above the American Landscape',
    features: ['Reality flight ride', 'Sphere film experience', '4D sensory effects', 'Multi-screen immersion'],
    accent: '#C9A84C',
  },
];

export default function Entertainment() {
  return (
    <section id="entertainment" className="section entertainment">
      <div className="entertainment__bg" aria-hidden="true">
        <div className="entertainment__bg-gradient" />
        <div className="entertainment__bg-grid" />
      </div>

      <div className="entertainment__inner section-inner">
        {/* Header */}
        <div className="entertainment__header">
          <span className="gold-label reveal">Entertainment District</span>
          <h2 className="display-2 reveal delay-100">
            Beyond Shopping.{' '}
            <br />
            <span className="text-gold">Pure Experience.</span>
          </h2>
          <p className="body-lg reveal delay-200">
            MOA is a full-day destination. With 30+ acres of indoor entertainment,
            guests spend 4.8 hours on average — dramatically increasing brand exposure time.
          </p>
        </div>

        {/* Attraction cards */}
        <div className="entertainment__grid">
          {ATTRACTIONS.map((attr, i) => (
            <article
              key={attr.id}
              id={`entertainment-${attr.id}`}
              className={`entertainment__card glass-card reveal delay-${(i + 1) * 100}`}
              style={{ '--accent': attr.accent }}
            >
              <div className="entertainment__card-accent" aria-hidden="true" />
              <div className="entertainment__card-body">
                <h3 className="entertainment__card-name">{attr.name}</h3>
                <p className="entertainment__card-tagline">{attr.tagline}</p>
                <ul className="entertainment__card-features">
                  {attr.features.map((f) => (
                    <li key={f} className="entertainment__card-feature">
                      <span className="entertainment__card-dot" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="entertainment__cta reveal">
          <div className="entertainment__cta-text">
            <h3 className="entertainment__cta-headline">
              Partner with an attraction. Amplify your brand.
            </h3>
            <p className="body-lg">
              Co-branded experiences, sponsored zones, and attraction naming rights available.
            </p>
          </div>
          <CTAButton
            id="entertainment-cta-partner"
            variant="primary"
            href="mailto:partnerships@mallofamerica.com"
          >
            Explore Partnerships
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
