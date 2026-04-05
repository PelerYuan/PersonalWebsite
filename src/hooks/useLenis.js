// src/hooks/useLenis.js
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  const lenisRef = useRef(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    // Guard against StrictMode double-invocation
    if (initializedRef.current) return;
    initializedRef.current = true;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
      initializedRef.current = false;
    };
  }, []);

  return lenisRef;
}

// Helper: scrolls to a section by element ID via Lenis
export function scrollToSection(id, offset = -80) {
  const el = document.getElementById(id);
  if (el && window.__lenis) {
    window.__lenis.scrollTo(el, { offset, duration: 1.2 });
  }
}
