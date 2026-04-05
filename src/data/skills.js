// src/data/skills.js

export const SKILLS = {
  languages: [
    { label: 'Python',     level: 90 },
    { label: 'TypeScript', level: 85, learning: true },
    { label: 'Java',       level: 75 },
    { label: 'C / C++',    level: 70 },
  ],
  frameworks: [
    { label: 'React & Express', level: 90 },
    { label: 'Django',          level: 85 },
    { label: 'Flask',           level: 80 },
    { label: 'FastAPI',         level: 70, learning: true },
  ],
  infra: [
    { label: 'Linux',            level: 90 },
    { label: 'Proxmox',          level: 80 },
    { label: 'Docker & Compose', level: 80 },
    { label: 'Networking',       level: 75 },
  ],
  hardware: [
    { label: 'Arduino', level: 95 },
    { label: 'ESP32',   level: 80, learning: true },
  ],
};
