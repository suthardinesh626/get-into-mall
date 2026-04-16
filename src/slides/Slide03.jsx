import React from 'react';
import retailImg from '../image/Fashion_Week_Pop-Up.png'; // Need generic image import

export default function Slide03() {
  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', padding: 0, height: '100%' }}>
      <div style={{ flex: 2, position: 'relative', overflow: 'hidden', background: '#222' }}>
        <div className="slide-overlay" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, rgba(10,10,10,1) 100%)', zIndex: 2 }} />
        <div style={{ position: 'absolute', bottom: '2rem', left: '8vw', zIndex: 10 }}>
          <h2 className="display-title" style={{ margin: 0 }}>The Ultimate <span className="text-gold">Retail Stage.</span></h2>
          <p className="body-text" style={{ maxWidth: '800px', marginBottom: 0 }}>From experimental pop-ups to multi-level international flagships, our dynamic footprint accommodates brands at every stage of their physical retail journey.</p>
        </div>
      </div>
      <div style={{ flex: 1, padding: '3rem 8vw', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', background: '#0A0A0A' }}>
        <div className="glass" style={{ padding: '2.5rem' }}>
          <h3 style={{ color: 'var(--color-gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>The Pop-Up</h3>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.7 }}>UNDER 2,000 SF</p>
          <p className="body-text" style={{ fontSize: '1rem' }}>Low-barrier, high-impact experiential pods designed for rapid launches.</p>
        </div>
        <div className="glass" style={{ padding: '2.5rem' }}>
          <h3 style={{ color: 'var(--color-gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>The Standard</h3>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.7 }}>2,000 - 10,000 SF</p>
          <p className="body-text" style={{ fontSize: '1rem' }}>High-visibility corridors with customizable frontage.</p>
        </div>
        <div className="glass" style={{ padding: '2.5rem', border: '1px solid var(--color-gold)' }}>
          <h3 style={{ color: 'var(--color-gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>The Flagship</h3>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.7 }}>10,000+ SF</p>
          <p className="body-text" style={{ fontSize: '1rem' }}>Multi-level anchor positions for immersive brand world-building.</p>
        </div>
      </div>
    </div>
  );
}
