import { useEffect, useRef, useState } from 'react';
import VideoBackground from '../components/VideoBackground';
import StatCounter from '../components/StatCounter';
import CTAButton from '../components/CTAButton';
import './Hero.css';

/* ──────────────────────────────────────────────────────────────
   HERO — Cinematic opening section
   
   Layer 1 (z:0): YouTube video background (VideoBackground.jsx)
   Layer 2 (z:1): Gradient overlay (inside VideoBackground)
   Layer 3 (z:10): Text content
   ────────────────────────────────────────────────────────────── */

const YOUTUBE_SRC = 'https://www.youtube.com/embed/4DP_xdsgtGo';

const STATS = [
  { value: 520,    suffix: '+',             label: 'Stores & Dining' },
  { value: 40,     suffix: 'M',             label: 'Visitors / Year' },
  { value: 5.6,    suffix: 'M SQ FT',       label: 'Total Space',    decimals: 1 },
];

// Stagger sequence for the headline lines
const LINES = [
  { text: 'BLOOMINGTON, MINNESOTA', className: 'hero2__eyebrow', delay: 300 },
  { text: "America's",              className: 'hero2__line hero2__line--white',  delay: 600  },
  { text: 'Greatest',               className: 'hero2__line hero2__line--gold',   delay: 850  },
  { text: 'Destination.',           className: 'hero2__line hero2__line--white',  delay: 1100 },
];

export default function Hero() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [linesVisible, setLinesVisible] = useState(
    LINES.map(() => false)
  );
  const lineTimers = useRef([]);

  /* ── On mount: fade in hero, then stagger text lines ── */
  useEffect(() => {
    // Hero fade-in
    const heroTimer = setTimeout(() => setHeroVisible(true), 80);

    // Stagger each headline line
    LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setLinesVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, line.delay + 300); // extra 300ms after initial hero fade
      lineTimers.current.push(t);
    });

    return () => {
      clearTimeout(heroTimer);
      lineTimers.current.forEach(clearTimeout);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className={`section hero2 ${heroVisible ? 'hero2--visible' : ''}`}
      aria-label="Mall of America — hero"
    >
      {/* ── Layer 1 + 2: video background + overlay ── */}
      <VideoBackground
        src={YOUTUBE_SRC}
        overlayOpacity={0.60}
        gradientOverlay
      />

      {/* ── Layer 3: Content ── */}
      <div className="hero2__content" role="main">

        {/* Headline block */}
        <div className="hero2__headline-block">
          {LINES.map((line, i) => (
            <div
              key={i}
              className={`${line.className} hero2__animate ${linesVisible[i] ? 'hero2__animate--in' : ''}`}
              aria-label={line.text}
            >
              {line.text}
            </div>
          ))}
        </div>

        {/* Gold rule */}
        <div
          className={`hero2__rule hero2__animate ${linesVisible[3] ? 'hero2__animate--in' : ''}`}
          style={{ transitionDelay: '0.2s' }}
          aria-hidden="true"
        />

        {/* Stats row */}
        <div
          className={`hero2__stats hero2__animate ${linesVisible[3] ? 'hero2__animate--in' : ''}`}
          style={{ transitionDelay: '0.35s' }}
          role="list"
          aria-label="Mall of America key statistics"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="hero2__stat-item" role="listitem">
              {i > 0 && <span className="hero2__stat-sep" aria-hidden="true">|</span>}
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                decimals={stat.decimals || 0}
                duration={2400}
              />
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className={`hero2__actions hero2__animate ${linesVisible[3] ? 'hero2__animate--in' : ''}`}
          style={{ transitionDelay: '0.55s' }}
        >
          <CTAButton
            id="hero-cta-explore"
            variant="primary"
            onClick={() => scrollTo('why-moa')}
            icon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            Explore the Property
          </CTAButton>

          <CTAButton
            id="hero-cta-leasing"
            variant="outline"
            href="mailto:leasing@mallofamerica.com"
          >
            Contact Leasing
          </CTAButton>
        </div>

        {/* Audience selector pills */}
        <div
          className={`hero2__audience hero2__animate ${linesVisible[3] ? 'hero2__animate--in' : ''}`}
          style={{ transitionDelay: '0.75s' }}
          aria-label="Select your role to explore relevant content"
        >
          <span className="hero2__audience-label">I'm a</span>
          {[
            { id: 'retail',   label: 'Retail Tenant',    anchor: 'retail'   },
            { id: 'sponsor',  label: 'Sponsor',          anchor: 'partners' },
            { id: 'events',   label: 'Event Organizer',  anchor: 'events'   },
          ].map((item, i, arr) => (
            <span key={item.id} className="hero2__audience-group">
              <button
                id={`hero-audience-${item.id}`}
                className="hero2__audience-btn"
                onClick={() => scrollTo(item.anchor)}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
              {i < arr.length - 1 && (
                <span className="hero2__audience-sep" aria-hidden="true">·</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── Bouncing scroll chevron ── */}
      <button
        className="hero2__scroll-btn"
        onClick={() => scrollTo('why-moa')}
        aria-label="Scroll to next section"
        tabIndex={0}
      >
        <span className="hero2__scroll-icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="hero2__scroll-label">Scroll</span>
      </button>

      {/* Gold corner frames */}
      <div className="hero2__corner hero2__corner--tl" aria-hidden="true"/>
      <div className="hero2__corner hero2__corner--tr" aria-hidden="true"/>
      <div className="hero2__corner hero2__corner--bl" aria-hidden="true"/>
      <div className="hero2__corner hero2__corner--br" aria-hidden="true"/>
    </section>
  );
}
