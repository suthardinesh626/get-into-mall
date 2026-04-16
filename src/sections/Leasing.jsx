import { useState } from 'react';
import CTAButton from '../components/CTAButton';
import './Leasing.css';

/* ─────────────────────────────────────────────────
   LEASING SECTION
   Segment selector, dynamic content panel, contact form
   ───────────────────────────────────────────────── */

const LEASING_PATHS = [
  {
    id: 'luxury',
    title: 'LUXURY & PREMIUM',
    desc: '50+ luxury brands, curated environment',
    stats: [
      { label: 'Avg Lease', value: '2,000–8,000 sq ft' },
      { label: 'Customer Profile', value: 'HHI $150K+' },
      { label: 'Opportunity', value: '3 spaces available' }
    ],
    cta: 'Request Luxury Leas'
  },
  {
    id: 'retail',
    title: 'RETAIL & FLAGSHIP',
    desc: 'Prime floor positions across 3 levels',
    stats: [
      { label: 'Avg Lease', value: '1,500–15,000 sq ft' },
      { label: 'Ecosystem', value: '520+ existing tenants creating halo effect' },
      { label: 'Opportunity', value: '12 spaces available' }
    ],
    cta: 'View Available Spaces'
  },
  {
    id: 'fb',
    title: 'FOOD & BEVERAGE',
    desc: 'North Garden food hall and restaurant row',
    stats: [
      { label: 'Avg Lease', value: '400–4,000 sq ft' },
      { label: 'Audience', value: 'Captive dining audience — 40M annual visitors' },
      { label: 'Opportunity', value: '8 spaces available' }
    ],
    cta: 'F&B Opportunities'
  },
  {
    id: 'flex',
    title: 'POP-UP & FLEX',
    desc: '30-day to 6-month flexible formats',
    stats: [
      { label: 'Formats', value: 'Kiosk, inline, or temporary installation' },
      { label: 'Benefits', value: 'Test your concept before committing to permanent lease' },
      { label: 'Opportunity', value: '15+ positions available' }
    ],
    cta: 'Apply for Program'
  }
];

export default function Leasing() {
  const [activeTab, setActiveTab] = useState(LEASING_PATHS[0].id);

  const activeContent = LEASING_PATHS.find(p => p.id === activeTab);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In a real app this would post the data to a server
    alert("Form submitted successfully! Our team will contact you within 24 hours.");
    e.target.reset();
  };

  return (
    <section id="leasing" className="section leasing">
      
      {/* <div className="section-inner">
        <div className="leasing__header reveal">
          <span className="gold-label">Leasing Opportunities</span>
          <h2 className="leasing__headline">
            Find Your Place<br/>
            <span className="text-gold">At The Center.</span>
          </h2>
        </div>
      </div> */}

      <div className="leasing__layout section-inner">
        
        {/* ── 1. Left: Dynamic Leasing Paths ── */}
        <div className="leasing__content-col reveal delay-200">
          
          {/* Segment Selector Tabs */}
          <div className="leasing__tabs" role="tablist">
            {LEASING_PATHS.map(path => (
              <button
                key={path.id}
                role="tab"
                aria-selected={activeTab === path.id}
                className={`leasing__tab ${activeTab === path.id ? 'leasing__tab--active' : ''}`}
                onClick={() => setActiveTab(path.id)}
              >
                {path.title}
              </button>
            ))}
          </div>

          {/* Dynamic Content Panel */}
          <div className="leasing__panel glass-card">
            
            <h3 className="leasing__panel-title text-gold">{activeContent.title}</h3>
            <p className="leasing__panel-desc">{activeContent.desc}</p>
            
            <div className="leasing__panel-stats">
              {activeContent.stats.map((stat, i) => (
                <div key={i} className="leasing__panel-stat">
                  <span className="leasing__stat-icon" aria-hidden="true">✔</span>
                  <div>
                    <span className="leasing__stat-label">{stat.label}: </span>
                    <span className="leasing__stat-value">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="leasing__panel-action">
               <CTAButton variant="outline" className="leasing__panel-btn">{activeContent.cta}</CTAButton>
            </div>

          </div>
        </div>

        {/* ── 2. Right: Contact Form ── */}
        <div className="leasing__form-col reveal delay-300">
          <div className="leasing__form-card">
            <h3 className="leasing__form-title">Start the Conversation</h3>
            <p className="leasing__form-sub">Inquire about availability, rates, and foot traffic data.</p>
            
            <form className="leasing__form" onSubmit={handleFormSubmit}>
              <div className="leasing__form-group">
                <input type="text" id="name" placeholder="Name" required className="leasing__input" />
              </div>
              <div className="leasing__form-row">
                <div className="leasing__form-group">
                  <input type="text" id="company" placeholder="Company Name" required className="leasing__input" />
                </div>
                <div className="leasing__form-group">
                  <input type="text" id="brand" placeholder="Brand/Category" required className="leasing__input" />
                </div>
              </div>
              <div className="leasing__form-group">
                <select id="spaceType" required className="leasing__select" defaultValue="">
                  <option value="" disabled>Select Space Type...</option>
                  <option value="luxury">Luxury & Premium</option>
                  <option value="retail">Standard Retail / Flagship</option>
                  <option value="fb">Food & Beverage / Restaurant</option>
                  <option value="flex">Pop-Up / Flexible / Kiosk</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
              <div className="leasing__form-group">
                <textarea id="message" placeholder="Message or specific requirements" rows="4" className="leasing__input leasing__textarea" required></textarea>
              </div>
              
              <button type="submit" className="leasing__submit-btn">
                START THE CONVERSATION
              </button>
              
              <p className="leasing__form-note">
                Our leasing team responds within 24 hours.
              </p>
            </form>
          </div>
        </div>

      </div>

    </section>
  );
}
