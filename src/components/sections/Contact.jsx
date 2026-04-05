// src/components/sections/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, X } from 'lucide-react';
import ScrollReveal, { REVEAL_VARIANTS } from '../ui/ScrollReveal';
import GlowButton from '../ui/GlowButton';

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const SOCIAL = [
  {
    label: 'GitHub',
    handle: '@xingjian-yuan',
    href: 'https://github.com/',
    icon: GithubIcon,
    color: '#e8e8f0',
  },
  {
    label: 'Email',
    handle: 'xingjian@example.com',
    href: 'mailto:xingjian@example.com',
    icon: Mail,
    color: '#00d4ff',
  },
  {
    label: 'X / Twitter',
    handle: '@xingjian_y',
    href: 'https://x.com/',
    icon: X,
    color: '#1d9bf0',
  },
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

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — wire up to your preferred form endpoint
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const inputClass =
    'w-full bg-base-elevated border border-base-border rounded-lg px-4 py-3 text-sm text-text-primary font-mono placeholder-text-muted focus:outline-none focus:border-accent-DEFAULT/60 transition-colors';

  return (
    <section id="contact" className="section-bg border-t border-base-border/30">
      <div className="section-wrapper">
        <SectionHeader
          label="07 — Contact"
          title="Get in Touch"
          description="Have a project in mind, a question about my work, or just want to connect? I read every message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Social links */}
          <ScrollReveal variant="left">
            <h3 className="font-mono text-base font-semibold text-text-primary mb-6">
              Find me online
            </h3>
            <motion.div
              variants={REVEAL_VARIANTS.stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {SOCIAL.map(({ label, handle, href, icon: Icon, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={REVEAL_VARIANTS.left}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl border border-base-border hover:border-white/10 transition-colors group"
                >
                  <div
                    className="p-2.5 rounded-lg shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-text-primary font-mono text-sm font-medium">{label}</p>
                    <p className="text-text-muted text-xs font-mono">{handle}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <div className="mt-10 p-5 glass rounded-xl border border-accent-glow">
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="text-accent-DEFAULT font-mono">Open to opportunities</span> — internships,
                research collaborations, and interesting side projects. Response time: typically within 48 hours.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal variant="right">
            <h3 className="font-mono text-base font-semibold text-text-primary mb-6">
              Send a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label-mono block mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="label-mono block mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="label-mono block mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="What's on your mind?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <GlowButton type="submit" filled className="w-full justify-center">
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </GlowButton>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
