// src/sections/SponsorshipPart2.jsx
import React from 'react';
import './Sponsorship.css';

import imgMajorAutoBrand from '../image/Major_Auto_Brand.png';
import imgGlobalTechCompany from '../image/Global_Tech_Company.png';
import imgFashionWeekPopUp from '../image/Fashion_Week_Pop-Up.png';

const GALLERY = [
  { brand: 'Major Auto Brand', desc: 'New Model Launch in the Rotunda', stats: '15,000 leads generated in 3 days', img: imgMajorAutoBrand },
  { brand: 'Global Tech Company', desc: 'Interactive Product Experience, 6 Weeks', stats: '2.5M impressions, 400K interactions', img: imgGlobalTechCompany },
  { brand: 'Fashion Week Pop-Up', desc: '4-Week Limited Run', stats: '200% Target Foot Traffic Achieved', img: imgFashionWeekPopUp }
];

export default function SponsorshipPart2() {
  return (
    <section id="sponsors2" className="section spons" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className="section-inner spons__gallery-wrap reveal" style={{ width: '100%', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
           <h2 className="display-title"><span className="text-gold">Sponsorship</span> Activations</h2>
           <p className="body-text">Don't just launch a product. Create a movement.</p>
        </div>
        <div className="spons__gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
          {GALLERY.map((item, i) => (
            <div key={i} className="spons__gallery-card glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', padding: 0 }}>
              <div className="spons__gallery-img-wrapper" style={{ height: '300px' }}><img src={item.img} alt={item.brand} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              <div className="spons__gallery-info" style={{ padding: '2rem' }}>
                <h4 className="spons__gallery-brand" style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>{item.brand}</h4>
                <p className="spons__gallery-desc" style={{ color: '#ccc', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{item.desc}</p>
                <div className="spons__gallery-stats" style={{ color: 'var(--color-gold)', fontWeight: 'bold', fontSize: '1.1rem' }}>{item.stats}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
