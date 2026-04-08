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
      "End-to-end systems, thoughtful architecture, collaborative development, and ideas that drive real impact.",
    sectionId: 'software',
    sectionLabel: 'View Projects',
    accentColor: '#a78bfa',
  },
  {
    id: 'hardware-engineer',
    label: "Hardware Engineer",
    description:
      "Where software meets physics. PCB design, embedded firmware, and systems where every microsecond and milliwatt has a cost.",
    sectionId: 'hardware',
    sectionLabel: 'View Hardware',
    accentColor: '#f59e0b',
  },
  {
    id: 'server-ops',
    label: "Server O&M",
    description:
      "From planning to production. architected, built, deployed, and maintained systems with reliability in mind.",
    sectionId: 'server-ops',
    sectionLabel: 'View Infrastructure',
    accentColor: '#00ff88',
  },
  {
    id: 'technical-writer',
    label: "Technical Writer",
    description:
      "Turning complex ideas into clear, accessible explanations.",
    sectionId: 'writing',
    sectionLabel: 'Read Articles',
    accentColor: '#f472b6',
  },
];
