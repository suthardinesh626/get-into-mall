// src/sections/WhyMOAPart2.jsx
import React from 'react';
import './WhyMOA.css';

export default function WhyMOAPart2() {
  return (
    <section id="why-moa-2" className="section wmoa flex-center" style={{ height: '100%', position: 'relative' }}>
      <div className="wmoa__bg" aria-hidden="true">
        <div className="wmoa__bg-glow" />
      </div>
      
      {/* ── Regional reach visualization ── */}
      <div className="wmoa__reach section-inner" style={{ paddingTop: '5%' }}>
        {/* CSS-only concentric rings */}
        <div className="wmoa__map" aria-label="Regional reach visualization">
          {/* Rings */}
          <div className="wmoa__ring wmoa__ring--outer" aria-hidden="true">
            <span className="wmoa__ring-label wmoa__ring-label--outer">NATIONAL</span>
          </div>
          <div className="wmoa__ring wmoa__ring--mid" aria-hidden="true">
            <span className="wmoa__ring-label wmoa__ring-label--mid">REGIONAL<br/><small>4-hr drive</small></span>
          </div>
          <div className="wmoa__ring wmoa__ring--inner" aria-hidden="true">
            <span className="wmoa__ring-label wmoa__ring-label--inner">LOCAL</span>
          </div>
          {/* Center pin */}
          <div className="wmoa__pin" aria-hidden="true">
            <div className="wmoa__pin-dot" />
            <div className="wmoa__pin-pulse" />
            <div className="wmoa__pin-pulse wmoa__pin-pulse--2" />
          </div>
        </div>

        {/* Copy beside the map */}
        <div className="wmoa__reach-copy reveal">
          <span className="gold-label">Regional Gravity</span>
          <h3 className="wmoa__reach-headline">
            40% of the U.S. population<br />
            lives within a{' '}
            <span className="text-gold">500-mile radius.</span>
          </h3>
          <p className="wmoa__reach-body body-lg" style={{ marginBottom: '2rem' }}>
            The Upper Midwest is one of the most densely connected drive-markets in
            North America. MOA sits at the center — reachable from Chicago, Milwaukee,
            Kansas City, and beyond in a single tank of gas.
          </p>

          <div className="wmoa__reach-stats">
            {[
              { num: '60%', desc: 'of visitors traveled 150+ miles specifically to visit MOA' },
              { num: '13',  desc: 'states within a 4-hour drive radius' },
              { num: '30',  desc: 'minutes from MSP International Airport' },
            ].map((s) => (
              <div key={s.num} className="wmoa__reach-stat" style={{ marginBottom: '1.5rem' }}>
                <span className="wmoa__reach-stat-num" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-mono)', fontWeight: 'bold', color: 'var(--color-gold)', display: 'block', marginBottom: '0.2rem' }}>{s.num}</span>
                <span className="wmoa__reach-stat-desc" style={{ fontSize: '1.1rem', color: '#ccc' }}>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
