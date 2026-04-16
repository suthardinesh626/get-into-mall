import React from 'react';
import videoBg from '../video/Concert_Video_Generation.mp4';

export default function Slide01() {
  return (
    <>
      <video className="slide-bg-video" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="slide-overlay" style={{ background: 'rgba(10, 10, 10, 0.6)' }} />
      <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p style={{ letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '16px', fontWeight: 600 }}>BLOOMINGTON, MINNESOTA</p>
        <h1 className="display-title">America's <span className="text-gold">Greatest</span> Destination.</h1>
        
        <div style={{ position: 'absolute', bottom: '8vw', left: '8vw' }}>
          <div className="glass" style={{ display: 'flex', gap: '4rem', padding: '2.5rem 4rem' }}>
            <div>
              <div className="mono-stat">520+</div>
              <div style={{ marginTop: '8px', color: '#ccc' }}>Stores & Dining</div>
            </div>
            <div>
              <div className="mono-stat">40M</div>
              <div style={{ marginTop: '8px', color: '#ccc' }}>Visitors / Year</div>
            </div>
            <div>
              <div className="mono-stat">5.6M</div>
              <div style={{ marginTop: '8px', color: '#ccc' }}>Sq Ft Total Space</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
