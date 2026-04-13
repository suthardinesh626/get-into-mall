import { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState('enter'); // 'enter' | 'hold' | 'exit'

  useEffect(() => {
    // Phase sequence:
    // 0ms    → logo fades in (CSS handles)
    // 800ms  → hold
    // 2000ms → bar fills
    // 2600ms → fade out
    // 3200ms → done

    const holdTimer = setTimeout(() => setPhase('hold'), 800);
    const exitTimer = setTimeout(() => setPhase('exit'), 2400);
    const doneTimer = setTimeout(() => onComplete?.(), 3200);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      id="loading-screen"
      className={`loading loading--${phase}`}
      aria-label="Loading Mall of America sales deck"
      role="status"
    >
      {/* Gold particle dots */}
      <div className="loading__particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`loading__particle loading__particle--${i + 1}`} />
        ))}
      </div>

      {/* Center content */}
      <div className="loading__center">
        {/* MOA Logo mark */}
        <div className="loading__logo-wrap">
          <div className="loading__logo-ring" aria-hidden="true" />
          <div className="loading__logo">
            <div className="loading__logo-line" aria-hidden="true" />
            <div className="loading__logo-text">
              <span className="loading__logo-moa">MOA</span>
              <span className="loading__logo-tagline">Mall of America</span>
            </div>
            <div className="loading__logo-line" aria-hidden="true" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="loading__progress" aria-hidden="true">
          <div className={`loading__progress-bar ${phase !== 'enter' ? 'loading__progress-bar--fill' : ''}`} />
        </div>

        <p className="loading__sub">America's Destination</p>
      </div>
    </div>
  );
}
