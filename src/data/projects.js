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
    accentColor: '#a78bfa',
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
      docs: 'https://github.com/PelerYuan/HaoCiKuaiJi/blob/master/README.md',
    },
    image: 'haocikuaiji',
    imageAlt: 'HaoCiKuaiJi vocabulary learning system screenshot',
    carousel: null,
  },
  {
    id: 'pelergame',
    title: 'PelerGame — Modular 2D Game',
    subtitle: 'Built during a Hackathon',
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

export const AI_PROJECTS = [
  {
    id: 'mindbloom',
    title: 'MindBloom — AI-Powered Mind Mapping System',
    bullets: [
      'Unlike conventional AI mind mapping tools that rely on summarization to generate complete maps upfront, MindBloom adopts a fundamentally different approach by avoiding automatic full-map construction, ensuring that users remain actively engaged in the thinking process rather than passively consuming generated structures',
      'MindBloom is designed to guide users through a step-by-step cognitive expansion process, encouraging deeper exploration of ideas and enabling more structured, intentional development of thoughts as the map evolves organically',
      'When a user inputs content into a node, a large language model dynamically performs semantic association and hierarchical decomposition, helping to surface related concepts, break down complex ideas, and suggest meaningful directions for further exploration',
    ],
    tags: ['LLM', 'React', 'Mind Mapping', 'AI'],
    accentColor: '#f472b6',
    status: 'in-developing',
    media: 'video',
    links: {},
  },
  {
    id: 'llm-router',
    title: 'LLM Router',
    description: `With the rise of AI agent frameworks such as OpenClaw, the demand for LLM tokens has been increasing rapidly. However, due to differences in task complexity, some tasks require more powerful and expensive models for extended reasoning, while others can be efficiently handled by lightweight and cost-effective models. Dynamically selecting the appropriate model to optimize cost has therefore become a key challenge.\n\nTo address this, LLM Router leverages a locally deployed lightweight model for fast task classification, routing each request to the most suitable model. This approach significantly reduces token consumption while fully utilizing local computational resources.`,
    tags: ['LLM', 'Python', 'Model Routing', 'Optimization'],
    accentColor: '#f59e0b',
    status: 'in-developing',
    media: 'svg',
    links: {},
  },
];

export const INNOVATION_PROJECTS = [
  {
    id: 'haocikuaiji-class',
    title: 'HaoCiKuaiJi – Class',
    description:
      'An Arduino-based extension for HaoCiKuaiJi that enables standalone vocabulary learning without a computer, making it suitable for classroom environments.',
    tags: ['Arduino', 'Embedded Systems', 'Circuit Design'],
    accentColor: '#00d4ff',
    links: { github: 'https://github.com/peler-little-pig/HaoCiKuaiJi-Class' },
    images: null,
  },
  {
    id: 'waterphoto',
    title: 'WaterPhoto',
    description:
      'An intelligent batch watermarking tool that automatically adapts watermark styles based on image regions to ensure visibility and clarity.',
    tags: ['Python', 'Computer Vision', 'Image Processing'],
    accentColor: '#a78bfa',
    links: {},
    images: ['water', 'example'],
  },
  {
    id: 'knowledge-share',
    title: 'Knowledge Share',
    description:
      'A web-based note sharing platform for classrooms, enabling efficient distribution of study materials with a powerful admin panel for bulk management.',
    tags: ['Python', 'Django', 'Full-Stack Development'],
    accentColor: '#00ff88',
    links: { github: 'https://github.com/PelerYuan/KnowledgeShare' },
    images: null,
  },
  {
    id: 'linguistable',
    title: 'Linguistable',
    description:
      'An online language learning platform that allows users to create multilingual tables for efficient comparison and analysis across different languages.',
    tags: ['Node.js', 'Full-Stack Development', 'RESTful API'],
    accentColor: '#f472b6',
    links: {},
    images: ['linguistable'],
  },
];
