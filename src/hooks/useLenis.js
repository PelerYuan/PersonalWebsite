// src/hooks/useLenis.js
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
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

    // Recalculate scroll limit when page height changes (e.g. images loading)
    // Debounced to prevent rapid lenis.resize() calls during reflow from
    // interrupting Lenis's internal scroll state (causes scroll freeze).
    let resizeTimer;
    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => lenis.resize(), 150);
    });
    ro.observe(document.documentElement);

    return () => {
      clearTimeout(resizeTimer);
      ro.disconnect();
      lenis.destroy();
      window.__lenis = null;
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
