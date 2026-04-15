import { useEffect, useRef, useState } from 'react';
import './SectionTransition.css';

/**
 * SectionTransition
 * Renders between sections with:
 *  - A gold line that draws across when entering viewport
 *  - A section number/label badge in the top-left
 */
export default function SectionTransition({ label, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="st" ref={ref} aria-hidden="true">
      {/* Gold line draws across */}
      <div className={`st__line ${visible ? 'st__line--drawn' : ''}`} />
      {/* Section label */}
      {label && (
        <div className={`st__label ${visible ? 'st__label--visible' : ''}`}>
          <span className="st__label-num">{num}</span>
          <span className="st__label-sep">/</span>
          <span className="st__label-text">{label.toUpperCase()}</span>
        </div>
      )}
    </div>
  );
}
