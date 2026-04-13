import { Suspense, lazy, useState } from 'react';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
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

// Fallback while section loads
function SectionFallback() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--color-surface)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '2px solid var(--color-border)',
          borderTopColor: 'var(--color-gold)',
          animation: 'spin 0.8s linear infinite',
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
      {/* ── Loading Screen ── */}
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* ── Main App ── */}
      <div
        id="app"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}
      >
        {/* Fixed side navigation */}
        <Navigation />

        {/* All sections */}
        <Suspense fallback={<SectionFallback />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <WhyMOA />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Retail />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Luxury />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Dining />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Entertainment />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Events />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Sponsorship />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Leasing />
        </Suspense>
      </div>
    </>
  );
}
