import { useEffect, useRef, useCallback } from 'react';

/**
 * useVideoAutoplay
 * Handles autoplay, pause-on-scroll-out, muting, and lazy loading
 * for background videos using IntersectionObserver.
 */
export function useVideoAutoplay(options = {}) {
  const {
    muted = true,
    threshold = 0.3,
    loop = true,
    playbackRate = 1,
  } = options;

  const videoRef = useRef(null);
  const observerRef = useRef(null);

  const setupVideo = useCallback((video) => {
    if (!video) return;
    videoRef.current = video;
    video.muted = muted;
    video.loop = loop;
    video.playbackRate = playbackRate;
    video.playsInline = true;
    video.preload = 'metadata';
  }, [muted, loop, playbackRate]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay blocked — video stays paused
          });
        } else {
          video.pause();
        }
      },
      { threshold }
    );

    observerRef.current.observe(video);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold]);

  return { videoRef, setupVideo };
}

/**
 * useParallax
 * Creates a parallax effect on scroll for an element.
 * Returns a ref to attach to the element.
 */
export function useParallax(speed = 0.4) {
  const elementRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const el = elementRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const offset = (rect.top / windowHeight) * speed * 100;

        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  return elementRef;
}
