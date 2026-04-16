// src/App.jsx
import { Suspense, lazy, useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './styles/global.css'; // The original token and global definitions
import './App.css'; // Slide controller CSS

// Lazy-load all original sections
const Hero          = lazy(() => import('./sections/Hero'));
const WhyMOA        = lazy(() => import('./sections/WhyMOA'));
const WhyMOAPart2   = lazy(() => import('./sections/WhyMOAPart2'));
const Retail        = lazy(() => import('./sections/Retail'));
const Dining        = lazy(() => import('./sections/Dining'));
const Entertainment = lazy(() => import('./sections/Entertainment'));
const EventsPart1   = lazy(() => import('./sections/EventsPart1'));
const EventsVenues  = lazy(() => import('./sections/EventsVenues'));
const EventsPart2   = lazy(() => import('./sections/EventsPart2'));
const Venues        = lazy(() => import('./sections/Venues'));
const SponsorshipPart1 = lazy(() => import('./sections/SponsorshipPart1'));
const SponsorshipPart2 = lazy(() => import('./sections/SponsorshipPart2'));
const Leasing       = lazy(() => import('./sections/Leasing'));

const SLIDES = [
  Hero, WhyMOA, WhyMOAPart2, Retail, Dining, 
  Entertainment, EventsPart1, EventsVenues, EventsPart2, SponsorshipPart1, SponsorshipPart2, Leasing
];

// Fallback while section code-splits load
function SectionFallback() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 32, height: 1, background: 'var(--color-gold)', animation: 'pulse 1s ease-in-out infinite alternate', opacity: 0.4 }} />
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);

  useScrollAnimation({ threshold: 0.15, once: true });

  const totalSlides = SLIDES.length;

  const goNext = () => setCurrentSlide(p => Math.min(p + 1, totalSlides - 1));
  const goPrev = () => setCurrentSlide(p => Math.max(p - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if they are typing in an input (like the Leasing form)
      if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const updateScale = () => {
      const targetW = 1920;
      const targetH = 1080;
      const scaleW = window.innerWidth / targetW;
      const scaleH = window.innerHeight / targetH;
      setScale(Math.min(scaleW, scaleH));
    };
    window.addEventListener('resize', updateScale);
    updateScale();
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <>
      <CustomCursor />

      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <div
        id="deck-viewport"
        style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', top: 0, left: 0 }}
      >
        <div 
          id="deck-canvas"
          style={{ width: '1920px', height: '1080px', transform: `scale(${scale})`, position: 'relative', background: 'var(--color-surface)', opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease 0.2s', overflow: 'hidden' }}
        >
          {SLIDES.map((SlideComponent, index) => (
            <div key={index} className={`slide-container ${index === currentSlide ? 'active' : ''}`}>
              <Suspense fallback={<SectionFallback />}>
                <SlideComponent />
              </Suspense>
            </div>
          ))}
        </div>

        <div className="deck-nav">
          {SLIDES.map((_, i) => (
            <div 
              key={i} 
              className={`deck-nav-dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>

        <div className="deck-controls">
          <button className="deck-btn" onClick={goPrev}>&#8592;</button>
          <button className="deck-btn" onClick={goNext}>&#8594;</button>
        </div>
      </div>
    </>
  );
}
