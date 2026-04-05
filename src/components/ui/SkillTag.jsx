// src/components/ui/SkillTag.jsx
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

export default function SkillTag({ label, level, color = '#00d4ff', learning = false }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="group flex flex-col gap-1.5 px-4 py-2.5 glass rounded-lg border border-base-border hover:border-white/10 transition-colors"
    >
      <div className="flex items-center justify-between gap-1">
        <span className="text-xs font-mono text-text-secondary group-hover:text-text-primary transition-colors">
          {label}
        </span>
        {learning && (
          <TrendingUp
            size={11}
            style={{ color: '#00d4ff', flexShrink: 0 }}
            className="opacity-80"
          />
        )}
      </div>
      {level !== undefined && (
        <div className="h-0.5 w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full rounded-full relative overflow-hidden"
            style={{ background: color }}
          >
            {/* Shimmer only for learning skills */}
            {learning && (
              <span
                className="shimmer absolute inset-0 w-1/3"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)',
                }}
              />
            )}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
