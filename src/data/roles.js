// src/data/roles.js
// Single source of truth for typewriter identity system.
// Each entry maps one typed identity to its description, target section, and accent color.

export const ROLES = [
  {
    id: 'student',
    label: "Student",
    description:
      "Pursuing computer science and electrical engineering, bridging theory and practice through coursework, research, and relentless curiosity about how things work.",
    sectionId: 'about',
    sectionLabel: 'About Me',
    accentColor: '#00d4ff',
  },
  {
    id: 'software-architect',
    label: "Software Architect",
    description:
      "Designing scalable systems with clean abstractions — from microservice topologies to developer tooling and APIs that teams actually love to use.",
    sectionId: 'software',
    sectionLabel: 'View Projects',
    accentColor: '#a78bfa',
  },
  {
    id: 'hardware-engineer',
    label: "Hardware Engineer",
    description:
      "Crafting PCBs, embedded firmware, and silicon-level solutions where bits meet atoms and every milliwatt and millisecond counts.",
    sectionId: 'hardware',
    sectionLabel: 'View Hardware',
    accentColor: '#f59e0b',
  },
  {
    id: 'server-ops',
    label: "Server O&M",
    description:
      "Managing infrastructure with an uptime obsession — container orchestration, CI/CD pipelines, monitoring stacks, and incident response that prevents 3am pages.",
    sectionId: 'server-ops',
    sectionLabel: 'View Infrastructure',
    accentColor: '#00ff88',
  },
  {
    id: 'technical-writer',
    label: "Technical Writer",
    description:
      "Translating complex systems into clear documentation, guides, and articles that reduce cognitive load for the next engineer who picks up the work.",
    sectionId: 'writing',
    sectionLabel: 'Read Articles',
    accentColor: '#f472b6',
  },
];
