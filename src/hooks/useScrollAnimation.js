import { useEffect, useRef, useCallback, useState } from 'react';

/**
 * useScrollAnimation
 * Uses IntersectionObserver (viewport root) to add 'visible' to .reveal elements.
 * Also uses MutationObserver to catch elements added by lazy-loaded sections.
 *
 * NOTE: scroll-snap MUST be on <html>, not a child div, so the browser viewport
 * is the IntersectionObserver root and intersection events fire correctly.
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.12,
    rootMargin = '0px 0px -40px 0px',
    once = true,
  } = options;

  const ioRef = useRef(null);    // IntersectionObserver
  const moRef = useRef(null);    // MutationObserver

  // Helper: observe a single element if it carries a reveal class
  const tryObserve = useCallback((el) => {
    if (!ioRef.current) return;
    if (
      el.nodeType === Node.ELEMENT_NODE &&
      (el.classList.contains('reveal') ||
       el.classList.contains('reveal-left') ||
       el.classList.contains('reveal-right'))
    ) {
      ioRef.current.observe(el);
    }
    // Also sweep descendants
    el.querySelectorAll?.('.reveal, .reveal-left, .reveal-right').forEach((child) => {
      ioRef.current.observe(child);
    });
  }, []);

  useEffect(() => {
    // 1. Create IntersectionObserver (root = viewport — default)
    ioRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (once) ioRef.current?.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    // 2. Observe elements already in DOM
    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach((el) => ioRef.current?.observe(el));

    // 3. MutationObserver — watch for new nodes added by Suspense/lazy sections
    moRef.current = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          tryObserve(node);
        });
      });
    });

    moRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      ioRef.current?.disconnect();
      moRef.current?.disconnect();
    };
  }, [threshold, rootMargin, once, tryObserve]);
}

/**
 * useActiveSection
 * Tracks which section is currently in the viewport using IntersectionObserver.
 *
 * NOTE: Works correctly now that <html> is the scroll container (viewport root).
 */
export function useActiveSection(sectionIds = []) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      // 45% visible required; no custom root — uses viewport correctly
      { threshold: 0.45 }
    );

    const tryObserve = () => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    // Initial check
    tryObserve();

    // Watch for DOM mutations since sections load async via React.lazy
    const mo = new MutationObserver(() => {
      tryObserve();
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(',')]);

  return activeSection;
}

/**
 * useCountUp
 * Animates a number from 0 to target when shouldStart = true.
 */
export function useCountUp(target, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!shouldStart) return;

    const startTime = performance.now();
    const numericTarget = parseFloat(String(target).replace(/[^0-9.]/g, '')) || 0;

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(numericTarget);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [shouldStart, target, duration]);

  return count;
}
