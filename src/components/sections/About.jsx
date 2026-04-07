// src/components/sections/About.jsx
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ScrollReveal, { REVEAL_VARIANTS } from "../ui/ScrollReveal";
import SkillTag from "../ui/SkillTag";
import Timeline from "../ui/Timeline";
import { SKILLS } from "../../data/skills";
import { EDUCATION } from "../../data/writing";

const CERTIFICATES = [
  { name: 'Full Stack Open',                org: 'University of Helsinki', url: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/c7a724b3469fc9fc475a168d0936a3b0', img: '/cert-fullstack.png', color: '#00d4ff' },
  { name: 'Machine Learning Specialization', org: 'DeepLearning.AI',        url: 'https://www.coursera.org/account/accomplishments/specialization/PKT9W9Y20C2U',                              img: '/cert-ml.png',       color: '#a78bfa' },
  { name: 'CS50 Python',                    org: 'Harvard X',      url: 'https://courses.edx.org/certificates/7683dc7a77914ee3829850a77a4e5770',                                    img: '/cert-cs50py.png',   color: '#00ff88' },
  { name: 'CS50 Computer Science',          org: 'Harvard X',      url: 'https://courses.edx.org/certificates/88ad15951dbe404ea2dd768ec022bbdc',                                    img: '/cert-cs50cs.png',   color: '#f472b6' },
];

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
                      color="#a78bfa"
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

        {/* Certificates */}
        <div className="mt-16">
          <ScrollReveal variant="up">
            <h3 className="font-mono text-lg font-semibold text-text-primary mb-8 flex items-center gap-3">
              <span className="text-accent-DEFAULT opacity-60 text-sm">—</span>
              Certificates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              {CERTIFICATES.map((cert) => (
                <div
                  key={cert.name}
                  className="glass rounded-xl overflow-hidden flex flex-col h-full"
                  style={{ border: `1px solid ${cert.color}20` }}
                >
                  {/* Certificate image */}
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="w-full h-auto"
                  />
                  {/* Info + button */}
                  <div className="px-4 py-3 flex items-end justify-between gap-3 flex-1">
                    <div>
                      <p className="font-mono text-sm font-semibold text-text-primary leading-snug">{cert.name}</p>
                      <p className="font-mono text-xs text-text-muted mt-0.5">{cert.org}</p>
                    </div>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-medium transition-all"
                      style={{ color: cert.color, border: `1px solid ${cert.color}50`, background: `${cert.color}10` }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${cert.color}22`; e.currentTarget.style.boxShadow = `0 0 12px ${cert.color}33`; }}
                      onMouseLeave={e => { e.currentTarget.style.background = `${cert.color}10`; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <ExternalLink size={11} />
                      Show credential
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
