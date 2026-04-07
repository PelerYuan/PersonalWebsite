// src/components/sections/ServerOps.jsx
import { motion } from 'framer-motion';
import ScrollReveal, { REVEAL_VARIANTS } from '../ui/ScrollReveal';
import TerminalCard from '../ui/TerminalCard';

const CONFIG_ITEMS = [
  { label: 'CPU',            value: 'Intel i7-10700',            color: '#00d4ff' },
  { label: 'GPU',            value: 'RTX 2060 Super + Tesla P4', color: '#7c3aed' },
  { label: 'Motherboard',    value: 'ROG MAXIMUS XII HERO',      color: '#00ff88' },
  { label: 'Memory',         value: '32GB × 2',                  color: '#f59e0b' },
  { label: 'Storage (SSD)',  value: '256GB, 512GB',              color: '#f472b6' },
  { label: 'Storage (HDD)',  value: '1TB + 3TB',                 color: '#fb923c' },
  { label: 'Power Supply',   value: '850W',                      color: '#00d4ff' },
];

const VMS = [
  { name: 'PelerStorage', desc: 'OMV-based NAS, providing NFS storage for VM expansion' },
  { name: 'PelerNetwork', desc: 'OpenWRT router handling network auth and Cloudflare Tunnel' },
  { name: 'PelerAI',      desc: 'Ubuntu Server with GPU passthrough for local AI workloads' },
  { name: 'PelerServer',  desc: 'Ubuntu host running Docker services (media, ebooks, manga)' },
  { name: 'PelerClaw',    desc: 'Isolated environment for running OpenClaw with file safety' },
];

// ─── Journey Timeline ─────────────────────────────────────────────────────────
const TIMELINE_ENTRIES = [
  {
    era: 'Early Exploration',
    color: '#00d4ff',
    sideImage: '/a.jpg',
    body: `Cloud servers eventually stopped being enough. Out of curiosity, I repurposed an old gaming PC and, with some trial-and-error port forwarding, brought my first self-hosted server online. It wasn't perfect—but it worked. Soon, it became the backbone for late-night Minecraft sessions with friends, and more importantly, my first real step into building systems of my own.`,
  },
  {
    era: 'Continuous Learning',
    color: '#00ff88',
    sideImage: '/b.png',
    body: `That initial curiosity turned into something more serious. In my spare time, I began helping maintain the school's computer lab, gaining hands-on experience with hardware, troubleshooting, and system upkeep. Along the way, I was guided by a teacher who was a seasoned home lab builder—someone who showed me what was possible beyond just "making things work."`,
  },
  {
    era: 'Building My Own System',
    color: '#f59e0b',
    bottomImages: ['/c.jpg', '/d.jpg', '/e.jpg'],
    body: `After graduating from high school, I decided to build something truly mine. Starting from hardware sourcing—mixing existing components with carefully selected second-hand parts—I designed and assembled a server from the ground up. What began as scattered pieces gradually became a cohesive system: one that not only delivers solid performance, but also reflects a deliberate focus on structure, reliability, and design.`,
  },
];

function ServerTimeline() {
  return (
    <div>
      <ScrollReveal variant="up">
        <div className="mb-8">
          <span className="label-mono" style={{ color: '#7c3aed' }}>— Journey</span>
        </div>
      </ScrollReveal>

      <div className="relative flex flex-col gap-0">
        {TIMELINE_ENTRIES.map((entry, i) => (
          <ScrollReveal key={i} variant="up">
            <div className="relative flex gap-6 pb-10">
              {/* Timeline spine */}
              <div className="flex flex-col items-center" style={{ minWidth: 20 }}>
                <div
                  className="w-3 h-3 rounded-full mt-1 shrink-0"
                  style={{ background: entry.color, boxShadow: `0 0 8px ${entry.color}88` }}
                />
                {i < TIMELINE_ENTRIES.length - 1 && (
                  <div
                    className="w-px flex-1 mt-2"
                    style={{ background: `linear-gradient(to bottom, ${entry.color}55, transparent)` }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <span
                  className="font-mono text-xs font-semibold uppercase"
                  style={{ color: entry.color, letterSpacing: '0.12em' }}
                >
                  {entry.era}
                </span>

                {/* Text + optional side image */}
                {entry.sideImage ? (
                  <div className="flex gap-4 mt-3 items-start">
                    <p className="text-text-secondary text-sm leading-relaxed flex-1">
                      {entry.body}
                    </p>
                    <img
                      src={entry.sideImage}
                      alt={entry.era}
                      className="rounded-lg object-cover shrink-0"
                      style={{ width: 120, height: 90, border: `1px solid ${entry.color}33` }}
                    />
                  </div>
                ) : (
                  <p className="text-text-secondary text-sm leading-relaxed mt-3">
                    {entry.body}
                  </p>
                )}

                {/* Bottom image grid */}
                {entry.bottomImages && (
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {entry.bottomImages.map((src, j) => (
                      <img
                        key={j}
                        src={src}
                        alt={`${entry.era} ${j + 1}`}
                        className="w-full rounded-lg object-cover"
                        style={{ aspectRatio: '4/3', border: `1px solid ${entry.color}33` }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
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

        {/* Divider */}
        <div className="border-t border-base-border/30 my-16" />

        {/* Journey timeline */}
        <ServerTimeline />

        {/* Divider */}
        <div className="border-t border-base-border/30 my-16" />

        {/* Robust Virtualization Platform sub-section */}
        <ScrollReveal variant="up">
          <div className="mb-8">
            <span className="label-mono" style={{ color: '#00ff88' }}>— Robust Virtualization Platform</span>
          </div>
        </ScrollReveal>

        <motion.div
          variants={REVEAL_VARIANTS.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6"
        >
          {/* Configuration terminal */}
          <motion.div variants={REVEAL_VARIANTS.left}>
            <TerminalCard title="peler@homelab — Configuration">
              <div className="space-y-3">
                <div className="text-[#00ff88] text-xs mb-4 opacity-70">
                  $ cat /etc/server/hardware.conf
                </div>
                {CONFIG_ITEMS.map(({ label, value, color }) => (
                  <div key={label} className="flex items-center gap-3 text-xs">
                    <span className="text-text-muted w-36 shrink-0 font-mono">{label}</span>
                    <span className="text-base-muted opacity-50">·</span>
                    <span className="font-mono font-medium" style={{ color }}>{value}</span>
                  </div>
                ))}
              </div>
            </TerminalCard>
          </motion.div>

          {/* Virtual Machines terminal */}
          <motion.div variants={REVEAL_VARIANTS.right}>
            <TerminalCard title="peler@homelab — Virtual Machines &amp; Services">
              <div className="space-y-3">
                <div className="text-[#00ff88] text-xs mb-4 opacity-70">
                  $ virsh list --all
                </div>
                {VMS.map((vm) => (
                  <div key={vm.name} className="flex items-start gap-3 text-xs leading-relaxed">
                    <span style={{ color: '#00ff88' }} className="mt-0.5 shrink-0">●</span>
                    <div className="flex-1 min-w-0">
                      <span className="text-text-primary font-semibold">{vm.name}</span>
                      <span className="text-text-muted ml-2">{vm.desc}</span>
                    </div>
                  </div>
                ))}
                <div className="border-t border-base-border/50 pt-3 text-text-muted text-xs">
                  5 units loaded, 5 active, 0 failed
                </div>
              </div>
            </TerminalCard>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
