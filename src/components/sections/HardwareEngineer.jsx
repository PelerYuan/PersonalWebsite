// src/components/sections/HardwareEngineer.jsx
import { motion } from 'framer-motion';
import { Cpu, Zap, Radio } from 'lucide-react';
import ScrollReveal, { REVEAL_VARIANTS } from '../ui/ScrollReveal';
import SectionCard from '../ui/SectionCard';
import { HARDWARE_PROJECTS } from '../../data/projects';

const ICONS = [Cpu, Zap, Radio];

function SectionHeader({ label, title, description }) {
  return (
    <ScrollReveal variant="up">
      <div className="mb-16">
        <div className="section-label" style={{ color: '#f59e0b' }}>
          {label}
        </div>
        <h2 className="section-heading">{title}</h2>
        {description && (
          <p className="text-text-secondary max-w-2xl mt-4 leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-[#f59e0b] to-transparent rounded" />
      </div>
    </ScrollReveal>
  );
}

function HardwareCard({ project, Icon }) {
  return (
    <SectionCard glowColor={project.accentColor} className="flex flex-col h-full">
      {/* Icon + title */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="p-2.5 rounded-lg shrink-0"
          style={{ background: `${project.accentColor}15`, border: `1px solid ${project.accentColor}30` }}
        >
          <Icon size={20} style={{ color: project.accentColor }} />
        </div>
        <div>
          <h3 className="font-mono font-semibold text-text-primary text-base leading-snug">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-0.5 rounded text-[10px] font-mono"
                style={{
                  background: `${project.accentColor}15`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}30`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Specs */}
      {project.specs && (
        <div className="border-t border-base-border pt-4 space-y-1.5">
          {project.specs.map((spec) => (
            <div key={spec} className="flex items-center gap-2 text-xs font-mono text-text-muted">
              <span style={{ color: project.accentColor }} className="opacity-60">›</span>
              {spec}
            </div>
          ))}
        </div>
      )}
    </SectionCard>
  );
}

export default function HardwareEngineer() {
  return (
    <section id="hardware" className="section-bg border-t border-base-border/30">
      <div className="section-wrapper">
        <SectionHeader
          label="03 — Hardware"
          title="Hardware Engineering"
          description="Where software meets physics. PCB design, embedded firmware, and systems where every microsecond and milliwatt has a cost."
        />

        <motion.div
          variants={REVEAL_VARIANTS.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {HARDWARE_PROJECTS.map((project, i) => {
            const Icon = ICONS[i] || Cpu;
            return (
              <motion.div key={project.id} variants={REVEAL_VARIANTS.scale}>
                <HardwareCard project={project} Icon={Icon} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
