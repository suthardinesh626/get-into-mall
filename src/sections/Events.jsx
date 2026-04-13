import { useState } from 'react';
import VideoBackground from '../components/VideoBackground';
import CTAButton from '../components/CTAButton';
import './Events.css';

/* ─────────────────────────────────────────────────
   EVENTS SECTION
   Event venues, interactive filter, stats, CTA
   ───────────────────────────────────────────────── */

const VENUES = [
  {
    name: 'East Broadway Stage',
    capacity: '1,300 Seated',
    bestFor: 'Concerts · Performances · Award Shows · Brand Showcases',
    cta: 'Check Availability'
  },
  {
    name: 'The Rotunda',
    capacity: '2,000 Standing',
    bestFor: 'Brand Activations · Product Launches · Fashion Shows · Pop-Ups',
    cta: 'Plan Your Activation'
  },
  {
    name: 'North Garden',
    capacity: '500 Seated / 1,200 Standing',
    bestFor: 'Corporate Events · Conventions · Galas · Private Functions',
    cta: 'Request a Proposal'
  }
];

import imgAcousticWeekend from '../image/Acoustic_Weekend.png';
import imgFordBroncoPreview from '../image/Ford_Bronco_Preview.png';
import imgFortune500QuarterlyGala from '../image/Fortune_500_Quarterly_Gala.png';
import imgLegoMasterBuild from '../image/Lego_Master_Build.png';
import imgSamsungGalaxyLaunch from '../image/Samsung_Galaxy_Launch.png';
import imgSummerConcertSeriesFinale from '../image/Summer_Concert_Series_Finale.png';
import videoConcertGeneration from '../video/Concert_Video_Generation.mp4';

const PAST_EVENTS = [
  { id: 1, type: 'CONCERTS', title: 'Summer Concert Series Finale', desc: 'Over 1,200 attendees at East Broadway.', img: imgSummerConcertSeriesFinale },
  { id: 2, type: 'BRAND ACTIVATIONS', title: 'Samsung Galaxy Launch', desc: 'Interactive Rotunda installation.', img: imgSamsungGalaxyLaunch },
  { id: 3, type: 'CORPORATE', title: 'Fortune 500 Quarterly Gala', desc: 'Private event at North Garden.', img: imgFortune500QuarterlyGala },
  { id: 4, type: 'PRODUCT LAUNCHES', title: 'Ford Bronco Preview', desc: 'Vehicle display and interactive activation.', img: imgFordBroncoPreview },
  { id: 5, type: 'CONCERTS', title: 'Acoustic Weekend', desc: 'Intimate performance setting.', img: imgAcousticWeekend },
  { id: 6, type: 'BRAND ACTIVATIONS', title: 'Lego Master Build', desc: 'Week-long interactive pop-up.', img: imgLegoMasterBuild }
];

const HQ_LOGOS = ['Target', 'Best Buy', 'General Mills', '3M', 'US Bancorp', 'Medtronic'];

export default function Events() {
  const [filter, setFilter] = useState('ALL');

  const filteredEvents = filter === 'ALL' 
    ? PAST_EVENTS 
    : PAST_EVENTS.filter(e => e.type === filter);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="events" className="section events">
      
      {/* ── 1. Opening Visual (Video/Hero) ── */}
      <div className="events__hero">
        <VideoBackground
          src={videoConcertGeneration}
          overlayOpacity={0.7}
          gradientOverlay
        />
        <div className="events__hero-content reveal">
          <h2 className="events__headline">
            A Stage. <br />
            An Audience. <br />
            <span className="text-gold">A Platform.</span>
          </h2>
          <p className="events__subheadline body-lg">
            300+ Events Per Year. 40 Million Attendees.
          </p>
        </div>
      </div>

      <div className="events__main section-inner">
        
        {/* ── 2. Venue Cards ── */}
        <div className="events__venues reveal delay-200">
          <div className="events__venue-grid">
            {VENUES.map((venue, i) => (
              <div key={i} className="events__venue-card glass-card">
                <h3 className="events__venue-name">{venue.name}</h3>
                <div className="events__venue-capacity">
                  <span className="events__venue-cap-label">Capacity</span>
                  <span className="events__venue-cap-value">{venue.capacity}</span>
                </div>
                <div className="events__venue-best">
                  <span className="events__venue-best-label">Best For</span>
                  <p className="events__venue-best-value">{venue.bestFor}</p>
                </div>
                <div className="events__venue-action">
                  <span onClick={() => scrollTo('partners')} className="events__venue-link">{venue.cta} →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. Event Type Filter ── */}
        <div className="events__gallery reveal delay-300">
          <div className="events__tabs">
            {['ALL', 'CONCERTS', 'BRAND ACTIVATIONS', 'CORPORATE', 'PRODUCT LAUNCHES'].map(tab => (
              <button 
                key={tab}
                className={`events__tab ${filter === tab ? 'events__tab--active' : ''}`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="events__gallery-grid">
            {filteredEvents.slice(0, 6).map(ev => (
              <div key={ev.id} className="events__gallery-card">
                <div className="events__gallery-img-wrapper" aria-hidden="true">
                  <img src={ev.img} alt={ev.title} className="events__gallery-img" />
                </div>
                <div className="events__gallery-info">
                  <span className="events__gallery-type">{ev.type}</span>
                  <h4 className="events__gallery-title">{ev.title}</h4>
                  <p className="events__gallery-desc">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. Why Events Here Stats ── */}
        <div className="events__stats reveal delay-400">
          <div className="events__stat">
            <span className="events__stat-number">40M</span>
            <span className="events__stat-text">Captive audience per year</span>
          </div>
          <div className="events__stat-sep" aria-hidden="true" />
          <div className="events__stat">
            <span className="events__stat-number">300+</span>
            <span className="events__stat-text">Events hosted annually</span>
          </div>
          <div className="events__stat-sep" aria-hidden="true" />
          <div className="events__stat">
            <span className="events__stat-number">$0</span>
            <span className="events__stat-text">Marketing spend to fill the room — they're already here</span>
          </div>
        </div>

      </div>

      {/* ── 5. Booking CTA (Full Width Gold) ── */}
      <div className="events__cta-banner reveal delay-500">
        <div className="section-inner events__cta-inner">
          <div className="events__cta-text">
            <h3 className="events__cta-headline">Your Next Event Has 40 Million Built-In Attendees.</h3>
            <p className="events__cta-sub">From intimate brand activations to 1,300-seat productions.</p>
          </div>
          <div className="events__cta-actions">
             <CTAButton variant="primary" className="events__btn-dark" onClick={() => scrollTo('partners')}>BOOK A VENUE</CTAButton>
             <CTAButton variant="outline" className="events__btn-outline-dark" onClick={() => scrollTo('partners')}>DOWNLOAD EVENT KIT</CTAButton>
          </div>
        </div>
      </div>

      {/* ── 6. Corporate Neighbors Box ── */}
      <div className="events__corporate section-inner reveal delay-600">
        <div className="events__corporate-box glass-card">
          <span className="events__corp-label">Fortune 500 Headquarters Within 30 Minutes:</span>
          <div className="events__corp-logos">
            {HQ_LOGOS.map((logo, i) => (
               <span key={i} className="events__corp-logo">{logo}</span>
            ))}
          </div>
          <p className="events__corp-sub">Corporate events. Employee activations. Client entertainment. All minutes away.</p>
        </div>
      </div>

    </section>
  );
}
