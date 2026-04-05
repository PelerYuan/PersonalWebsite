import { useState, useRef, useEffect, useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ROLES } from '../../data/roles';
import { scrollToSection } from '../../hooks/useLenis';

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const PAUSE_WHILE_SHOWN = 2200;
const PAUSE_BEFORE_NEXT = 350;

// Apply color directly to the TypeAnimation's <span> — synchronous, no React re-render lag.
function applyColor(spanEl, color) {
  if (!spanEl) return;
  spanEl.style.color = color;
  spanEl.style.textShadow = `0 0 20px ${color}80, 0 0 40px ${color}33`;
}

const descVariants = {
  hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -6,
    filter: 'blur(4px)',
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

export default function TypewriterRole() {
  const [visibleRoleIndex, setVisibleRoleIndex] = useState(null);

  // Ref to the span rendered by TypeAnimation
  const typingSpanRef = useRef(null);
  // Tracks which role index is currently active for coloring
  const currentColorIndexRef = useRef(0);

  // Synchronously update the DOM color — called from sequence callbacks
  const setColor = useCallback((i) => {
    currentColorIndexRef.current = i;
    applyColor(typingSpanRef.current, ROLES[i].accentColor);
  }, []);

  // Build sequence once; callbacks close over stable refs/setters
  const sequenceRef = useRef(null);
  if (!sequenceRef.current) {
    sequenceRef.current = (() => {
      const seq = [];
      ROLES.forEach((role, i) => {
        const nextIndex = (i + 1) % ROLES.length;
        seq.push(() => setColor(i));           // 1. set color synchronously BEFORE typing
        seq.push(role.label);                  // 2. type
        seq.push(() => setVisibleRoleIndex(i));// 3. show desc (typing just finished)
        seq.push(PAUSE_WHILE_SHOWN);           // 4. pause — word + desc visible
        seq.push('');                          // 5. delete
        seq.push(() => {                       // 6. deletion finished:
          setVisibleRoleIndex(null);           //    hide desc
          setColor(nextIndex);                 //    switch to next color synchronously
        });
        seq.push(PAUSE_BEFORE_NEXT);           // 7. brief gap before next word
      });
      return seq;
    })();
  }

  // On mount: paint the initial color directly onto the span
  useEffect(() => {
    // TypeAnimation renders its own <span>; grab the first span inside our wrapper
    const wrapper = typingSpanRef.current?.parentElement;
    if (!wrapper) return;
    const span = wrapper.querySelector('span');
    if (span) {
      typingSpanRef.current = span;
      applyColor(span, ROLES[0].accentColor);
    }
  }, []);

  const currentRole = visibleRoleIndex !== null ? ROLES[visibleRoleIndex] : null;

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Typewriter line */}
      <div className="flex items-center font-mono text-2xl md:text-3xl h-10">
        <span className="text-text-muted mr-2 select-none opacity-50">~/</span>
        {/* We attach a ref wrapper around TypeAnimation to locate its inner span */}
        <span
          ref={(el) => {
            if (el && !typingSpanRef.current) {
              // TypeAnimation renders a <span> as first child
              const inner = el.querySelector('span');
              if (inner) {
                typingSpanRef.current = inner;
                applyColor(inner, ROLES[currentColorIndexRef.current].accentColor);
              }
            }
          }}
        >
          <TypeAnimation
            sequence={sequenceRef.current}
            speed={TYPE_SPEED}
            deletionSpeed={DELETE_SPEED}
            repeat={Infinity}
            cursor={true}
          />
        </span>
      </div>

      {/* Description + CTA */}
      <div className="h-36 flex flex-col items-center justify-start w-full">
        <AnimatePresence mode="wait">
          {currentRole && (
            <motion.div
              key={currentRole.id}
              variants={descVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center gap-5 max-w-lg text-center w-full"
            >
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                {currentRole.description}
              </p>

              <motion.button
                onClick={() => scrollToSection(currentRole.sectionId)}
                whileHover={{
                  scale: 1.04,
                  boxShadow: `0 0 24px ${currentRole.accentColor}80`,
                }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono"
                style={{
                  border: `1px solid ${currentRole.accentColor}`,
                  color: currentRole.accentColor,
                }}
              >
                {currentRole.sectionLabel}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
