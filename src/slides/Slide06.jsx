import React from 'react';
import videoBg from '../video/Concert_Video_Generation.mp4'; 

export default function Slide06() {
  return (
    <>
      <video className="slide-bg-video" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="slide-overlay" style={{ background: 'linear-gradient(to top, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.5) 100%)' }} />
      <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h2 className="display-title" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>Engineered for the <br/><span className="text-gold">Experience Economy.</span></h2>
        <div className="glass" style={{ maxWidth: '850px', marginTop: '3rem', padding: '3.5rem', background: 'rgba(10,10,10,0.6)' }}>
           <p className="body-text" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', lineHeight: '1.7' }}>Traditional retail struggles because it lacks gravity. Our 7-acre indoor theme park, world-class aquarium, and immersive VR arenas guarantee a baseline of daily foot traffic that no standalone retailer could ever generate alone.</p>
           <div style={{ borderTop: '1px solid var(--color-gold)', paddingTop: '1.5rem' }}>
              <p style={{ color: 'var(--color-gold)', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Outcome: You don't pay to acquire foot traffic; you convert traffic that is already having the time of their lives.</p>
           </div>
        </div>
      </div>
    </>
  );
}
