// src/components/sections/TechnicalWriter.jsx
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';
import ScrollReveal, { REVEAL_VARIANTS } from '../ui/ScrollReveal';
import SectionCard from '../ui/SectionCard';
import { ARTICLES } from '../../data/writing';

function SectionHeader({ label, title, description }) {
  return (
    <ScrollReveal variant="up">
      <div className="mb-16">
        <div className="section-label" style={{ color: '#f472b6' }}>
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

function ArticleCard({ article }) {
  const date = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <SectionCard
      glowColor={article.accentColor}
      className="group flex flex-col h-full cursor-pointer"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-mono"
              style={{
                background: `${article.accentColor}15`,
                color: article.accentColor,
                border: `1px solid ${article.accentColor}30`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <ArrowUpRight
          size={16}
          className="shrink-0 text-text-muted group-hover:text-text-primary transition-colors"
        />
      </div>

      <h3 className="font-mono font-semibold text-text-primary text-sm leading-snug mb-2 group-hover:text-white transition-colors">
        {article.title}
      </h3>

      <p className="text-text-muted text-xs leading-relaxed flex-1 mb-4">
        {article.excerpt}
      </p>

      <div className="flex items-center gap-4 text-[10px] font-mono text-text-muted border-t border-base-border pt-3">
        <span>{date}</span>
        <span className="flex items-center gap-1">
          <Clock size={10} />
          {article.readTime}
        </span>
      </div>
    </SectionCard>
  );
}

export default function TechnicalWriter() {
  return (
    <section id="writing" className="section-bg border-t border-base-border/30">
      <div className="section-wrapper">
        <SectionHeader
          label="05 — Writing"
          title="Technical Writing"
          description="Turning complex systems into clear prose. Documentation should reduce cognitive load, not add to it."
        />

        <motion.div
          variants={REVEAL_VARIANTS.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {ARTICLES.map((article) => (
            <motion.div key={article.id} variants={REVEAL_VARIANTS.scale}>
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
