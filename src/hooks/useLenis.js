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

    return () => {
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
