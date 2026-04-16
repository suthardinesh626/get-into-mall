// src/sections/EventsVenues.jsx
import React from 'react';
import './Events.css';

const VENUES = [
  { name: 'East Broadway Stage', capacity: '1,300 Seated', bestFor: 'Concerts · Performances · Award Shows' },
  { name: 'The Rotunda', capacity: '2,000 Standing', bestFor: 'Brand Activations · Product Launches' },
  { name: 'North Garden', capacity: '500 Seated / 1,200 Standing', bestFor: 'Corporate Events · Conventions' }
];

export default function EventsVenues() {
  return (
    <section id="events-venues" className="section events" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className="section-inner" style={{ width: '100%', padding: '0 2rem' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
          <h2 className="display-title">Venue <span className="text-gold">Spaces</span></h2>
          <p className="body-text">World-class facilities beyond the typical retail experience.</p>
        </div>

        <div className="events__venues reveal delay-200" style={{ padding: '2vh 0', marginBottom: '3rem' }}>
          <div className="events__venue-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', display: 'grid', gap: '2rem' }}>
            {VENUES.map((venue, i) => (
              <div key={i} className="events__venue-card glass-card" style={{ padding: '2.5rem' }}>
                <h3 className="events__venue-name" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{venue.name}</h3>
                <div className="events__venue-capacity" style={{ marginBottom: '1.5rem' }}>
                  <span style={{ color: '#ccc', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>Capacity</span> 
                  <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2rem' }}>{venue.capacity}</span>
                </div>
                <div className="events__venue-best">
                  <span style={{ color: '#ccc', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>Best For</span> 
                  <p style={{ fontSize: '1.1rem', color: 'var(--color-gold)', margin: 0 }}>{venue.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="events__stats reveal delay-400 glass-card" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '2rem', marginTop: '2rem' }}>
          <div className="events__stat" style={{ textAlign: 'center' }}><span className="events__stat-number" style={{ fontSize: '3.5rem', display: 'block', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>40M</span><span className="events__stat-text" style={{ fontSize: '1.1rem' }}>Captive audience per year</span></div>
          <div className="events__stat-sep" aria-hidden="true" style={{ height: '80px', width: '2px', background: 'rgba(255,255,255,0.2)' }} />
          <div className="events__stat" style={{ textAlign: 'center' }}><span className="events__stat-number" style={{ fontSize: '3.5rem', display: 'block', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>300+</span><span className="events__stat-text" style={{ fontSize: '1.1rem' }}>Events hosted annually</span></div>
          <div className="events__stat-sep" aria-hidden="true" style={{ height: '80px', width: '2px', background: 'rgba(255,255,255,0.2)' }} />
          <div className="events__stat" style={{ textAlign: 'center' }}><span className="events__stat-number" style={{ fontSize: '3.5rem', display: 'block', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>$0</span><span className="events__stat-text" style={{ fontSize: '1.1rem' }}>Marketing spend to fill the room</span></div>
        </div>

      </div>
    </section>
  );
}
