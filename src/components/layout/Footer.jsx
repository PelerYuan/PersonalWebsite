// src/components/layout/Footer.jsx
import { Mail, ExternalLink } from 'lucide-react';

// GitHub SVG since lucide-react removed it
function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
import { scrollToSection } from '../../hooks/useLenis';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/', icon: GithubIcon },
  { label: 'Email', href: 'mailto:xingjian@example.com', icon: Mail },
];

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'software', label: 'Software' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'server-ops', label: 'Ops' },
  { id: 'writing', label: 'Writing' },
  { id: 'photography', label: 'Photography' },
];

export default function Footer() {
  return (
    <footer className="border-t border-base-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-mono text-accent-DEFAULT text-glow font-bold tracking-widest text-sm">
              dev<span className="text-text-muted">.peler.top</span>
            </span>
            <p className="text-text-muted text-xs font-mono mt-1">
              Xingjian Yuan (Peler)
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-xs font-mono text-text-muted hover:text-accent-DEFAULT transition-colors tracking-wider uppercase focus:outline-none"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-text-muted hover:text-accent-DEFAULT transition-colors rounded-lg hover:bg-accent-subtle"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-base-border/50 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-text-muted text-xs font-mono">
            © {new Date().getFullYear()} Xingjian Yuan. All rights reserved.
          </p>
          <p className="text-text-muted text-xs font-mono opacity-50">
            Built with React + Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
