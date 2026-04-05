// src/data/projects.js

export const FEATURED_PROJECTS = [
  {
    id: 'quiz-system',
    title: 'Full-Stack Exam Management System',
    bullets: [
      'Architected a web-based platform using React, Express.js, and MongoDB',
      'Implemented exam creation, editing, and management for instructors',
      'Developed analytics and tracking to monitor individual student performance',
      'Designed feedback mechanisms enabling instructors to respond to students',
      'Coordinated a small development team, managing task distribution',
      'Deployed and maintained for practical use in real classroom environments',
    ],
    tags: ['React', 'Express.js', 'MongoDB', 'Full-Stack'],
    accentColor: '#7c3aed',
    links: {
      github: 'https://github.com/PelerYuan/QuizSystemV2',
      demo: 'https://quiz.peler.top',
    },
    image: 'quiz',
    imageAlt: 'Exam Management System screenshot',
    carousel: null,
  },
  {
    id: 'haocikuaiji',
    title: 'HaoCiKuaiJi — Vocabulary Learning System',
    bullets: [
      'Architected a Python application with MVC-style separation',
      'Implemented vocabulary management and learning workflows',
      'Designed system structure for extensibility and maintainability',
      'Built an Arduino companion device to enhance learning interaction',
      'Explored software-hardware integration for educational applications',
      'Documented system design and implementation for future extension',
    ],
    tags: ['Python', 'Arduino', 'Software Architecture', 'Embedded Systems'],
    accentColor: '#00ff88',
    links: {
      github: 'https://github.com/PelerYuan/HaoCiKuaiJi',
      docs: 'https://page.peler.top/HaoCiKuaiJi',
    },
    image: 'haocikuaiji',
    imageAlt: 'HaoCiKuaiJi vocabulary learning system screenshot',
    carousel: null,
  },
  {
    id: 'pelergame',
    title: 'PelerGame — Modular 2D Game',
    bullets: [
      'Built core systems: player interaction, combat, and UI',
      'Structured a modular architecture (map, GUI, objects, screens, data)',
      'Enabled highly customizable configuration (e.g., maps, weapons, bullets)',
      'Wrote and maintained documentation for developers and players',
      'Packaged and released publicly as a distributable open-source game',
    ],
    tags: ['Python', 'Game Development', 'Hackathon', 'Award-winning'],
    accentColor: '#f59e0b',
    links: {
      github: 'https://github.com/PelerYuan/PelerGame',
      website: 'https://peler.top/html/PelerGame/',
    },
    image: 'pelergame',
    imageAlt: 'PelerGame screenshots',
    carousel: [
      { file: '1',  caption: 'Splash Screen' },
      { file: '3',  caption: 'Gameplay Overview' },
      { file: '7',  caption: 'Fight With Enemies' },
      { file: '8',  caption: 'Skill Activation' },
      { file: '12', caption: 'Shop Interaction' },
      { file: '17', caption: 'Weapon System' },
    ],
  },
];

export const SOFTWARE_PROJECTS = [
  {
    id: 'nexus-gateway',
    title: 'Nexus API Gateway',
    description:
      'High-throughput API gateway with dynamic routing, rate limiting, and distributed tracing. Handles 50k+ req/s with sub-5ms p99 latency.',
    tags: ['Go', 'gRPC', 'Redis', 'Prometheus'],
    accentColor: '#7c3aed',
    links: { github: '#', demo: '#' },
    status: 'Production',
  },
  {
    id: 'orbit-cli',
    title: 'Orbit CLI',
    description:
      'Developer toolchain for managing microservice deployments locally. Declarative YAML config, live-reload, and one-command environment spin-up.',
    tags: ['Python', 'Docker', 'Click', 'YAML'],
    accentColor: '#00d4ff',
    links: { github: '#' },
    status: 'Open Source',
  },
  {
    id: 'arc-design-system',
    title: 'Arc Design System',
    description:
      'Component library and design token system built for internal tooling. Radix UI primitives with a custom dark theme and accessibility-first defaults.',
    tags: ['React', 'TypeScript', 'Radix UI', 'Storybook'],
    accentColor: '#f472b6',
    links: { github: '#', demo: '#' },
    status: 'Internal',
  },
  {
    id: 'vector-sync',
    title: 'VectorSync',
    description:
      'Real-time data pipeline for syncing embedding vectors between ML services and vector databases. Supports Pinecone, Weaviate, and pgvector.',
    tags: ['Python', 'Kafka', 'FastAPI', 'asyncio'],
    accentColor: '#f59e0b',
    links: { github: '#' },
    status: 'Beta',
  },
];

export const HARDWARE_PROJECTS = [
  {
    id: 'sentinel-board',
    title: 'Sentinel v2 MCU Board',
    description:
      'Custom STM32H7 development board with CAN FD, isolated RS-485, dual Ethernet, and 8-layer impedance-controlled PCB. Designed for industrial IoT edge nodes.',
    tags: ['KiCad', 'STM32H7', 'CAN FD', '8-layer PCB'],
    accentColor: '#f59e0b',
    specs: ['148MHz ARM Cortex-M7', '1MB Flash / 1MB SRAM', 'IEC 61000-4-2 ESD'],
  },
  {
    id: 'pulse-fw',
    title: 'Pulse Firmware OS',
    description:
      'Minimal RTOS layer on FreeRTOS for bare-metal sensor nodes. Cooperative scheduling, deterministic ISR latency <2μs, and OTA update support over BLE.',
    tags: ['C', 'FreeRTOS', 'BLE', 'OTA'],
    accentColor: '#00ff88',
    specs: ['2μs ISR latency', 'Nordic nRF52840', 'BLE 5.3'],
  },
  {
    id: 'solarnode',
    title: 'SolarNode Power Controller',
    description:
      'MPPT solar charge controller with battery management, load shedding, and remote telemetry via LoRaWAN. Deployed in 3 off-grid monitoring stations.',
    tags: ['Altium', 'MPPT', 'LoRaWAN', 'Python'],
    accentColor: '#fb923c',
    specs: ['98.2% MPPT efficiency', '3 deployed units', 'LoRa 915MHz'],
  },
];
