/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0a0a0f',
          surface: '#0d0d14',
          elevated: '#12121c',
          border: '#1e1e2e',
          muted: '#2a2a3e',
        },
        accent: {
          DEFAULT: '#00d4ff',
          dim: '#00a8cc',
          glow: '#00d4ff33',
          subtle: '#00d4ff0d',
        },
        text: {
          primary: '#e8e8f0',
          secondary: '#9090b0',
          muted: '#505070',
          accent: '#00d4ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1' }],
        hero: ['clamp(1.25rem, 3vw, 1.75rem)', { lineHeight: '1.4' }],
      },
      boxShadow: {
        'glow-sm': '0 0 12px #00d4ff33',
        glow: '0 0 24px #00d4ff4d',
        'glow-lg': '0 0 48px #00d4ff66',
        glass: 'inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      animation: {
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 16px #00d4ff4d, 0 0 32px #00d4ff26',
          },
          '50%': {
            boxShadow: '0 0 28px #00d4ff80, 0 0 56px #00d4ff40',
          },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(8px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
