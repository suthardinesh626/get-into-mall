import { useState, useEffect, useRef } from 'react';
import './StatCounter.css';
/**
 * StatCounter
 * Counts from 0 → value using requestAnimationFrame with ease-out cubic.
 * Triggers when the element enters the viewport (IntersectionObserver).
 *
 * Props:
 *  value    — target number (can include trailing +/M/K in suffix)
 *  suffix   — string appended after the number (e.g. "M+", "K SQ FT", "+")
 *  prefix   — string prepended (e.g. "$")
 *  label    — small caption below the number
 *  duration — animation duration in ms (default 2200)
 *  decimals — decimal places (default 0)
 */
export default function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 2200,
  decimals = 0,
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const rafRef = useRef(null);
  // 1. IntersectionObserver — start counting when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);
  // 2. requestAnimationFrame count-up with ease-out cubic
  useEffect(() => {
    if (!started) return;
    const numericTarget = parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0;
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Ease-out cubic: fast start → slow finish
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(parseFloat((eased * numericTarget).toFixed(decimals)));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(numericTarget);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [started, value, duration, decimals]);
  // 3. Format with commas for large numbers
  const formatCount = (n) => {
    if (decimals > 0) return n.toFixed(decimals);
    return Math.floor(n).toLocaleString('en-US');
  };
  return (
    <div ref={ref} className="sc">
      <div className="sc__number">
        {prefix && <span className="sc__prefix">{prefix}</span>}
        <span className="sc__value">{formatCount(count)}</span>
        {suffix && <span className="sc__suffix">{suffix}</span>}
      </div>
      {label && <p className="sc__label">{label}</p>}
    </div>
  );
}
