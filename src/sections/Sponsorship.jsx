import CTAButton from '../components/CTAButton';
import './Sponsorship.css';

const PACKAGES = [
  {
    id: 'presenting',
    tier: 'Presenting',
    price: '$1.2M+',
    period: 'annually',
    highlight: true,
    includes: [
      'Naming rights on major anchor zone',
      '50+ digital display placements',
      'Exclusive 30-day holiday activation',
      'Custom branded experience space',
      'Co-marketing: TV, digital, social',
      'VIP event access & hospitality',
      'Annual foot traffic guarantee: 40M',
    ],
  },
  {
    id: 'premier',
    tier: 'Premier Partner',
    price: '$400K–800K',
    period: 'annually',
    includes: [
      'Branded zone with physical presence',
      '24 targeted digital placements',
      'Seasonal activation windows',
      'Co-branded email to 2M subscribers',
      'Social amplification package',
      'Event hosting priority access',
    ],
  },
  {
    id: 'seasonal',
    tier: 'Seasonal Sponsor',
    price: '$75K–200K',
    period: 'per season',
    includes: [
      'Peak season activation space',
      '8 targeted digital placements',
      'Holiday campaign inclusion',
      'Social media feature posts',
      'On-site branding package',
    ],
  },
];

const CHANNELS = [
  { id: 's-digital', name: 'Digital Signage', desc: '400+ screens' },
  { id: 's-social',  name: 'Social Reach',    desc: '2.1M followers' },
  { id: 's-email',   name: 'Email List',       desc: '2M subscribers' },
  { id: 's-app',     name: 'MOA App',          desc: '800K users' },
  { id: 's-pr',      name: 'Earned Media',     desc: '2.1B impressions' },
  { id: 's-events',  name: 'Live Events',      desc: '400+ per year' },
];

export default function Sponsorship() {
  return (
    <section id="sponsorship" className="section sponsorship">
      <div className="sponsorship__bg" aria-hidden="true">
        <div className="sponsorship__bg-gradient" />
      </div>

      <div className="sponsorship__inner section-inner">
        {/* Header */}
        <div className="sponsorship__header">
          <span className="gold-label reveal">For Corporate Sponsors</span>
          <h2 className="display-2 reveal delay-100">
            Ownership-Level{' '}
            <span className="text-gold">Brand Presence</span>
          </h2>
          <p className="body-lg reveal delay-200">
            Sponsorship at MOA isn't advertising — it's ownership. Build category dominance
            in front of 40M guests who are already in a spending mindset.
          </p>
        </div>

        {/* Channel grid */}
        <div className="sponsorship__channels reveal delay-300">
          {CHANNELS.map((ch) => (
            <div key={ch.id} id={ch.id} className="sponsorship__channel">
              <div className="sponsorship__channel-name">{ch.name}</div>
              <div className="sponsorship__channel-desc">{ch.desc}</div>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div className="sponsorship__packages">
          {PACKAGES.map((pkg, i) => (
            <article
              key={pkg.id}
              id={`sponsorship-${pkg.id}`}
              className={`sponsorship__package ${pkg.highlight ? 'sponsorship__package--highlight' : 'glass-card'} reveal delay-${(i + 1) * 100}`}
            >
              {pkg.highlight && (
                <div className="sponsorship__package-badge">Most Impactful</div>
              )}
              <div className="sponsorship__package-tier">{pkg.tier}</div>
              <div className="sponsorship__package-price">
                <span className="sponsorship__package-amount">{pkg.price}</span>
                <span className="sponsorship__package-period">{pkg.period}</span>
              </div>
              <ul className="sponsorship__package-includes">
                {pkg.includes.map((item) => (
                  <li key={item} className="sponsorship__package-item">
                    <span className="sponsorship__package-bullet" aria-hidden="true">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton
                id={`sponsorship-cta-${pkg.id}`}
                variant={pkg.highlight ? 'primary' : 'outline'}
                href="mailto:sponsorships@mallofamerica.com"
                className="sponsorship__package-cta"
              >
                Get Proposal
              </CTAButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
