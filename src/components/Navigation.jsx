import { useEffect, useCallback } from 'react';
import { useActiveSection } from '../hooks/useScrollAnimation';
import './Navigation.css';

const SECTIONS = [
  { id: 'hero',          label: 'Home',          icon: '⬡' },
  { id: 'why-moa',      label: 'Why MOA',       icon: '⬡' },
  { id: 'retail',       label: 'Retail',         icon: '⬡' },
  { id: 'luxury',       label: 'Luxury',         icon: '⬡' },
  { id: 'dining',       label: 'Dining',         icon: '⬡' },
  { id: 'entertainment', label: 'Entertainment', icon: '⬡' },
  { id: 'events',       label: 'Events',         icon: '⬡' },
  { id: 'sponsors',     label: 'Partners',       icon: '⬡' },
];

export default function Navigation() {
  const sectionIds = SECTIONS.map((s) => s.id);
  const activeSection = useActiveSection(sectionIds);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // Keyboard Arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const currentIndex = sectionIds.indexOf(activeSection);

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        const next = sectionIds[Math.min(currentIndex + 1, sectionIds.length - 1)];
        scrollTo(next);
      }

      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        const prev = sectionIds[Math.max(currentIndex - 1, 0)];
        scrollTo(prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, sectionIds, scrollTo]);

  return (
    <nav
      id="main-navigation"
      className="nav"
      aria-label="Section navigation"
      role="navigation"
    >
      {/* Logo mark top of nav */}
      <div className="nav__logo">
        <span className="nav__logo-text">MOA</span>
      </div>

      {/* Section dots */}
      <ul className="nav__dots" role="list">
        {SECTIONS.map((section, idx) => (
          <li key={section.id} className="nav__dot-wrapper">
            <button
              id={`nav-dot-${section.id}`}
              className={`nav__dot ${activeSection === section.id ? 'nav__dot--active' : ''}`}
              onClick={() => scrollTo(section.id)}
              aria-label={`Navigate to ${section.label} section`}
              aria-current={activeSection === section.id ? 'true' : undefined}
              title={section.label}
            >
              <span className="nav__dot-inner" aria-hidden="true" />
            </button>
            <span className="nav__dot-label" aria-hidden="true">
              <span className="nav__dot-label-index">
                {String(idx + 1).padStart(2, '0')}
              </span>
              {section.label}
            </span>
          </li>
        ))}
      </ul>

      {/* Bottom CTA */}
      <button
        id="nav-cta-contact"
        className="nav__cta"
        onClick={() => scrollTo('leasing')}
        aria-label="Contact partnership team"
      >
        <span className="nav__cta-line" aria-hidden="true" />
        <span className="nav__cta-text">Contact</span>
      </button>
    </nav>
  );
}
