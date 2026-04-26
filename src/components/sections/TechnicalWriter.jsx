// src/components/sections/TechnicalWriter.jsx
import { ExternalLink } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const ACCENT = '#f472b6';

function SectionHeader({ label, title, description }) {
  return (
    <ScrollReveal variant="up">
      <div className="mb-16">
        <div className="section-label" style={{ color: ACCENT }}>
          {label}
        </div>
        <h2 className="section-heading">{title}</h2>
        {description && (
          <p className="text-text-secondary max-w-2xl mt-4 leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-accent-DEFAULT to-transparent rounded" />
      </div>
    </ScrollReveal>
  );
}

function FeaturedBook() {
  return (
    <ScrollReveal variant="up">
      <div
        className="glass rounded-2xl overflow-hidden"
        style={{ border: `1px solid ${ACCENT}1e`, boxShadow: `0 0 60px ${ACCENT}0d` }}
      >
        {/* Gradient glow bar */}
        <div
          className="h-0.5 w-full"
          style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}80, transparent)` }}
        />

        <div className="flex flex-col items-center text-center px-8 py-12 md:py-16">
          {/* Cover image */}
          <div className="mb-8">
            <img
              src="/cover.png"
              alt="IT book for classmates cover"
              className="w-44 md:w-52 h-auto rounded-t-xl md:rounded-xl mx-auto"
              style={{
                boxShadow: '0 24px 48px rgba(0,0,0,0.55)',
                transform: 'perspective(600px) rotateY(4deg)',
              }}
            />
          </div>

          {/* Title + badge */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-3">
            <h3
              className="font-mono font-bold text-text-primary"
              style={{ fontSize: '1.75rem', lineHeight: 1.2 }}
            >
              IT book for classmates
            </h3>
            <span
              className="px-2.5 py-1 rounded-lg font-mono font-bold text-xs tracking-wide"
              style={{ background: '#a78bfa', color: '#fff' }}
            >
              V3
            </span>
          </div>

          {/* Subtitle */}
          <p className="font-mono text-sm font-medium mb-5" style={{ color: ACCENT }}>
            The first computer tutorial book for UNSW Foundation
          </p>

          {/* Divider */}
          <div className="w-12 h-px mb-5" style={{ background: `${ACCENT}4d` }} />

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed max-w-lg mb-8">
            Covering all the theoretical knowledge required for the first term, including vivid
            theoretical explanations, exercise questions, vocabulary summaries, and
            extracurricular extensions.
          </p>

          {/* Learn More button */}
          <a
            href="https://page.peler.top/BookIntroductionPage/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-mono font-semibold text-sm transition-all"
            style={{
              color: ACCENT,
              border: `1px solid ${ACCENT}66`,
              background: `${ACCENT}14`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${ACCENT}2e`;
              e.currentTarget.style.boxShadow = `0 0 20px ${ACCENT}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `${ACCENT}14`;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Learn More
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function TechnicalWriter() {
  return (
    <section id="writing" className="section-bg border-t border-base-border/30">
      <div className="section-wrapper">
        <SectionHeader
          label="05 — Writing"
          title="Technical Writing"
          description='When my classmates struggled with IT, I said: "Let me write you a book."'
        />

        <FeaturedBook />
      </div>
    </section>
  );
}
