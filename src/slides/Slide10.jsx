import React from 'react';

export default function Slide10() {
  return (
    <div className="slide-content" style={{ display: 'flex', padding: 0 }}>
       <div style={{ flex: 1, background: 'var(--color-charcoal)', padding: '6vw', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="display-title" style={{ fontSize: '5rem' }}><span className="text-gold">Claim</span> <br/>Your Space.</h2>
          <p className="body-text" style={{ fontSize: '1.3rem', marginBottom: '5rem', lineHeight: 1.6 }}>The world's biggest brands are scaling their footprints. Don't be left out of the ecosystem.</p>
          <div className="glass" style={{ padding: '3.5rem', border: '1px solid var(--color-gold)', background: 'rgba(201,168,76,0.05)' }}>
             <div className="mono-stat" style={{ fontSize: '5rem', color: 'var(--color-gold)', lineHeight: 1 }}>98%</div>
             <p style={{ color: '#fff', fontSize: '1.2rem', marginTop: '1rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Occupancy Rate across Premium Corridors</p>
          </div>
       </div>
       <div style={{ flex: 1, background: 'var(--color-black)', padding: '6vw', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="glass" style={{ maxWidth: '600px', width: '100%', margin: '0 auto', padding: '4rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-gold)' }}>Digital Intake</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               <input type="text" placeholder="Brand / Agency Name" style={{ width: '100%', padding: '1.2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '4px', fontSize: '1.1rem', outline: 'none' }} />
               <select style={{ width: '100%', padding: '1.2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '4px', fontSize: '1.1rem', appearance: 'none', outline: 'none' }}>
                  <option value="" disabled selected>Select Partnership Type...</option>
                  <option style={{color:'#000'}} value="retail">Retail Lease (Flagship / Concept)</option>
                  <option style={{color:'#000'}} value="sponsorship">Corporate Sponsorship</option>
                  <option style={{color:'#000'}} value="event">Event Space Booking</option>
               </select>
               <input type="text" placeholder="Desired Imprint / Sq Ft (Optional)" style={{ width: '100%', padding: '1.2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '4px', fontSize: '1.1rem', outline: 'none' }} />
               <button type="button" className="btn-primary" style={{ marginTop: '2.5rem', padding: '1.2rem', fontSize: '1.1rem', letterSpacing: '0.1em' }}>REQUEST A PROPOSAL</button>
            </form>
          </div>
       </div>
    </div>
  );
}
