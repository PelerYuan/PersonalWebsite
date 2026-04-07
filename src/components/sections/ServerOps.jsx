// src/components/sections/ServerOps.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ScrollReveal, { REVEAL_VARIANTS } from '../ui/ScrollReveal';
import TerminalCard from '../ui/TerminalCard';

const CONFIG_ITEMS = [
  { label: 'CPU',            value: 'Intel i7-10700',            color: '#00d4ff' },
  { label: 'GPU',            value: 'RTX 2060 Super + Tesla P4', color: '#a78bfa' },
  { label: 'Motherboard',    value: 'ROG MAXIMUS XII HERO',      color: '#00ff88' },
  { label: 'Memory',         value: '32GB x 2',                  color: '#f59e0b' },
  { label: 'Storage (SSD)',  value: '256GB + 512GB',              color: '#f472b6' },
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
  {
    era: 'Across the Ocean',
    color: '#f472b6',
    bottomImages: ['/f.jpg', '/g.jpg', '/h.jpg'],
    body: `Disassembled and shipped across the ocean over half a month, the entire system made its way to Australia piece by piece. When it finally arrived, I rebuilt it from the ground up—every component intact, undamaged, and ready to run again.`,
  },
];

function ServerTimeline() {
  return (
    <div>
      <ScrollReveal variant="up">
        <div className="mb-6">
          <span className="label-mono" style={{ color: '#00ff88' }}>— Journey</span>
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


// Boot timestamp anchor: 2026-04-07 00:00:00 UTC minus 126d 18h 37m 50s
const BOOT_TIME_MS = Date.UTC(2026, 3, 7, 0, 0, 0) - 10953470 * 1000;

function UptimeCounter() {
  const [elapsed, setElapsed] = useState(() => Math.floor((Date.now() - BOOT_TIME_MS) / 1000));

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - BOOT_TIME_MS) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const days    = Math.floor(elapsed / 86400);
  const hours   = Math.floor((elapsed % 86400) / 3600);
  const minutes = Math.floor((elapsed % 3600) / 60);
  const seconds = elapsed % 60;

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <ScrollReveal variant="up">
      <div
        className="mt-6 rounded-xl p-6 border"
        style={{
          borderColor: '#00ff8844',
          background: 'linear-gradient(135deg, #00ff8808 0%, #00ff8803 100%)',
          boxShadow: '0 0 32px #00ff8810, inset 0 0 32px #00ff8806',
        }}
      >
        {/* Label */}
        <div className="flex items-center gap-2 mb-5">
          <span
            className="inline-block w-2 h-2 rounded-full animate-pulse"
            style={{ background: '#00ff88', boxShadow: '0 0 6px #00ff88' }}
          />
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#00ff88' }}>
            System Uptime — Online &amp; Stable
          </span>
        </div>

        {/* Seven-segment display + labels */}
        <div className="flex items-end justify-center gap-1"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            color: '#00ff88',
            textShadow: '0 0 20px #00ff8888, 0 0 40px #00ff8844',
          }}
        >
          {/* DAYS */}
          <div className="flex flex-col items-center">
            <span style={{ fontSize: 'clamp(1.4rem, 4vw, 2.6rem)', lineHeight: 1, opacity: 0.45 }}>
              {String(days).padStart(3, '0')}
            </span>
            <span className="font-mono text-xs mt-4" style={{ color: '#00ff8866', letterSpacing: '0.1em', textShadow: 'none' }}>DAYS</span>
          </div>

          {/* colon after days */}
          <span style={{ fontSize: 'clamp(1.4rem, 4vw, 2.6rem)', lineHeight: 1, opacity: 0.4, paddingBottom: '1.8rem' }}>:</span>

          {/* HRS */}
          <div className="flex flex-col items-center">
            <span style={{ fontSize: 'clamp(1.4rem, 4vw, 2.6rem)', lineHeight: 1 }}>{pad(hours)}</span>
            <span className="font-mono text-xs mt-4" style={{ color: '#00ff8866', letterSpacing: '0.1em', textShadow: 'none' }}>HRS</span>
          </div>

          {/* colon */}
          <span style={{ fontSize: 'clamp(1.4rem, 4vw, 2.6rem)', lineHeight: 1, opacity: 0.4, paddingBottom: '1.8rem' }}>:</span>

          {/* MIN */}
          <div className="flex flex-col items-center">
            <span style={{ fontSize: 'clamp(1.4rem, 4vw, 2.6rem)', lineHeight: 1 }}>{pad(minutes)}</span>
            <span className="font-mono text-xs mt-4" style={{ color: '#00ff8866', letterSpacing: '0.1em', textShadow: 'none' }}>MIN</span>
          </div>

          {/* colon */}
          <span style={{ fontSize: 'clamp(1.4rem, 4vw, 2.6rem)', lineHeight: 1, opacity: 0.4, paddingBottom: '1.8rem' }}>:</span>

          {/* SEC */}
          <div className="flex flex-col items-center">
            <span style={{ fontSize: 'clamp(1.4rem, 4vw, 2.6rem)', lineHeight: 1 }}>{pad(seconds)}</span>
            <span className="font-mono text-xs mt-4" style={{ color: '#00ff8866', letterSpacing: '0.1em', textShadow: 'none' }}>SEC</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}


