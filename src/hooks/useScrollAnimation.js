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
 */
export function useActiveSection(sectionIds = []) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const ratios = useRef(new Map());

  useEffect(() => {
    if (!sectionIds.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.current.set(entry.target.id, entry.intersectionRatio);
        });

        let maxRatio = 0;
        let maxId = '';
        
        // Find the section that occupies the largest viewed proportion
        ratios.current.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        });

        if (maxId) {
          setActiveSection(maxId);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '-15% 0px -15% 0px' 
      }
    );

    const tryObserve = () => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    tryObserve();

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
