import React from 'react';

export default function Slide08() {
  return (
    <div className="slide-content" style={{ background: 'var(--color-charcoal)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
       <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="display-title">Purpose-Built for <span className="text-gold">Scale.</span></h2>
       </div>
       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', padding: '0 4vw' }}>
          <div className="glass" style={{ padding: '4rem 3rem', borderTop: '4px solid var(--color-gold)' }}>
             <p style={{ color: 'var(--color-gold)', letterSpacing: '0.1em', marginBottom: '1.5rem', fontWeight: 600 }}>PERFORMING ARTS CENTER</p>
             <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '2rem' }}>The Grand Theater</h3>
             <div className="mono-stat" style={{ fontSize: '1.5rem', marginBottom: '2.5rem', color: '#fff' }}>2,500 <span style={{fontSize:'1rem', color:'#888', fontWeight: 400}}>SEATS</span></div>
             <ul style={{ listStyle: 'none', color: '#ccc', lineHeight: 2.2, fontSize: '1.1rem' }}>
               <li><span style={{color: 'var(--color-gold)', marginRight: '12px'}}>✦</span> State-of-the-art acoustics</li>
               <li><span style={{color: 'var(--color-gold)', marginRight: '12px'}}>✦</span> Full fly loft & orchestra pit</li>
               <li><span style={{color: 'var(--color-gold)', marginRight: '12px'}}>✦</span> VIP lounge & green rooms</li>
               <li><span style={{color: 'var(--color-gold)', marginRight: '12px'}}>✦</span> 4K Projection</li>
             </ul>
             <div style={{ marginTop: '3rem', padding: '1rem', background: 'rgba(201,168,76,0.1)', borderRadius: '6px' }}>
                <p style={{ fontWeight: 600, color: 'var(--color-gold)', fontSize: '0.95rem' }}>BEST FOR: Touring shows and corporate keynotes.</p>
             </div>
          </div>
          
          <div className="glass" style={{ padding: '4rem 3rem', borderTop: '4px solid var(--color-gold)' }}>
             <p style={{ color: 'var(--color-gold)', letterSpacing: '0.1em', marginBottom: '1.5rem', fontWeight: 600 }}>EXPO HALL</p>
             <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '2rem' }}>North Exhibition Center</h3>
             <div className="mono-stat" style={{ fontSize: '1.5rem', marginBottom: '2.5rem', color: '#fff' }}>100,000 <span style={{fontSize:'1rem', color:'#888', fontWeight: 400}}>SQ FT (COLUMN-FREE)</span></div>
             <ul style={{ listStyle: 'none', color: '#ccc', lineHeight: 2.2, fontSize: '1.1rem' }}>
               <li><span style={{color: 'var(--color-gold)', marginRight: '12px'}}>✦</span> Divisible into 3 independent halls</li>
               <li><span style={{color: 'var(--color-gold)', marginRight: '12px'}}>✦</span> Dedicated fiber internet</li>
               <li><span style={{color: 'var(--color-gold)', marginRight: '12px'}}>✦</span> Direct access to 10 loading docks</li>
               <li><span style={{color: 'var(--color-gold)', marginRight: '12px'}}>✦</span> High ceiling rigging grid</li>
             </ul>
             <div style={{ marginTop: '3rem', padding: '1rem', background: 'rgba(201,168,76,0.1)', borderRadius: '6px' }}>
                <p style={{ fontWeight: 600, color: 'var(--color-gold)', fontSize: '0.95rem' }}>BEST FOR: Trade shows and large-scale conventions.</p>
             </div>
          </div>
       </div>
    </div>
  );
}
