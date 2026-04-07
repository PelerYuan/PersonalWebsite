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
        <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-[#f472b6] to-transparent rounded" />
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
          description="When my classmates struggled with IT, I said: “Let me write you a book.”"
        />

        <ScrollReveal variant="up">
          <div
            className="glass rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(244,114,182,0.12)', boxShadow: '0 0 60px rgba(244,114,182,0.05)' }}
          >
            <div className="flex flex-col md:flex-row">

              {/* Left — cover with tinted backdrop */}
              <div
                className="flex items-end justify-center md:justify-end shrink-0 px-10 pt-10 pb-0 md:pb-10 md:w-72"
                style={{ background: 'rgba(244,114,182,0.04)' }}
              >
                <img
                  src="/cover.png"
                  alt="IT book for classmates cover"
                  className="w-44 md:w-52 h-auto rounded-t-xl md:rounded-xl"
                  style={{
                    boxShadow: '0 24px 48px rgba(0,0,0,0.55)',
                    transform: 'perspective(600px) rotateY(4deg)',
                  }}
                />
              </div>

              {/* Right — info */}
              <div className="flex flex-col justify-center gap-5 px-8 md:px-12 py-10 flex-1">

                {/* Title + badge */}
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-mono font-bold text-text-primary" style={{ fontSize: '1.75rem', lineHeight: 1.2 }}>
                    IT book for classmates
                  </h3>
                  <span
                    className="px-2.5 py-1 rounded-lg font-mono font-bold text-xs tracking-wide"
                    style={{ background: '#7c3aed', color: '#fff' }}
                  >
                    V3
                  </span>
                </div>

                {/* Subtitle */}
                <p className="font-mono text-sm font-medium" style={{ color: ACCENT }}>
                  The first computer tutorial book for UNSW Foundation
                </p>

                {/* Divider */}
                <div className="w-12 h-px" style={{ background: 'rgba(244,114,182,0.3)' }} />

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed max-w-lg">
                  Covering all the theoretical knowledge required for the first term, including vivid
                  theoretical explanations, exercise questions, vocabulary summaries, and
                  extracurricular extensions.
                </p>

                {/* Learn More button */}
                <div className="mt-1">
                  <a
                    href="https://page.peler.top/BookIntroductionPage/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-mono font-semibold text-sm transition-all"
                    style={{
                      color: ACCENT,
                      border: '1px solid rgba(244,114,182,0.4)',
                      background: 'rgba(244,114,182,0.08)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(244,114,182,0.18)';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(244,114,182,0.25)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(244,114,182,0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Learn More
                    <ExternalLink size={13} />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
