// src/components/sections/HardwareEngineer.jsx
import ScrollReveal from '../ui/ScrollReveal';

// ─── Section Header ───────────────────────────────────────────────────────────
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

// ─── Real-World Deployment sub-section ───────────────────────────────────────
function RealWorldDeployment() {
  return (
    <div>
      {/* Sub-section label */}
      <ScrollReveal variant="up">
        <div className="mb-6">
          <span className="label-mono" style={{ color: '#f59e0b' }}>— Real-World Deployment</span>
        </div>
      </ScrollReveal>

      {/* Confidentiality notice */}
      <ScrollReveal variant="up">
        <p className="text-text-secondary text-sm leading-relaxed mb-8">
          Employed by a PhD researcher at Southeast University to design and develop a drilling rig
          experimental system from the ground up. Due to confidentiality requirements, only the
          overall system architecture and several key components are presented here; the project
          source code is not publicly available.
        </p>
      </ScrollReveal>

      {/* System diagram */}
      <ScrollReveal variant="up">
        <div
          className="glass rounded-xl p-5 mb-8"
          style={{ border: '1px solid rgba(245,158,11,0.15)', boxShadow: '0 0 40px rgba(245,158,11,0.04)' }}
        >
          {/* Diagram title */}
          <div className="mb-3">
            <span className="font-mono text-xs font-semibold" style={{ color: '#f59e0b' }}>
              Drilling Experiment System Architecture
            </span>
          </div>
          <img
            src="/figure.svg"
            alt="Drilling Experiment System Architecture"
            className="w-full h-auto block"
            style={{ borderRadius: '0.5rem' }}
          />
        </div>
      </ScrollReveal>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function HardwareEngineer() {
  return (
    <section id="hardware" className="section-bg border-t border-base-border/30">
      <div className="section-wrapper">
        <SectionHeader
          label="03 — Hardware"
          title="Hardware Engineering"
          description={
            <>
              Where software meets physics. PCB design, embedded firmware,
              <br />
              and systems where every microsecond and milliwatt has a cost.
            </>
          }
        />

        {/* Real-World Deployment sub-section */}
        <RealWorldDeployment />

      </div>
    </section>
  );
}
