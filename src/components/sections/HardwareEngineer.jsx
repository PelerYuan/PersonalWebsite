// src/components/sections/HardwareEngineer.jsx
import { ExternalLink } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

// ─── Passion Since Childhood sub-section ─────────────────────────────────────
const CHILDHOOD_VIDEOS = [
  {
    title: "[20K+ Views] First Prize at China's 5th National Youth AI Innovation Challenge",
    thumb: '/thumb-ai-challenge.png',
    url: 'https://www.bilibili.com/video/BV1Yf4y1o7Z4/',
    color: '#00d4ff',
  },
  {
    title: 'A group of middle schoolers skipped class and flew thousands of kilometers to compete in VEX',
    thumb: '/thumb-vex.png',
    url: 'https://www.bilibili.com/video/BV1kM4y1c7Ue/',
    color: '#00ff88',
  },
];

const VIDEO_GROUPS = [
  {
    label: '[10K+ Views] Early Builds & Tutorials',
    videos: [
      { title: 'Python - Arduino Communication',             thumb: '/4.png', url: 'https://www.bilibili.com/video/BV1at4y187yf', color: '#00d4ff' },
      { title: 'Arduino Bluetooth Programming',              thumb: '/5.png', url: 'https://www.bilibili.com/video/BV1Se4y1Q7ZP', color: '#7c3aed' },
      { title: 'Ultrasonic Radar with Arduino (C++ & Java)', thumb: '/6.png', url: 'https://www.bilibili.com/video/BV1G94y1R7J3', color: '#00ff88' },
    ],
  },
  {
    label: '[1K+ Views] Weird & Wild Experiments',
    videos: [
      { title: 'High-Voltage Bug Zapper Boost Circuit',  thumb: '/1.png', url: 'https://www.bilibili.com/video/BV1nY411X7Au', color: '#f472b6' },
      { title: 'First Bluetooth-Controlled Arduino Car', thumb: '/2.png', url: 'https://www.bilibili.com/video/BV1W34y1p7kg', color: '#f59e0b' },
      { title: 'DIY Electromagnetic Launcher',           thumb: '/3.png', url: 'https://www.bilibili.com/video/BV16N4y157co', color: '#fb923c' },
    ],
  },
];

function VideoThumb({ title, thumb, url, color, small = false }) {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full overflow-hidden rounded-xl"
        style={{ aspectRatio: '16/9' }}
      >
        <img
          src={thumb}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 transition-opacity duration-300" style={{ background: 'rgba(0,0,0,0.35)' }} />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(0,0,0,0.25)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div
            className="flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
            style={{
              width: small ? 40 : 64,
              height: small ? 40 : 64,
              background: 'rgba(255,255,255,0.15)',
              border: '2px solid rgba(255,255,255,0.6)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <svg width={small ? 14 : 22} height={small ? 14 : 22} viewBox="0 0 24 24" fill="white">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          </div>
          {!small && (
            <span className="font-mono text-xs font-medium uppercase" style={{ color: 'rgba(255,255,255,0.75)', letterSpacing: '0.15em' }}>
              Watch on Bilibili
            </span>
          )}
        </div>
      </a>
      <p className="font-mono text-xs font-semibold mt-2" style={{ color }}>{title}</p>
    </div>
  );
}

function PassionSinceChildhood() {
  return (
    <div>
      <ScrollReveal variant="up">
        <div className="mb-6">
          <span className="label-mono" style={{ color: '#f59e0b' }}>— Passion Since Childhood</span>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-10">
        {CHILDHOOD_VIDEOS.map((video, i) => (
          <ScrollReveal key={i} variant="up">
            <div>
              <p className="font-mono text-sm font-semibold mb-3" style={{ color: video.color }}>
                {video.title}
              </p>
              <VideoThumb {...video} />
            </div>
          </ScrollReveal>
        ))}
      </div>

      {VIDEO_GROUPS.map((group, gi) => (
        <ScrollReveal key={gi} variant="up">
          <div className="mt-12">
            <p className="font-mono text-xs mb-4" style={{ color: '#64748b' }}>{group.label}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {group.videos.map((video, vi) => (
                <VideoThumb key={vi} {...video} small />
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

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

      {/* Learn More button */}
      <ScrollReveal variant="up">
        <div className="flex justify-start mt-2 mb-8">
          <a
            href="https://page.peler.top/ExperimentSystemDoc/#/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all"
            style={{
              color: '#f59e0b',
              border: '1px solid rgba(245,158,11,0.4)',
              background: 'rgba(245,158,11,0.08)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(245,158,11,0.18)';
              e.currentTarget.style.boxShadow = '0 0 14px rgba(245,158,11,0.25)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(245,158,11,0.08)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <ExternalLink size={13} />
            Learn More
          </a>
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

        {/* Divider */}
        <div className="border-t border-base-border/30 my-16" />

        {/* Passion Since Childhood sub-section */}
        <PassionSinceChildhood />

      </div>
    </section>
  );
}
