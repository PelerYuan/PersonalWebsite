// src/components/ui/ImageCarousel.jsx
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageCarousel({ slides }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const go = (next) => setIdx((next + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => go(idx + 1), 3500);
    return () => clearInterval(timerRef.current);
  }, [idx, paused]);

  const current = slides[idx];

  return (
    <div
      className="relative rounded-xl overflow-hidden group"
      style={{ background: 'rgba(10,10,15,0.6)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide image — natural ratio, full width */}
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={current.src}
          alt={current.caption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="w-full h-auto object-contain rounded-xl"
        />
      </AnimatePresence>

      {/* Caption strip */}
      <div
        className="relative px-4 py-2 flex items-center justify-between"
        style={{ background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(8px)' }}
      >
        <span className="label-mono" style={{ opacity: 0.9 }}>{current.caption}</span>
        {/* Dot indicators */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="w-1.5 h-1.5 rounded-full transition-all"
              style={{
                background: i === idx ? '#00d4ff' : 'rgba(255,255,255,0.25)',
                transform: i === idx ? 'scale(1.3)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Prev / Next arrows (visible on hover) — positioned over image */}
      <button
        onClick={() => go(idx - 1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
        style={{ background: 'rgba(10,10,15,0.7)', backdropFilter: 'blur(6px)', top: 'calc(50% - 18px)' }}
        aria-label="Previous"
      >
        <ChevronLeft size={18} className="text-text-primary" />
      </button>
      <button
        onClick={() => go(idx + 1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
        style={{ background: 'rgba(10,10,15,0.7)', backdropFilter: 'blur(6px)', top: 'calc(50% - 18px)' }}
        aria-label="Next"
      >
        <ChevronRight size={18} className="text-text-primary" />
      </button>
    </div>
  );
}
