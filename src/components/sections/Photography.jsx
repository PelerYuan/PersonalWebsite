// src/components/sections/Photography.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import ScrollReveal, { REVEAL_VARIANTS } from '../ui/ScrollReveal';

const CATEGORIES = ['All', 'Street', 'Architecture', 'Night', 'Nature'];

// Placeholder photo data with color-coded placeholders
const PHOTOS = [
  { id: 'p1', category: 'Street', title: 'Rush Hour', location: 'Downtown', color: '#1a1a2e', accent: '#00d4ff' },
  { id: 'p2', category: 'Architecture', title: 'Glass & Steel', location: 'Financial District', color: '#16213e', accent: '#7c3aed' },
  { id: 'p3', category: 'Night', title: 'Light Trails', location: 'Overpass', color: '#0f1040', accent: '#f59e0b', tall: true },
  { id: 'p4', category: 'Street', title: 'Quiet Alley', location: 'Old Quarter', color: '#1a1228', accent: '#f472b6' },
  { id: 'p5', category: 'Architecture', title: 'Brutalist Facade', location: 'City Hall', color: '#111827', accent: '#00ff88', wide: true },
  { id: 'p6', category: 'Nature', title: 'Fog Valley', location: 'Mountain Pass', color: '#0d1b2a', accent: '#fb923c' },
  { id: 'p7', category: 'Night', title: 'Star Trails', location: 'Remote Desert', color: '#05050f', accent: '#00d4ff', tall: true },
  { id: 'p8', category: 'Street', title: 'Wet Reflections', location: 'After Rain', color: '#0a1520', accent: '#7c3aed' },
  { id: 'p9', category: 'Architecture', title: 'Spiral Staircase', location: 'Museum', color: '#1c1020', accent: '#f472b6' },
  { id: 'p10', category: 'Nature', title: 'Morning Mist', location: 'Lake Shore', color: '#051015', accent: '#00ff88', wide: true },
  { id: 'p11', category: 'Night', title: 'City Glow', location: 'Rooftop', color: '#0a0510', accent: '#f59e0b' },
  { id: 'p12', category: 'Street', title: 'Solo Figure', location: 'Empty Plaza', color: '#10100a', accent: '#fb923c' },
];

function PhotoPlaceholder({ photo, onClick }) {
  const height = photo.tall ? 'h-72' : photo.wide ? 'h-44' : 'h-52';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={() => onClick(photo)}
      className={`relative ${height} rounded-xl overflow-hidden cursor-pointer group border border-base-border`}
      style={{ background: photo.color }}
    >
      {/* Simulated photo content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-30">
        <div className="w-8 h-8 rounded-full border-2" style={{ borderColor: photo.accent }} />
        <div className="w-16 h-px" style={{ background: photo.accent }} />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${photo.accent}33, transparent 70%)`,
        }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
        <ZoomIn size={24} className="text-white" />
        <p className="text-white text-xs font-mono">{photo.title}</p>
        <p className="text-white/60 text-[10px] font-mono">{photo.location}</p>
      </div>

      {/* Category badge */}
      <div
        className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `${photo.accent}33`, color: photo.accent, border: `1px solid ${photo.accent}50` }}
      >
        {photo.category}
      </div>
    </motion.div>
  );
}

function SectionHeader({ label, title, description }) {
  return (
    <ScrollReveal variant="up">
      <div className="mb-16">
        <div className="section-label" style={{ color: '#fb923c' }}>
          {label}
        </div>
        <h2 className="section-heading">{title}</h2>
        {description && (
          <p className="text-text-secondary max-w-2xl mt-4 leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-[#fb923c] to-transparent rounded" />
      </div>
    </ScrollReveal>
  );
}

export default function Photography() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? PHOTOS
      : PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <section id="photography" className="section-bg border-t border-base-border/30">
      <div className="section-wrapper">
        <SectionHeader
          label="06 — Photography"
          title="Photography"
          description="Moments captured between frames. Street, architecture, and long-exposure photography with a quiet, deliberate eye."
        />

        {/* Category filter */}
        <ScrollReveal variant="up">
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 focus:outline-none ${
                  activeCategory === cat
                    ? 'bg-[#fb923c] text-base-DEFAULT border border-[#fb923c]'
                    : 'text-text-muted border border-base-border hover:text-text-primary hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Masonry-style grid */}
        <motion.div
          layout
          variants={REVEAL_VARIANTS.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                variants={REVEAL_VARIANTS.scale}
                exit={{ opacity: 0, scale: 0.9 }}
                className="break-inside-avoid mb-4"
              >
                <PhotoPlaceholder photo={photo} onClick={setSelectedPhoto} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-xl overflow-hidden border border-base-border"
              style={{ background: selectedPhoto.color, minHeight: 300 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-32 h-32 rounded-full opacity-20 border-4"
                  style={{ borderColor: selectedPhoto.accent }}
                />
              </div>
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `radial-gradient(ellipse at 50% 50%, ${selectedPhoto.accent}44, transparent 70%)`,
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-mono font-semibold text-white">{selectedPhoto.title}</p>
                <p className="text-white/60 text-sm font-mono">{selectedPhoto.location} · {selectedPhoto.category}</p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
