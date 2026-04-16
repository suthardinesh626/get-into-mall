import React from 'react';

export default function Slide09() {
   return (
      <div className="slide-content" style={{ background: 'var(--color-black)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
         <h2 className="display-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Not Just Billboard Space. 
            <br />
         <span className="text-gold">Deep Brand Immersion.</span>
         </h2>

         <div style={{ display: 'flex', gap: '3rem', marginBottom: '4rem', padding: '0 4vw' }}>
            <div className="glass" style={{ flex: 1, padding: '3rem' }}>
               <h4 style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', fontSize: '1.1rem', letterSpacing: '0.1em' }}>INTENT</h4>
               <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem' }}>
                  <div className="mono-stat" style={{ fontSize: '4rem', lineHeight: 1 }}>73%</div>
                  <div style={{ color: '#ccc', paddingBottom: '0.5rem', fontSize: '1.1rem' }}>arrive planning to make a purchase.</div>
               </div>
               <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', marginTop: '2rem', borderRadius: '3px' }}>
                  <div style={{ width: '73%', height: '100%', background: 'var(--color-gold)', borderRadius: '3px' }} />
               </div>
            </div>
            <div className="glass" style={{ flex: 1, padding: '3rem' }}>
               <h4 style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', fontSize: '1.1rem', letterSpacing: '0.1em' }}>INCOME</h4>
               <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem' }}>
                  <div className="mono-stat" style={{ fontSize: '4rem', lineHeight: 1 }}>35%</div>
                  <div style={{ color: '#ccc', paddingBottom: '0.5rem', fontSize: '1.1rem' }}>of households earn $75k+.</div>
               </div>
               <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', marginTop: '2rem', borderRadius: '3px' }}>
                  <div style={{ width: '35%', height: '100%', background: 'var(--color-gold)', borderRadius: '3px' }} />
               </div>
            </div>
         </div>

         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', padding: '0 4vw' }}>
            <div className="glass" style={{ padding: '2.5rem', border: '1px solid rgba(201,168,76,0.6)', background: 'rgba(201,168,76,0.05)' }}>
               <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>Presenting Partner</h3>
               <p className="body-text" style={{ fontSize: '1rem', color: 'var(--color-gold)' }}>Total takeover.</p>
               <ul style={{ color: '#ccc', fontSize: '1rem', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li>52-week rotunda rights</li>
                  <li>400+ screen display network exclusivity</li>
               </ul>
            </div>
            <div className="glass" style={{ padding: '2.5rem' }}>
               <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>Activation Partner</h3>
               <p className="body-text" style={{ fontSize: '1rem', color: 'var(--color-gold)' }}>Own a season.</p>
               <ul style={{ color: '#ccc', fontSize: '1rem', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li>4-12 week dedicated pop-up footprints</li>
                  <li>Co-branded content & event rights</li>
               </ul>
            </div>
            <div className="glass" style={{ padding: '2.5rem' }}>
               <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>Media Partner</h3>
               <p className="body-text" style={{ fontSize: '1rem', color: 'var(--color-gold)' }}>Unmatched reach.</p>
               <ul style={{ color: '#ccc', fontSize: '1rem', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li>Advertising across digital LED network</li>
                  <li>1.2M+ email subscriber list access</li>
               </ul>
            </div>
         </div>
      </div>
   );
}
