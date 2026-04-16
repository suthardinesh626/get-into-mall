import React from 'react';

export default function Slide02() {
  return (
    <div className="slide-content" style={{ display: 'flex', alignItems: 'center', background: 'var(--color-charcoal)' }}>
      <div style={{ flex: 1, paddingRight: '4rem', display: 'flex', justifyContent: 'center' }}>
        <div className="glass" style={{ width: '100%', maxWidth: '500px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a' }}>
           <div style={{ position: 'relative', width: '300px', height: '300px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', width: '20px', height: '20px', background: 'var(--color-gold)', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 50px 20px rgba(201, 168, 76, 0.4)' }} />
              <p style={{ textAlign: 'center', marginTop: '320px', color: 'var(--color-gold)', letterSpacing: '0.1em' }}>GLOBAL ACCESS POINT</p>
           </div>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h2 className="display-title">Not Just a Mall.<br/>A <span className="text-gold">Global Ecosystem.</span></h2>
        <p className="body-text">Mall of America transcends traditional retail. It is a fully contained micro-city and international tourist destination. When you build here, you don't just tap into local foot traffic; you access a captive global audience that stays longer, spends more, and arrives with high purchase intent.</p>
        <ul style={{ listStyle: 'none', marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
          <li><strong className="text-gold" style={{ display: 'block', fontSize: '1.2rem', marginBottom: '4px' }}>Unmatched Access:</strong> 10 minutes from MSP International Airport.</li>
          <li><strong className="text-gold" style={{ display: 'block', fontSize: '1.2rem', marginBottom: '4px' }}>Extended Dwell Time:</strong> Average visitor stays 2.5X longer than traditional retail centers.</li>
          <li><strong className="text-gold" style={{ display: 'block', fontSize: '1.2rem', marginBottom: '4px' }}>Built-In Hospitality:</strong> Direct connection to 4-star luxury transit hotels.</li>
        </ul>
      </div>
    </div>
  );
}
