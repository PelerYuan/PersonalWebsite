// src/components/ui/ImageLightbox.jsx
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageLightbox({ images, onClose }) {
  const [idx, setIdx] = useState(0);
  const multi = images.length > 1;

  const go = (next) => setIdx((next + images.length) % images.length);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
        onClick={onClose}
      >
        {/* Content wrapper — stops propagation so clicking image doesn't close */}
        <div
          className="relative flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 p-1.5 rounded-full text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={idx}
              src={images[idx]}
              alt={`Image ${idx + 1}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl object-contain"
              style={{ maxWidth: '90vw', maxHeight: '80vh' }}
            />
          </AnimatePresence>

          {/* Arrows — only when multiple images */}
          {multi && (
            <>
              <button
                onClick={() => go(idx - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-colors"
                style={{ background: 'rgba(10,10,15,0.7)', backdropFilter: 'blur(6px)' }}
                aria-label="Previous"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button
                onClick={() => go(idx + 1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-colors"
                style={{ background: 'rgba(10,10,15,0.7)', backdropFilter: 'blur(6px)' }}
                aria-label="Next"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </>
          )}

          {/* Dot indicators — only when multiple images */}
          {multi && (
            <div className="flex gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    background: i === idx ? '#00d4ff' : 'rgba(255,255,255,0.3)',
                    transform: i === idx ? 'scale(1.3)' : 'scale(1)',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
