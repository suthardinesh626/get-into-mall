// src/sections/EventsPart2.jsx
import React, { useState } from 'react';
import CTAButton from '../components/CTAButton';
import './Events.css';

import imgAcousticWeekend from '../image/Acoustic_Weekend.png';
import imgFordBroncoPreview from '../image/Ford_Bronco_Preview.png';
import imgFortune500QuarterlyGala from '../image/Fortune_500_Quarterly_Gala.png';
import imgLegoMasterBuild from '../image/Lego_Master_Build.png';
import imgSamsungGalaxyLaunch from '../image/Samsung_Galaxy_Launch.png';
import imgSummerConcertSeriesFinale from '../image/Summer_Concert_Series_Finale.png';

const PAST_EVENTS = [
  { id: 1, type: 'CONCERTS', title: 'Summer Concert Series', img: imgSummerConcertSeriesFinale },
  { id: 2, type: 'BRAND ACTIVATIONS', title: 'Samsung Galaxy Launch', img: imgSamsungGalaxyLaunch },
  { id: 3, type: 'CORPORATE', title: 'Quarterly Gala', img: imgFortune500QuarterlyGala },
];
const HQ_LOGOS = ['Target', 'Best Buy', 'General Mills', '3M', 'US Bancorp', 'Medtronic'];

export default function EventsPart2() {
  const [filter, setFilter] = useState('ALL');
  const filteredEvents = filter === 'ALL' ? PAST_EVENTS : PAST_EVENTS.filter(e => e.type === filter);

  return (
    <section id="events2" className="section events" style={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: '4rem' }}>
      <div className="section-inner" style={{ flex: '1', display: 'flex', flexDirection: 'column', padding: '0 2rem' }}>
        
        <div className="events__gallery reveal" style={{ flex: 1, minHeight: 0 }}>
          <div className="events__tabs" style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {['ALL', 'CONCERTS', 'BRAND ACTIVATIONS', 'CORPORATE'].map(tab => (
              <button key={tab} className={`events__tab ${filter === tab ? 'events__tab--active' : ''}`} onClick={() => setFilter(tab)}>
                {tab}
              </button>
            ))}
          </div>
          <div className="events__gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', display: 'grid', gap: '2rem' }}>
            {filteredEvents.slice(0, 3).map(ev => (
              <div key={ev.id} className="events__gallery-card" style={{ height: 'auto', display: 'flex', flexDirection: 'column' }}>
                <div className="events__gallery-img-wrapper" style={{ height: '220px' }}><img src={ev.img} alt={ev.title} className="events__gallery-img" /></div>
                <div className="events__gallery-info" style={{ padding: '1.5rem' }}>
                  <span className="events__gallery-type" style={{ fontSize: '0.85rem' }}>{ev.type}</span>
                  <h4 className="events__gallery-title" style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>{ev.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="events__corporate glass-card reveal delay-200" style={{ margin: '2rem 0', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="events__corp-label text-gold" style={{ fontSize: '1.2rem' }}>Fortune 500 Headquarters Within 30 Minutes:</span>
          <div className="events__corp-logos" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', margin: '1.5rem 0' }}>
            {HQ_LOGOS.map((logo, i) => <span key={i} className="events__corp-logo" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{logo}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
