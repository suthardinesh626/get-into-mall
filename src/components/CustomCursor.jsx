import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

/**
 * CustomCursor
 * - Small gold dot (8px) that follows the mouse
 * - Expands to 32px ring on hover over clickables
 * - Desktop only — hidden on touch devices
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Only activate on pointer (non-touch) devices
    if (window.matchMedia('(hover: none)').matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    let animFrame;

    const onMove = (e) => {
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(() => {
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    };

    const onEnter = (e) => {
      if (e.target.closest('a, button, [role="button"], [tabindex], input, select, textarea, label')) {
        setHovered(true);
      }
    };

    const onLeave = (e) => {
      if (e.target.closest('a, button, [role="button"], [tabindex], input, select, textarea, label')) {
        setHovered(false);
      }
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseenter', onEnter, true);
    document.addEventListener('mouseleave', onLeave, true);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter, true);
      document.removeEventListener('mouseleave', onLeave, true);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className={`cursor ${hovered ? 'cursor--hovered' : ''}`}
      aria-hidden="true"
    />
  );
}
