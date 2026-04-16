import React from 'react';

export default function Slide05() {
  return (
    <div className="slide-content" style={{ background: 'var(--color-charcoal)', display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1.2, paddingRight: '4rem' }}>
         <h2 className="display-title">Culinary as an <span className="text-gold">Anchor.</span></h2>
         <p className="body-text" style={{ maxWidth: '600px', fontSize: '1.2rem' }}>Today’s consumer travels for taste. Food and beverage are no longer an afterthought—they are the primary driver of extended dwell time and evening foot traffic.</p>
         <div className="glass" style={{ border: '1px solid rgba(201,168,76, 0.4)', padding: '2.5rem', display: 'inline-block', marginTop: '3rem' }}>
            <div style={{ display: 'flex', gap: '4rem' }}>
               <div>
                 <div className="mono-stat">70+</div>
                 <div style={{ fontSize: '1rem', color: '#ccc', marginTop: '8px' }}>Diverse Dining Concepts</div>
               </div>
               <div>
                 <div className="mono-stat">$XX</div>
                 <div style={{ fontSize: '1rem', color: '#ccc', marginTop: '8px' }}>Avg F&B Spend / Capita</div>
               </div>
            </div>
            <div style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', gap: '16px' }}>
               <strong style={{ color: 'var(--color-gold)' }}>LATE NIGHT ECONOMY:</strong> 
               <span style={{ color: '#aaa'}}>Robust post-8 PM ecosystem driven by sit-down and experiential dining.</span>
            </div>
         </div>
      </div>
      <div style={{ flex: 1, position: 'relative', height: '70vh' }}>
         <div className="glass" style={{ position: 'absolute', top: 0, right: 0, width: '70%', height: '50%', background: 'linear-gradient(45deg, #111, #222)' }} />
         <div className="glass" style={{ position: 'absolute', bottom: '10%', left: 0, width: '60%', height: '40%', background: 'linear-gradient(45deg, #0A0A0A, #1a1a1a)', border: '1px solid var(--color-gold)' }} />
      </div>
    </div>
  );
}
