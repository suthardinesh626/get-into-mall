import CTAButton from '../components/CTAButton';
import './Venues.css';

const VENUES = [
  {
    type: 'Performing Arts Center',
    name: 'The Grand Theater',
    capacity: '2,500 Seats',
    desc: 'State-of-the-art acoustics, full fly loft, and orchestra pit. Perfect for touring broadway shows, ballets, and world-class performances.',
    features: ['3 dressing rooms', 'VIP lounge', '4K Projection'],
  },
  {
    type: 'Expo Hall',
    name: 'MOA North Exhibition Center',
    capacity: '100,000 Sq Ft',
    desc: 'Column-free expo space designed for trade shows, consumer expos, and large-scale conventions. Direct access to 10 loading docks.',
    features: ['Divisible into 3 halls', 'Rigging grid', 'Dedicated fiber internet'],
  }
];

export default function Venues() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="venues" className="section venues">
      <div className="section-inner venues__inner">
        <div className="venues__header reveal">
          <h2 className="venues__headline">Venue-Specific Modules</h2>
          <p className="venues__sub">World-class facilities beyond the typical retail experience. Purpose-built for scale.</p>
        </div>
        
        <div className="venues__grid">
          {VENUES.map((venue, i) => (
            <div key={i} className={`venues__card reveal delay-${200 + i * 100}`}>
              <span className="venues__card-type">{venue.type}</span>
              <h3 className="venues__card-name">{venue.name}</h3>
              <p className="venues__card-cap">{venue.capacity}</p>
              <p className="venues__card-desc">{venue.desc}</p>
              <ul className="venues__card-features">
                {venue.features.map((f, j) => (
                  <li key={j} className="venues__feature">✓ {f}</li>
                ))}
              </ul>
              <CTAButton variant="outline" className="venues__btn" onClick={() => scrollTo('leasing')}>Inquire Now</CTAButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
