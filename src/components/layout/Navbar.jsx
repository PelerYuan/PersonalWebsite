// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { scrollToSection } from '../../hooks/useLenis';
import { SECTION_IDS } from '../../App';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'software', label: 'Software' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'server-ops', label: 'Ops' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3'
          : 'bg-transparent py-5'
      }`}
      style={scrolled ? {
        background: 'rgba(10, 10, 15, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 1px 0 0 rgba(30, 30, 46, 0.9)',
      } : undefined}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero', 0)}
          className="cursor-pointer focus:outline-none"
          aria-label="Back to top"
        >
          <span className="font-mono text-accent-DEFAULT text-glow font-bold tracking-widest text-sm select-none">
            dev.<span className="text-text-primary">peler</span><span className="text-text-muted">.top</span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`relative px-4 py-2 text-xs font-mono tracking-wider uppercase cursor-pointer transition-colors duration-200 focus:outline-none ${
                  activeId === id
                    ? 'text-accent-DEFAULT'
                    : 'text-text-muted hover:text-text-primary'
                }`}
                aria-current={activeId === id ? 'page' : undefined}
              >
                {label}
                {activeId === id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-px bg-accent-DEFAULT"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden text-text-secondary hover:text-accent-DEFAULT transition-colors focus:outline-none"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(13, 13, 20, 0.95)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderTop: '1px solid rgba(30, 30, 46, 0.8)',
            }}
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      scrollToSection(id);
                      setMobileOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 text-sm font-mono tracking-wider cursor-pointer rounded transition-colors focus:outline-none ${
                      activeId === id
                        ? 'text-accent-DEFAULT bg-accent-subtle'
                        : 'text-text-muted hover:text-text-primary'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
