import { useState, useEffect, useRef } from 'react';
import CTAButton from '../components/CTAButton';
import './Sponsorship.css';

/* ─────────────────────────────────────────────────
   SPONSORSHIP SECTION
   Data panel (CSS bar charts), Partnership Tiers, Gallery
   ───────────────────────────────────────────────── */

const DATA_POINTS = [
  {
    category: 'Age Breakdown',
    bars: [
      { label: '18-34', percent: 38 },
      { label: '35-54', percent: 31 },
      { label: '55+', percent: 21 },
      { label: 'Under 18', percent: 10 }
    ]
  },
  {
    category: 'Gender',
    bars: [
      { label: 'Female', percent: 58 },
      { label: 'Male', percent: 42 }
    ]
  },
  {
    category: 'Household Income',
    bars: [
      { label: '$75K+', percent: 35 },
      { label: '$100K+', percent: 22 }
    ]
  },
  {
    category: 'Visit Frequency & Intent',
    bars: [
      { label: 'Visit 4+ times per year', percent: 45 },
      { label: 'Arrive planning to purchase', percent: 73 }
    ]
  }
];

const TIERS = [
  {
    id: 'presenting',
    title: 'PRESENTING PARTNER',
    tagline: 'The highest visibility position',
    bullets: [
      'Logo on all property signage',
      '52-week rotunda activation rights',
      'Digital display network (400+ screens)',
      'Social amplification (5M+ reach)',
      'Exclusivity in category'
    ],
    cta: 'Inquire Presenting'
  },
  {
    id: 'activation',
    title: 'ACTIVATION PARTNER',
    tagline: 'Own a moment, own a season',
    bullets: [
      'Dedicated activation space 4-12 weeks',
      'Co-branded content production',
      'In-mall event hosting rights',
      'Targeted audience data access'
    ],
    cta: 'Plan Your Activation'
  },
  {
    id: 'media',
    title: 'MEDIA PARTNER',
    tagline: 'Reach 40M without the overhead',
    bullets: [
      'Digital display network access',
      'Sponsored content in mall publications',
      'Email list co-marketing (1.2M subscribers)'
    ],
    cta: 'Explore Media Options'
  }
];

import imgMajorAutoBrand from '../image/Major_Auto_Brand.png';
import imgGlobalTechCompany from '../image/Global_Tech_Company.png';
import imgFashionWeekPopUp from '../image/Fashion_Week_Pop-Up.png';

const GALLERY = [
  {
    brand: 'Major Auto Brand',
    desc: 'New Model Launch in the Rotunda',
    stats: '15,000 leads generated in 3 days',
    img: imgMajorAutoBrand
  },
  {
    brand: 'Global Tech Company',
    desc: 'Interactive Product Experience, 6 Weeks',
    stats: '2.5M impressions, 400K interactions',
    img: imgGlobalTechCompany
  },
  {
    brand: 'Fashion Week Pop-Up',
    desc: '4-Week Limited Run',
    stats: '200% Target Foot Traffic Achieved',
    img: imgFashionWeekPopUp
  }
];

export default function Sponsorship() {
  const [barsAnimated, setBarsAnimated] = useState(false);
  const dataRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !barsAnimated) {
          setBarsAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (dataRef.current) observer.observe(dataRef.current);
    return () => observer.disconnect();
  }, [barsAnimated]);

  return (
    <section id="sponsors" className="section spons">
      
      <div className="section-inner">
        <div className="spons__header reveal">
          <span className="gold-label">Corporate Sponsorships</span>
          <h2 className="spons__headline">
            Not Just Billboard Space. <br/>
            <span className="text-gold">Deep Brand Immersion.</span>
          </h2>
        </div>
      </div>

      <div className="spons__layout section-inner">
        
        {/* ── 1. Audience Data Panel ── */}
        <div className="spons__data-col reveal delay-200" ref={dataRef}>
          <div className="spons__data-card glass-card">
            <h3 className="spons__data-title">Audience Demographics</h3>
            <p className="spons__data-sub">The scale of a stadium, the intent of a flagship store.</p>
            
            <div className="spons__charts">
              {DATA_POINTS.map((group, i) => (
                <div key={i} className="spons__chart-group">
                  <h4 className="spons__chart-group-title">{group.category}</h4>
                  <div className="spons__bar-list">
                    {group.bars.map((bar, j) => (
                      <div key={j} className="spons__bar-item">
                        <div className="spons__bar-labels">
                          <span className="spons__bar-label">{bar.label}</span>
                          <span className="spons__bar-value">{bar.percent}%</span>
                        </div>
                        <div className="spons__bar-bg">
                          <div 
                            className={`spons__bar-fill ${barsAnimated ? 'spons__bar-fill--animate' : ''}`}
                            style={{ '--fill-width': `${bar.percent}%` }}
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 2. Partnership Tiers ── */}
        <div className="spons__tiers-col reveal delay-300">
          <div className="spons__tiers-grid">
            {TIERS.map((tier) => (
              <div key={tier.id} className="spons__tier-card">
                <div className="spons__tier-header">
                  <h3 className="spons__tier-title text-gold">{tier.title}</h3>
                  <p className="spons__tier-tagline">{tier.tagline}</p>
                </div>
                <ul className="spons__tier-list">
                  {tier.bullets.map((bullet, i) => (
                    <li key={i} className="spons__tier-li">
                      <span className="spons__tier-bullet-icon" aria-hidden="true">✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="spons__tier-action">
                  <CTAButton variant="outline" className="spons__tier-btn">{tier.cta}</CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── 3. Activation Gallery ── */}
      <div className="section-inner spons__gallery-wrap reveal delay-400">
        <h3 className="spons__gallery-title">Past Activations</h3>
        <div className="spons__gallery">
          {GALLERY.map((item, i) => (
            <div key={i} className="spons__gallery-card glass-card">
              <div className="spons__gallery-img-wrapper" aria-hidden="true">
                <img src={item.img} alt={item.brand} className="spons__gallery-img" />
              </div>
              <div className="spons__gallery-info">
                <h4 className="spons__gallery-brand">{item.brand}</h4>
                <p className="spons__gallery-desc">{item.desc}</p>
                <div className="spons__gallery-stats">
                  {/* <span className="spons__gallery-stat-icon">📈</span> */}
                  <span className="spons__gallery-stat-text">{item.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
