// src/components/ui/AvatarGlow.jsx
import { motion } from 'framer-motion';

export default function AvatarGlow({ size = 180, src }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Spinning dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute rounded-full"
        style={{
          inset: -10,
          border: '1px dashed #00d4ff40',
        }}
      />

      {/* Glow pulse ring */}
      <motion.div
        animate={{
          boxShadow: [
            '0 0 20px #00d4ff33, 0 0 60px #00d4ff1a',
            '0 0 40px #00d4ff66, 0 0 80px #00d4ff33',
            '0 0 20px #00d4ff33, 0 0 60px #00d4ff1a',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-full border border-accent-DEFAULT/40"
      />

      {/* Avatar */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent-DEFAULT/60 bg-gradient-to-br from-base-elevated to-base-surface">
        {src ? (
          <img src={src} alt="Xingjian Yuan" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-mono text-accent-DEFAULT font-bold text-glow select-none" style={{ fontSize: size * 0.22 }}>
            XY
          </div>
        )}
      </div>
    </div>
  );
}