const FEATURED_DESIGNS = [
  {
    title: 'API-driven fan control for a datacenter GPU',
    color: '#f472b6',
    body: `The Tesla P4, originally designed for datacenter workloads, comes without active cooling. After adding a custom 3D-printed fan, a new challenge emerged: once the GPU was passed through to the PelerServer VM, the Proxmox host could no longer monitor its temperature to dynamically adjust fan speed.\n\nTo address this, I implemented a decoupled control approach. A custom API was developed on the host to manage the DIY fan, while a script running inside the VM monitors GPU temperature and invokes the API accordingly. This enables real-time, temperature-aware fan speed control despite the virtualization boundary.`,
    diagram: '/fan.svg',
    diagramWidth: '67%',
  },
  {
    title: 'Remote lighting control via SSH X11 Forwarding',
    color: '#00d4ff',
    body: `Using an ROG motherboard, I spent considerable time experimenting with various open-source drivers before successfully running OpenRGB on the host system.\n\nWith SSH X11 forwarding, I can seamlessly launch OpenRGB from my laptop and manage all chassis lighting in real time—without needing direct physical access to the machine.`,
    diagram: '/rgb.svg',
  },
];

function FeaturedDesign() {
  return (
    <div>
      <ScrollReveal variant="up">
        <div className="mb-8">
          <span className="label-mono" style={{ color: '#00ff88' }}>— Featured Design</span>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-12">
        {FEATURED_DESIGNS.map((item, i) => (
          <ScrollReveal key={i} variant="up">
            <div>
              <h3 className="text-base font-semibold mb-3 leading-snug" style={{ color: item.color }}>{item.title}</h3>
              <div className="text-text-secondary text-sm leading-relaxed space-y-3 mb-5">
                {item.body.split('\n\n').map((p, j) => <p key={j}>{p}</p>)}
              </div>
              <div className="mt-6 flex justify-center">
                <div style={{ width: item.diagramWidth ?? '100%' }}>
                  <img src={item.diagram} alt={item.title} className="w-full block" />
                </div>
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
        <div className="section-label" style={{ color: '#00d4ff' }}>
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

export default function ServerOps() {
  return (
    <section id="server-ops" className="section-bg border-t border-base-border/30">
      <div className="section-wrapper">
        <SectionHeader
          label="04 — Infrastructure"
          title="Server O&M"
          description="From planning to production. Built, deployed, and kept running."
        />

        {/* Journey timeline */}
        <ServerTimeline />

        {/* Divider */}
        <div className="border-t border-base-border/30 my-10" />

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

        {/* Uptime counter */}
        <UptimeCounter />

        {/* Divider */}
        <div className="border-t border-base-border/30 my-10" />

        {/* Featured Design */}
        <FeaturedDesign />

      </div>
    </section>
  );
}
