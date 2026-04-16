import React from 'react';
import luxuryImg from '../image/Global_Tech_Company.png';

export default function Slide04() {
  return (
    <div className="slide-content" style={{ display: 'flex', padding: 0, background: 'radial-gradient(circle at right center, #2a2010 0%, #0A0A0A 60%)' }}>
      <div style={{ flex: 1, background: '#000', overflow: 'hidden', position: 'relative' }}>
         <img src={luxuryImg} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
         <div className="slide-overlay" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(10,10,10,1) 100%)' }} />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 8vw' }}>
         <h2 className="display-title">Elevated.<br/><span className="text-gold">Exclusive.</span><br/>Uncompromised.</h2>
         <p className="body-text" style={{ fontSize: '1.2rem' }}>A dedicated, distinct wing formulated strictly for heritage luxury houses and premium contemporary designers. Curated adjacencies ensure your brand sits exactly where it belongs.</p>
         
         <div className="glass" style={{ borderLeft: '3px solid var(--color-gold)', padding: '2rem', marginTop: '2rem', background: 'rgba(255,255,255,0.02)' }}>
            <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>The Premium Advantage</h4>
            <p style={{ margin: '1rem 0', display: 'flex', gap: '12px' }}><span style={{color: 'var(--color-gold)'}}>✦</span> Valet & VIP Concierge Access.</p>
            <p style={{ margin: '1rem 0', display: 'flex', gap: '12px' }}><span style={{color: 'var(--color-gold)'}}>✦</span> Elevated architectural finishings and acoustic dampening.</p>
            <p style={{ margin: '1rem 0', display: 'flex', gap: '12px' }}><span style={{color: 'var(--color-gold)'}}>✦</span> Private styling suites and direct-to-VIP clienteling infrastructure.</p>
         </div>
      </div>
    </div>
  );
}
