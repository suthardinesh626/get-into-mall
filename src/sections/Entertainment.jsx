import CTAButton from '../components/CTAButton';
import './Entertainment.css';

/* ─────────────────────────────────────────────────
   ENTERTAINMENT SECTION
   Theme-park style, high energy, colored accents
   ───────────────────────────────────────────────── */

const ATTRACTIONS = [
  {
    title: 'Nickelodeon Universe',
    stats: '7 Acres · 27 Rides · World\'s Largest Indoor Coaster',
    desc: 'The center of the mall and the heart of the action.',
    color: 'var(--color-brand-orange, #ff6a00)', /* Nick orange */
    icon: '🎢'
  },
  {
    title: 'SEA LIFE Aquarium',
    stats: '10,000+ Sea Creatures · Interactive Exhibits',
    desc: 'A 300-foot ocean tunnel right under the mall.',
    color: 'var(--color-brand-blue, #00a8e1)', /* Sea Life blue */
    icon: '🦈'
  },
  {
    title: 'FlyOver America',
    stats: '360° Flight Simulation · 40-Min Experience',
    desc: 'Soar above iconic landscapes with wind and sensory effects.',
    color: 'var(--color-brand-teal, #00d2ff)', /* Sky blue/teal */
    icon: '✈️'
  },
  {
    title: 'Crayola Experience',
    stats: '26 Hands-On Activities · Family Destination',
    desc: 'A vibrant, interactive playground for creativity.',
    color: 'var(--color-brand-yellow, #ffc107)', /* Yellow */
    icon: '🖍️'
  },
  {
    title: 'Entertainment District',
    stats: 'Cinema · Bowling · Escape Rooms · Mini Golf',
    desc: 'Late-night activities that keep the energy high after shopping.',
    color: 'var(--color-brand-purple, #9c27b0)', /* Purple */
    icon: '🎳'
  }
];

export default function Entertainment() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="entertainment" className="section ent">
      
      {/* ── Background Effects ── */}
      <div className="ent__lights" aria-hidden="true">
        <div className="ent__light ent__light--1" />
        <div className="ent__light ent__light--2" />
        <div className="ent__light ent__light--3" />
      </div>

      <div className="section-inner ent__inner">
        
        {/* ── Headline ── */}
        <div className="ent__header reveal">
          <span className="gold-label">Pure Experience</span>
          <h2 className="ent__headline">
            The Only Mall With <br />
            <span className="text-gold">A Theme Park Inside.</span>
          </h2>
        </div>

        {/* ── Attraction Cards Horizontal Scroll ── */}
        <div className="ent__scroll-wrapper reveal delay-200">
          <div className="ent__scroll-track" role="list">
            {ATTRACTIONS.map((attr, i) => (
              <div 
                key={i} 
                className="ent__card" 
                role="listitem"
                style={{ '--accent': attr.color }}
              >
                <div className="ent__card-glow" aria-hidden="true" />
                <div className="ent__card-top">
                  <span className="ent__card-icon" aria-hidden="true">{attr.icon}</span>
                  <h3 className="ent__card-title">{attr.title}</h3>
                </div>
                <div className="ent__card-bottom">
                  <span className="ent__card-stats">{attr.stats}</span>
                  <p className="ent__card-desc">{attr.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>



      {/* ── CTA ── */}
      <div className="section-inner reveal delay-400">
        <div className="ent__cta-container">
          <h3 className="ent__cta-headline">Become the destination your audience can't stop talking about.</h3>
          <CTAButton 
            variant="outline" 
            onClick={() => scrollTo('partners')}
            className="ent__cta-btn"
          >
            Sponsorship Inquiry
          </CTAButton>
        </div>
      </div>

    </section>
  );
}
