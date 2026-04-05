// src/components/sections/ServerOps.jsx
import { motion } from 'framer-motion';
import ScrollReveal, { REVEAL_VARIANTS } from '../ui/ScrollReveal';
import TerminalCard from '../ui/TerminalCard';

const SERVICES = [
  { name: 'nginx-proxy', status: 'active', uptime: '47d 13h', desc: 'Reverse proxy + TLS' },
  { name: 'prometheus', status: 'active', uptime: '47d 13h', desc: 'Metrics collection' },
  { name: 'grafana', status: 'active', uptime: '45d 02h', desc: 'Dashboards & alerts' },
  { name: 'postgres@14', status: 'active', uptime: '47d 13h', desc: 'Primary database' },
  { name: 'redis', status: 'active', uptime: '47d 13h', desc: 'Cache + pubsub' },
  { name: 'ci-runner', status: 'active', uptime: '12d 07h', desc: 'GitLab CI executor' },
];

const INFRA_ITEMS = [
  { label: 'Container Runtime', value: 'Docker + Containerd', color: '#00ff88' },
  { label: 'Orchestration', value: 'Kubernetes v1.29', color: '#00d4ff' },
  { label: 'CI/CD', value: 'GitLab CI + ArgoCD', color: '#7c3aed' },
  { label: 'Monitoring', value: 'Prometheus + Grafana', color: '#f59e0b' },
  { label: 'Storage', value: 'Ceph + MinIO', color: '#f472b6' },
  { label: 'DNS/CDN', value: 'Cloudflare', color: '#fb923c' },
];

function TerminalLine({ symbol = '●', name, status, uptime, desc }) {
  const isActive = status === 'active';
  return (
    <div className="flex items-start gap-3 text-xs leading-relaxed">
      <span style={{ color: isActive ? '#00ff88' : '#ff5f57' }} className="mt-0.5 shrink-0">
        {symbol}
      </span>
      <div className="flex-1 min-w-0">
        <span className="text-text-primary font-semibold">{name}</span>
        <span className="text-text-muted ml-2">
          {status} — {uptime} — {desc}
        </span>
      </div>
    </div>
  );
}

function SectionHeader({ label, title, description }) {
  return (
    <ScrollReveal variant="up">
      <div className="mb-16">
        <div className="section-label" style={{ color: '#00ff88' }}>
          {label}
        </div>
        <h2 className="section-heading">{title}</h2>
        {description && (
          <p className="text-text-secondary max-w-2xl mt-4 leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-[#00ff88] to-transparent rounded" />
      </div>
    </ScrollReveal>
  );
}

export default function ServerOps() {
  return (
    <section id="server-ops" className="section-bg border-t border-base-border/30">
      <div className="section-wrapper">
        <SectionHeader
          label="04 — Infrastructure"
          title="Server O&M"
          description="Systems that stay up. Pipelines that ship. Monitoring that means something when it pages you at 3am."
        />

        <motion.div
          variants={REVEAL_VARIANTS.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Service status terminal */}
          <motion.div variants={REVEAL_VARIANTS.left}>
            <TerminalCard title="ops@homelab — systemctl status">
              <div className="space-y-3">
                <div className="text-[#00ff88] text-xs mb-4 opacity-70">
                  $ systemctl list-units --state=active
                </div>
                {SERVICES.map((svc) => (
                  <TerminalLine
                    key={svc.name}
                    name={svc.name}
                    status={svc.status}
                    uptime={svc.uptime}
                    desc={svc.desc}
                  />
                ))}
                <div className="border-t border-base-border/50 pt-3 text-text-muted text-xs">
                  6 units loaded, 6 active, 0 failed
                </div>
              </div>
            </TerminalCard>
          </motion.div>

          {/* Stack overview terminal */}
          <motion.div variants={REVEAL_VARIANTS.right}>
            <TerminalCard title="ops@homelab — stack info">
              <div className="space-y-3">
                <div className="text-[#00ff88] text-xs mb-4 opacity-70">
                  $ infra-cli describe-stack --env prod
                </div>
                {INFRA_ITEMS.map(({ label, value, color }) => (
                  <div key={label} className="flex items-center gap-3 text-xs">
                    <span className="text-text-muted w-28 shrink-0 font-mono">{label}</span>
                    <span className="text-base-muted opacity-50">·</span>
                    <span className="font-mono font-medium" style={{ color }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </TerminalCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
