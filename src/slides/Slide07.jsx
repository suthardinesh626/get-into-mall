import React from 'react';
import eventImg from '../image/Summer_Concert_Series_Finale.png'; 

export default function Slide07() {
  return (
    <div className="slide-content" style={{ padding: 0, display: 'flex' }}>
       <div style={{ flex: 1.4, background: '#000', position: 'relative' }}>
          <img src={eventImg} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} alt="Event scale" />
          <div className="slide-overlay" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0) 40%, #0A0A0A 100%)' }} />
       </div>
       <div style={{ flex: 1, padding: '5vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--color-black)' }}>
          <h2 className="display-title">A Stage.<br/>An Audience.<br/>A <span className="text-gold">Platform.</span></h2>
          <p className="body-text" style={{ marginBottom: '3.5rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem' }}>Why spend millions driving attendees to a remote convention center when you can host your event in front of 40 million people who are already here?</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
             <div>
                <div className="mono-stat">300+</div>
                <div style={{ color: 'var(--color-gold)', fontWeight: 600, marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Events Hosted Annually</div>
             </div>
             <div>
                <div className="mono-stat">15+</div>
                <div style={{ color: 'var(--color-gold)', fontWeight: 600, marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fortune 500 Network</div>
                <p style={{ fontSize: '0.95rem', color: '#aaa', marginTop: '6px' }}>Corporate HQs within a 30-minute radius.</p>
             </div>
             <div className="glass" style={{ padding: '1.5rem 2rem', marginTop: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.5 }}><strong style={{color: '#fff', display: 'block', marginBottom: '8px', letterSpacing: '0.05em'}}>TYPES OF EVENTS:</strong> Concerts, Celebrity Book Signings, Product Drops, Brand Activations.</p>
             </div>
          </div>
       </div>
    </div>
  );
}
