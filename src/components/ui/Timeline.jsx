// src/components/ui/Timeline.jsx
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { REVEAL_VARIANTS } from './ScrollReveal';
import uqCrest from '../../assets/crests/UQ.png';
import unswCrest from '../../assets/crests/UNSW.png';

const CREST_MAP = { UQ: uqCrest, UNSW: unswCrest };

export default function Timeline({ items }) {
  return (
    <div className="relative">
      {/* Vertical line — full height */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-DEFAULT via-accent-glow to-transparent" />

      <motion.div
        variants={REVEAL_VARIANTS.stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="space-y-10 pl-12"
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={REVEAL_VARIANTS.left}
            className="relative"
          >
            {/* Dot */}
            <div className="absolute -left-[2.65rem] top-6 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-accent-DEFAULT shadow-glow-sm ring-2 ring-base-DEFAULT z-10 relative" />
              {item.isCurrent && (
                <span className="absolute w-3 h-3 rounded-full bg-accent-DEFAULT opacity-50 animate-ping" />
              )}
            </div>

            {/* Card */}
            <div
              className="glass rounded-xl p-6 border transition-colors"
              style={
                item.isCurrent
                  ? {
                      borderColor: 'rgba(0, 212, 255, 0.35)',
                      boxShadow: '0 0 24px rgba(0, 212, 255, 0.07)',
                    }
                  : { borderColor: 'rgba(30, 30, 46, 1)' }
              }
            >
              {/* Header: crest + name + period */}
              <div className="flex items-start gap-4 mb-4">
                {/* Crest */}
                {item.crest && CREST_MAP[item.crest] && (
                  <div
                    className="shrink-0 w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden"
                    style={{
                      background: 'rgba(235, 235, 235, 0.92)',
                      border: '1px solid rgba(200,200,200,0.4)',
                    }}
                  >
                    <img
                      src={CREST_MAP[item.crest]}
                      alt={item.crest}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <h3 className="font-mono font-semibold text-text-primary text-xl leading-snug">
                    {item.school}
                  </h3>
                  <span className="label-mono mt-1 inline-block">{item.period}</span>
                </div>
              </div>

              {/* Degree as description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                {item.degree}
              </p>

              {/* GPA callout */}
              {item.gpa && (
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{
                    background: 'rgba(0,212,255,0.06)',
                    border: '1px solid rgba(0,212,255,0.15)',
                  }}
                >
                  <Award size={14} style={{ color: '#00d4ff' }} />
                  <span className="text-xs font-mono" style={{ color: '#9090b0' }}>
                    Final GPA:
                  </span>
                  <span
                    className="text-sm font-mono font-bold"
                    style={{
                      color: '#00d4ff',
                      textShadow: '0 0 12px rgba(0,212,255,0.5)',
                    }}
                  >
                    {item.gpa}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

