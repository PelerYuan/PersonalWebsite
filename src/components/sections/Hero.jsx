// src/components/sections/Hero.jsx
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AvatarGlow from '../ui/AvatarGlow';
import TypewriterRole from '../ui/TypewriterRole';
import { scrollToSection } from '../../hooks/useLenis';
import profileImg from '../../assets/profile.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden section-bg"
    >
      {/* Radial spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, #00d4ff0d 0%, transparent 70%)',
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-32 left-10 w-px h-20 bg-gradient-to-b from-transparent via-accent-glow to-transparent opacity-40" />
      <div className="absolute top-32 left-10 w-20 h-px bg-gradient-to-r from-transparent via-accent-glow to-transparent opacity-40" />
      <div className="absolute bottom-32 right-10 w-px h-20 bg-gradient-to-b from-transparent via-accent-glow to-transparent opacity-40" />
      <div className="absolute bottom-32 right-10 w-20 h-px bg-gradient-to-r from-accent-glow via-transparent to-transparent opacity-40" />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-10 px-6 text-center"
      >
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <AvatarGlow size={160} src={profileImg} />
        </motion.div>

        {/* Name + subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <h1 className="font-sans font-bold text-display text-text-primary leading-none">
            Hi, I'm Xingjian Yuan
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="h-px w-8 bg-accent-DEFAULT opacity-40" />
            <p className="font-mono text-sm tracking-widest text-text-muted">
              also known as{' '}
              <span
                className="text-accent-DEFAULT font-semibold tracking-normal"
                style={{ textShadow: '0 0 16px #00d4ff60' }}
              >
                Peler
              </span>
            </p>
            <span className="h-px w-8 bg-accent-DEFAULT opacity-40" />
          </div>
        </motion.div>

        {/* Typewriter + description + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full max-w-xl"
        >
          <TypewriterRole />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-DEFAULT transition-colors focus:outline-none group"
          aria-label="Scroll to About section"
        >
          <span className="label-mono group-hover:opacity-100 transition-opacity">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
