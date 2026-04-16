// src/sections/SponsorshipPart1.jsx
import React from 'react';
import './Sponsorship.css';

const TIERS = [
  { 
    id: 'presenting', 
    title: 'PRESENTING PARTNER', 
    tagline: 'The highest visibility position', 
    bullets: ['Logo on all property signage', '52-week rotunda activation rights', 'Digital display network exclusivity'] 
  },
  { 
    id: 'activation', 
    title: 'ACTIVATION PARTNER', 
    tagline: 'Own a moment, own a season', 
    bullets: ['Dedicated activation space 4-12 weeks', 'Co-branded content production', 'Access to targeted audience data'] 
  },
  { 
    id: 'media', 
    title: 'MEDIA PARTNER', 
    tagline: 'Reach 40M without the overhead', 
    bullets: ['Advertising across digital LED network', 'Sponsored content in mall publications', 'Email list co-marketing'] 
  }
];

export default function SponsorshipPart1() {
  return (
    <section id="sponsors1" className="section spons" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '8%', paddingBottom: '8%' }}>
      <div className="spons__header reveal" style={{ textAlign: 'center', marginBottom: '6%' }}>
        <span className="gold-label">Corporate Sponsorships</span>
        <h2 className="spons__headline" style={{ fontSize: '4rem', marginBottom: '1%' }}>
          Not Just Billboard Space. <br/><span className="text-gold">Brand Immersion.</span>
        </h2>
      </div>
      
      <div className="section-inner" style={{ flex: 1, padding: '0 4vw' }}>
        <div className="spons__tiers-grid reveal delay-200" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', height: '100%' }}>
          {TIERS.map((tier) => (
            <div key={tier.id} className="spons__tier-card glass-card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 className="spons__tier-title text-gold" style={{ fontSize: '1.6rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>{tier.title}</h3>
              <p className="spons__tier-tagline" style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem', fontStyle: 'italic' }}>{tier.tagline}</p>
              
              <ul className="spons__tier-list" style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, fontSize: '1.1rem', lineHeight: '1.8' }}>
                {tier.bullets.map((bullet, i) => (
                  <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-gold)', marginRight: '12px', lineHeight: '1', fontSize: '1.2rem' }}>✦</span>
                    <span style={{ color: '#fff' }}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
