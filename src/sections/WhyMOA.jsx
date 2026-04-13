import StatCounter from '../components/StatCounter';
import CTAButton from '../components/CTAButton';
import './WhyMOA.css';

/* ─────────────────────────────────────────────────
   Why MOA — Data-driven proof section
   References: Dubai Mall about, Apple "why" pages
   ───────────────────────────────────────────────── */

const STAT_CARDS = [
  { id: 'visitors',  value: 40,   suffix: 'M+',  label: 'Visitors Annually',        decimals: 0,  delay: 0   },
  { id: 'sqft',      value: 5.6,  suffix: 'M',   label: 'Square Feet',              decimals: 1,  delay: 80  },
  { id: 'stores',    value: 520,  suffix: '+',   label: 'Retail Stores',             decimals: 0,  delay: 160 },
  { id: 'regional',  value: 60,   suffix: '%',   label: 'Visitors from 150+ Miles',  decimals: 0,  delay: 240 },
  { id: 'sales',     value: 2,    suffix: 'B+',  label: 'Annual Retail Sales',       prefix: '$',  decimals: 0, delay: 320 },
  { id: 'rides',     value: 27,   suffix: '',    label: 'Rides: Nickelodeon Universe', decimals: 0, delay: 400 },
];

const LOCATION_ITEMS = [
  {
    id: 'airport',
    label: '30 MIN FROM MSP AIRPORT',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L13 8h5l-4 3 1.5 5.5L10 13l-5.5 3.5L6 11 2 8h5L10 2Z"
              stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
        <circle cx="10" cy="18" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'highway',
    label: 'INTERSECTION OF I-494 & HWY 77',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2v16M2 10h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      </svg>
    ),
  },
  {
    id: 'location',
    label: 'BLOOMINGTON, MINNESOTA',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5Z"
              stroke="currentColor" strokeWidth="1.3" fill="none"/>
        <circle cx="10" cy="7" r="1.8" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function WhyMOA() {
  return (
    <section id="why-moa" className="section wmoa">
      {/* Subtle background treatment */}
      <div className="wmoa__bg" aria-hidden="true">
        <div className="wmoa__bg-glow" />
      </div>

      {/* ── Main two-column layout ── */}
      <div className="wmoa__main section-inner">

        {/* ── Left: Pull quote + paragraph ── */}
        <div className="wmoa__left">
          <span className="gold-label reveal">Why Mall of America</span>

          <h2 className="wmoa__headline reveal delay-100">
            Not the largest mall<br />
            in America.<br />
            <em className="wmoa__headline-em">The largest<br />destination.</em>
          </h2>

          <div className="wmoa__divider reveal delay-200" aria-hidden="true" />

          {/* <p className="wmoa__body reveal delay-300">
            Forty million people come here every year — not because they need
            something, but because <strong>MOA is the destination</strong>. They
            plan trips around it. They fly in for it. They stay two days and still
            don't see everything. No other retail address in North America commands
            that kind of intentional, invested visitation.
          </p> */}

          {/* <p className="wmoa__body wmoa__body--secondary reveal delay-400">
            That means every brand here benefits from a captive, spend-ready audience
            that chose to be here — a distinction no other mall can claim.
          </p> */}

          {/* Supporting proof callout */}
          {/* <div className="wmoa__callout glass-card reveal delay-500">
            <span className="wmoa__callout-eye">Bigger than the icons</span>
            <p className="wmoa__callout-text">
              MOA draws more annual visitors than <strong>Disney World</strong>,
              the <strong>Grand Canyon</strong>, and <strong>Graceland</strong>{' '}
              <em>combined</em>.
            </p>
          </div> */}

          <div className="wmoa__left-cta reveal delay-500">
            <CTAButton
              id="whymoa-cta-leasing"
              variant="outline"
              onClick={() => document.getElementById('retail')?.scrollIntoView({ behavior: 'smooth' })}
              icon={
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            >
              Explore Leasing
            </CTAButton>
          </div>
        </div>

        {/* ── Right: 2×3 stat grid ── */}
        <div className="wmoa__right">
          <div className="wmoa__grid" role="list" aria-label="Mall of America statistics">
            {STAT_CARDS.map((card) => (
              <article
                key={card.id}
                id={`wmoa-stat-${card.id}`}
                className="wmoa__card reveal"
                style={{ transitionDelay: `${card.delay}ms` }}
                role="listitem"
              >
                <div className="wmoa__card-number">
                  <StatCounter
                    value={card.value}
                    suffix={card.suffix}
                    prefix={card.prefix || ''}
                    decimals={card.decimals}
                    duration={2000}
                  />
                </div>
                <p className="wmoa__card-label">{card.label}</p>
              </article>
            ))}
          </div>

          {/* Additional quick-fact list */}
          <div className="wmoa__facts reveal" aria-label="Additional facts">
            {[
              { icon: '🏨', text: '1,600 hotel rooms attached (JW Marriott + Radisson Blu)' },
              { icon: '🍽️', text: '50+ restaurants and dining experiences on-site' },
              { icon: '💼', text: '30,000 jobs supported directly and indirectly' },
              { icon: '🎡', text: '7-acre Nickelodeon Universe® Theme Park indoors' },
            ].map((fact) => (
              <div key={fact.text} className="wmoa__fact">
                <span className="wmoa__fact-icon" aria-hidden="true">{fact.icon}</span>
                <span className="wmoa__fact-text">{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Location strip ── */}
      <div className="wmoa__location-strip" role="complementary" aria-label="Location highlights">
        {LOCATION_ITEMS.map((item, i) => (
          <div key={item.id} className="wmoa__location-item-wrap">
            {i > 0 && <div className="wmoa__location-sep" aria-hidden="true" />}
            <div id={`wmoa-location-${item.id}`} className="wmoa__location-item">
              <span className="wmoa__location-icon">{item.icon}</span>
              <span className="wmoa__location-label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Regional reach visualization ── */}
      <div className="wmoa__reach section-inner">
        {/* CSS-only concentric rings */}
        <div className="wmoa__map" aria-label="Regional reach visualization">
          {/* Rings */}
          <div className="wmoa__ring wmoa__ring--outer" aria-hidden="true">
            <span className="wmoa__ring-label wmoa__ring-label--outer">NATIONAL</span>
          </div>
          <div className="wmoa__ring wmoa__ring--mid" aria-hidden="true">
            <span className="wmoa__ring-label wmoa__ring-label--mid">REGIONAL<br/><small>4-hr drive</small></span>
          </div>
          <div className="wmoa__ring wmoa__ring--inner" aria-hidden="true">
            <span className="wmoa__ring-label wmoa__ring-label--inner">LOCAL</span>
          </div>
          {/* Center pin */}
          <div className="wmoa__pin" aria-hidden="true">
            <div className="wmoa__pin-dot" />
            <div className="wmoa__pin-pulse" />
            <div className="wmoa__pin-pulse wmoa__pin-pulse--2" />
          </div>
        </div>

        {/* Copy beside the map */}
        <div className="wmoa__reach-copy reveal">
          <span className="gold-label">Regional Gravity</span>
          <h3 className="wmoa__reach-headline">
            40% of the U.S. population<br />
            lives within a{' '}
            <span className="text-gold">500-mile radius.</span>
          </h3>
          <p className="wmoa__reach-body body-lg">
            The Upper Midwest is one of the most densely connected drive-markets in
            North America. MOA sits at the center — reachable from Chicago, Milwaukee,
            Kansas City, and beyond in a single tank of gas.
          </p>

          <div className="wmoa__reach-stats">
            {[
              { num: '60%', desc: 'of visitors traveled 150+ miles specifically to visit MOA' },
              { num: '13',  desc: 'states within a 4-hour drive radius' },
              { num: '30',  desc: 'minutes from MSP International Airport' },
            ].map((s) => (
              <div key={s.num} className="wmoa__reach-stat">
                <span className="wmoa__reach-stat-num">{s.num}</span>
                <span className="wmoa__reach-stat-desc">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
