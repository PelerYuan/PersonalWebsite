// src/components/ui/SectionCard.jsx
import { motion } from 'framer-motion';

export default function SectionCard({
  children,
  className = '',
  glowColor = '#00d4ff',
  onClick,
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: `0 0 30px ${glowColor}26, 0 8px 32px rgba(0,0,0,0.4)`,
      }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`glass rounded-xl p-6 border border-base-border transition-colors duration-300 ${className}`}
      style={{ '--card-glow': glowColor }}
    >
      {children}
    </motion.div>
  );
}
