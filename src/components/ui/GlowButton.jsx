// src/components/ui/GlowButton.jsx
import { motion } from 'framer-motion';

export default function GlowButton({
  children,
  onClick,
  href,
  color = '#00d4ff',
  filled = false,
  className = '',
  type = 'button',
}) {
  const baseClass = `
    relative inline-flex items-center gap-2
    px-6 py-3 rounded-full text-sm font-mono font-medium
    tracking-wide border transition-colors duration-300
    focus:outline-none
  `;

  const colorStyle = filled
    ? { background: color, borderColor: color, color: '#0a0a0f' }
    : { borderColor: color, color };

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={colorStyle}
        whileHover={{
          scale: 1.03,
          boxShadow: `0 0 24px ${color}80, 0 0 48px ${color}33`,
        }}
        whileTap={{ scale: 0.97 }}
        className={`${baseClass} ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      style={colorStyle}
      whileHover={{
        scale: 1.03,
        boxShadow: `0 0 24px ${color}80, 0 0 48px ${color}33`,
      }}
      whileTap={{ scale: 0.97 }}
      className={`${baseClass} ${className}`}
    >
      {children}
    </motion.button>
  );
}
