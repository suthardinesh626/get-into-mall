import { Suspense, lazy, useState } from 'react';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import SectionTransition from './components/SectionTransition';
import CustomCursor from './components/CustomCursor';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './styles/global.css';

// Lazy-load all sections for performance
const Hero          = lazy(() => import('./sections/Hero'));
const WhyMOA        = lazy(() => import('./sections/WhyMOA'));
const Retail        = lazy(() => import('./sections/Retail'));
const Luxury        = lazy(() => import('./sections/Luxury'));
const Dining        = lazy(() => import('./sections/Dining'));
const Entertainment = lazy(() => import('./sections/Entertainment'));
const Events        = lazy(() => import('./sections/Events'));
const Sponsorship   = lazy(() => import('./sections/Sponsorship'));
const Leasing       = lazy(() => import('./sections/Leasing'));

// Section labels for SectionTransition — index is 0-based (shows 01, 02…)
const TRANSITIONS = [
  { label: 'Why This Property' },    // 01 — between Hero & WhyMOA
  { label: 'Retail Opportunity' },   // 02 — between WhyMOA & Retail
  { label: 'Luxury & Premium' },     // 03 — between Retail & Luxury
  { label: 'Dining & F&B' },         // 04 — between Luxury & Dining
  { label: 'Entertainment' },        // 05 — between Dining & Entertainment
  { label: 'Events & Platform' },    // 06 — between Entertainment & Events
  { label: 'Sponsorship' },          // 07 — between Events & Sponsorship
  { label: 'Leasing Paths' },        // 08 — between Sponsorship & Leasing
];

// Fallback while section code-splits load
function SectionFallback() {
  return (
    <div
      style={{
        minHeight: '60vh',
        background: 'var(--color-surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          width: 32,
          height: 1,
          background: 'var(--color-gold)',
          animation: 'pulse 1s ease-in-out infinite alternate',
          opacity: 0.4,
        }}
      />
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  // Initialize scroll-reveal observer
  useScrollAnimation({ threshold: 0.15, once: true });

  return (
    <>
      {/* ── Custom Cursor (desktop only) ── */}
      <CustomCursor />

      {/* ── Loading Screen ── */}
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* ── Main App ── */}
      <div
        id="app"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease 0.2s' }}
      >
        {/* Fixed side navigation */}
        <Navigation />

        {/* Hero — no transition before it */}
        <Suspense fallback={<SectionFallback />}>
          <Hero />
        </Suspense>

        <SectionTransition label={TRANSITIONS[0].label} index={0} />
        <Suspense fallback={<SectionFallback />}>
          <WhyMOA />
        </Suspense>

        <SectionTransition label={TRANSITIONS[1].label} index={1} />
        <Suspense fallback={<SectionFallback />}>
          <Retail />
        </Suspense>

        <SectionTransition label={TRANSITIONS[2].label} index={2} />
        <Suspense fallback={<SectionFallback />}>
          <Luxury />
        </Suspense>

        <SectionTransition label={TRANSITIONS[3].label} index={3} />
        <Suspense fallback={<SectionFallback />}>
          <Dining />
        </Suspense>

        <SectionTransition label={TRANSITIONS[4].label} index={4} />
        <Suspense fallback={<SectionFallback />}>
          <Entertainment />
        </Suspense>

        <SectionTransition label={TRANSITIONS[5].label} index={5} />
        <Suspense fallback={<SectionFallback />}>
          <Events />
        </Suspense>

        <SectionTransition label={TRANSITIONS[6].label} index={6} />
        <Suspense fallback={<SectionFallback />}>
          <Sponsorship />
        </Suspense>

        <SectionTransition label={TRANSITIONS[7].label} index={7} />
        <Suspense fallback={<SectionFallback />}>
          <Leasing />
        </Suspense>
      </div>
    </>
  );
}
