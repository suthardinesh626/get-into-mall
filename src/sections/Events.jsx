import CTAButton from '../components/CTAButton';
import './Events.css';

const EVENT_TYPES = [
  {
    id: 'concerts',
    icon: '🎵',
    title: 'Concerts & Live Music',
    capacity: '15,000',
    desc: 'From emerging artists to platinum acts, MOA\'s Rotunda stage and outdoor plaza host 200+ live events per year.',
    past: ['Taylor Swift Alumni Set', 'BTS Pop-Up', 'Jimmy Buffett Retirement Tour'],
  },
  {
    id: 'product',
    icon: '🚀',
    title: 'Product Launches',
    capacity: '40M+ Reach',
    desc: 'Launch to America\'s most diverse, high-intent audience. Media gravity ensures national coverage of every major activation.',
    past: ['Nike Air Max Global Launch', 'Samsung Galaxy Reveal', 'Marvel Box Office Kickoffs'],
  },
  {
    id: 'conventions',
    icon: '🏛️',
    title: 'Conventions & Expos',
    capacity: '100K sq ft',
    desc: 'Mall + hotel + convention infrastructure in one connected campus. Attendees shop, dine, and stay — maximizing sponsor value.',
    past: ['MN Anime Festival', 'Comic Con Extension', 'Bridal Extravaganza'],
  },
  {
    id: 'corporate',
    icon: '💼',
    title: 'Corporate Events',
    capacity: '5,000 guests',
    desc: 'Buyout options, private dinners in flagship restaurants, and branded retail experiences for incentive groups and leadership offsites.',
    past: ['Fortune 500 Buyouts', 'NFL Draft Party', 'Super Bowl Official Events'],
  },
];

const EVENT_STATS = [
  { value: '400+', label: 'Events Per Year' },
  { value: '100K', label: 'Max Capacity (sq ft)' },
  { value: '15K',  label: 'Concert Attendance' },
  { value: '$0',   label: 'Permit Complexity' },
];

export default function Events() {
  return (
    <section id="events" className="section events">
      <div className="events__bg" aria-hidden="true">
        <div className="events__bg-gradient" />
      </div>

      <div className="events__inner section-inner">
        {/* Header */}
        <div className="events__header">
          <span className="gold-label reveal">For Event Organizers</span>
          <h2 className="display-2 reveal delay-100">
            The Venue That{' '}
            <span className="text-gold">Needs No Introduction</span>
          </h2>
          <p className="body-lg reveal delay-200">
            Over 400 events annually — from stadium-scale concerts to intimate brand dinners.
            MOA's infrastructure handles it all.
          </p>
        </div>

        {/* Stats */}
        <div className="events__stats reveal delay-300">
          {EVENT_STATS.map((s) => (
            <div key={s.label} className="events__stat">
              <span className="events__stat-value stat-number">{s.value}</span>
              <span className="events__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Event type grid */}
        <div className="events__grid">
          {EVENT_TYPES.map((evt, i) => (
            <article
              key={evt.id}
              id={`events-type-${evt.id}`}
              className={`events__card glass-card reveal delay-${(i + 1) * 100}`}
            >
              <div className="events__card-icon" aria-label={evt.title}>{evt.icon}</div>
              <div className="events__card-meta">
                <h3 className="events__card-title">{evt.title}</h3>
                <span className="events__card-capacity">{evt.capacity}</span>
              </div>
              <p className="events__card-desc">{evt.desc}</p>
              <div className="events__card-past">
                <span className="events__card-past-label">Recent Events</span>
                <ul className="events__card-past-list">
                  {evt.past.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="events__cta reveal">
          <CTAButton
            id="events-cta-book"
            variant="primary"
            href="mailto:events@mallofamerica.com"
          >
            Book Your Event
          </CTAButton>
          <CTAButton
            id="events-cta-kit"
            variant="outline"
            href="mailto:events@mallofamerica.com"
          >
            Download Event Kit
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
