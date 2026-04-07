// src/data/writing.js

export const ARTICLES = [
  {
    id: 'grpc-streaming',
    title: 'gRPC Streaming in Go: Patterns That Actually Scale',
    excerpt:
      'Bidirectional streaming sounds simple until you hit backpressure, context cancellation, and connection reuse. Here is what production taught me.',
    tags: ['Go', 'gRPC', 'Backend'],
    date: '2025-11-14',
    readTime: '12 min',
    accentColor: '#a78bfa',
  },
  {
    id: 'pcb-signal-integrity',
    title: 'PCB Signal Integrity for the Software Engineer',
    excerpt:
      'Why your high-speed digital board is an analog problem in disguise. Impedance matching, via stubs, and the return path you forgot about.',
    tags: ['Hardware', 'PCB', 'Signal Integrity'],
    date: '2025-09-02',
    readTime: '18 min',
    accentColor: '#f59e0b',
  },
  {
    id: 'k8s-resource-tuning',
    title: 'Kubernetes Resource Requests: The Math Behind the Defaults',
    excerpt:
      'Requests and limits are not just throttles — they are scheduler signals. Mistuned requests cost real money and cause real outages.',
    tags: ['Kubernetes', 'Ops', 'Performance'],
    date: '2025-07-19',
    readTime: '10 min',
    accentColor: '#00ff88',
  },
  {
    id: 'rtos-latency',
    title: 'Measuring Real-Time Latency on FreeRTOS',
    excerpt:
      'How to instrument your RTOS tasks to find scheduling jitter, ISR overhead, and the cache effects you cannot see in the datasheet.',
    tags: ['Embedded', 'FreeRTOS', 'Performance'],
    date: '2025-05-28',
    readTime: '15 min',
    accentColor: '#00d4ff',
  },
  {
    id: 'docs-as-code',
    title: 'Docs-as-Code Done Right: Beyond the Buzzword',
    excerpt:
      'Static site generators and Markdown are table stakes. The hard part is versioning, ownership, and keeping docs honest when code changes fast.',
    tags: ['Documentation', 'DevEx', 'Process'],
    date: '2025-03-11',
    readTime: '8 min',
    accentColor: '#f472b6',
  },
  {
    id: 'long-exposure',
    title: 'Long Exposure Photography: A Programmer\'s Approach',
    excerpt:
      'Treating shutter speed, aperture, and ISO as controllable variables. How systematic experimentation made me a better photographer.',
    tags: ['Photography', 'Tutorial'],
    date: '2024-12-06',
    readTime: '6 min',
    accentColor: '#fb923c',
  },
];

export const EDUCATION = [
  {
    id: 'uq',
    school: 'The University of Queensland',
    degree: 'Bachelor of Engineering (Honours) / Master of Engineering — Electrical & Computer Engineering',
    period: 'Expected 2031',
    description: 'Dual degree in electrical and computer engineering, covering embedded systems, signal processing, and software architecture.',
    tags: ['ECE', 'Embedded Systems', 'Signal Processing'],
    isCurrent: true,
    crest: 'UQ',
  },
  {
    id: 'unsw-college',
    school: 'UNSW College',
    degree: 'Foundation Studies (Science)',
    period: 'November 2025',
    description: 'Completed with distinction.',
    gpa: '9.7 / 10',
    tags: ['Science', 'Mathematics', 'Foundation'],
    isCurrent: false,
    crest: 'UNSW',
  },
];
