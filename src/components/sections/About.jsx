// src/components/sections/About.jsx
import { motion } from "framer-motion";
import ScrollReveal, { REVEAL_VARIANTS } from "../ui/ScrollReveal";
import SkillTag from "../ui/SkillTag";
import Timeline from "../ui/Timeline";
import { SKILLS } from "../../data/skills";
import { EDUCATION } from "../../data/writing";

function SectionHeader({ label, title, description }) {
  return (
    <ScrollReveal variant="up">
      <div className="mb-16">
        <div className="section-label">{label}</div>
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

export default function About() {
  return (
    <section id="about" className="section-bg">
      <div className="section-wrapper">
        <SectionHeader
          label="01 — About"
          title="Who I Am"
          description={
            <>
              A student obsessed with the intersection of hardware and software,
              <br />where electrons become instructions and systems become
              products.
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Education timeline */}
          <ScrollReveal variant="left">
            <h3 className="font-mono text-lg font-semibold text-text-primary mb-8 flex items-center gap-3">
              <span className="text-accent-DEFAULT opacity-60 text-sm">—</span>
              Education
            </h3>
            <Timeline items={EDUCATION} />
          </ScrollReveal>

          {/* Right: Skills */}
          <div className="space-y-10">
            <ScrollReveal variant="right">
              <h3 className="font-mono text-lg font-semibold text-text-primary mb-6 flex items-center gap-3">
                <span className="text-accent-DEFAULT opacity-60 text-sm">
                  —
                </span>
                Languages
              </h3>
              <motion.div
                variants={REVEAL_VARIANTS.stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-2"
              >
                {SKILLS.languages.map((skill) => (
                  <motion.div key={skill.label} variants={REVEAL_VARIANTS.up}>
                    <SkillTag
                      label={skill.label}
                      level={skill.level}
                      color="#00d4ff"
                      learning={skill.learning}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>

            <ScrollReveal variant="right" delay={0.1}>
              <h3 className="font-mono text-lg font-semibold text-text-primary mb-6 flex items-center gap-3">
                <span className="text-accent-DEFAULT opacity-60 text-sm">
                  —
                </span>
                Frameworks & Tools
              </h3>
              <motion.div
                variants={REVEAL_VARIANTS.stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-2"
              >
                {SKILLS.frameworks.map((skill) => (
                  <motion.div key={skill.label} variants={REVEAL_VARIANTS.up}>
                    <SkillTag
                      label={skill.label}
                      level={skill.level}
                      color="#7c3aed"
                      learning={skill.learning}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>

            <ScrollReveal variant="right" delay={0.2}>
              <h3 className="font-mono text-lg font-semibold text-text-primary mb-6 flex items-center gap-3">
                <span className="text-accent-DEFAULT opacity-60 text-sm">
                  —
                </span>
                Infrastructure & DevOps
              </h3>
              <motion.div
                variants={REVEAL_VARIANTS.stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-2"
              >
                {SKILLS.infra.map((skill) => (
                  <motion.div key={skill.label} variants={REVEAL_VARIANTS.up}>
                    <SkillTag
                      label={skill.label}
                      level={skill.level}
                      color="#00ff88"
                      learning={skill.learning}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>

            <ScrollReveal variant="right" delay={0.3}>
              <h3 className="font-mono text-lg font-semibold text-text-primary mb-6 flex items-center gap-3">
                <span className="text-accent-DEFAULT opacity-60 text-sm">
                  —
                </span>
                Hardware
              </h3>
              <motion.div
                variants={REVEAL_VARIANTS.stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-2"
              >
                {SKILLS.hardware.map((skill) => (
                  <motion.div key={skill.label} variants={REVEAL_VARIANTS.up}>
                    <SkillTag
                      label={skill.label}
                      level={skill.level}
                      color="#f59e0b"
                      learning={skill.learning}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
