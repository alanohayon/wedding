import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0F',
          secondary: '#12121A',
          tertiary: '#1A1A26',
        },
        accent: {
          primary: '#3B82F6',
          hover: '#2563EB',
          secondary: '#8B5CF6',
          success: '#10B981',
          warning: '#F59E0B',
          // Zone 1 - Violet lumineux
          violet: '#A855F7',
          'violet-bright': '#C084FC',
          'violet-glow': '#7C3AED',
          // Zone 2 - Vert électrique
          green: '#00FF88',
          'green-bright': '#34FFB0',
          'green-deep': '#059669',
          'green-electric': '#10FF90',
        },
        txt: {
          primary: '#F1F5F9',
          secondary: '#94A3B8',
          tertiary: '#64748B',
          muted: '#475569',
        },
        brd: {
          subtle: 'rgba(255, 255, 255, 0.06)',
          hover: 'rgba(255, 255, 255, 0.12)',
          accent: 'rgba(59, 130, 246, 0.3)',
          violet: 'rgba(168, 85, 247, 0.3)',
          green: 'rgba(0, 255, 136, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h2': ['44px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'sm': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1.4' }],
      },
      borderRadius: {
        'card': '16px',
        'btn': '10px',
        'pill': '9999px',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(59, 130, 246, 0.08)',
        'glow-md': '0 0 40px rgba(59, 130, 246, 0.12)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.15)',
        'glow-violet': '0 0 30px rgba(168, 85, 247, 0.15)',
        'glow-violet-md': '0 0 50px rgba(168, 85, 247, 0.2)',
        'glow-violet-lg': '0 0 80px rgba(168, 85, 247, 0.25)',
        'glow-green': '0 0 30px rgba(0, 255, 136, 0.12)',
        'glow-green-md': '0 0 50px rgba(0, 255, 136, 0.18)',
        'glow-green-lg': '0 0 80px rgba(0, 255, 136, 0.22)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
        'gradient-violet': 'linear-gradient(135deg, #8B5CF6, #C084FC)',
        'gradient-green': 'linear-gradient(135deg, #059669, #00FF88)',
        'gradient-hero': 'radial-gradient(ellipse at 50% 0%, rgba(168, 85, 247, 0.12) 0%, transparent 60%)',
        'gradient-section': 'radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.04) 0%, transparent 70%)',
        'gradient-section-green': 'radial-gradient(ellipse at 50% 30%, rgba(0, 255, 136, 0.06) 0%, transparent 60%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-right': 'slideRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marqueeReverse 40s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'pulse-glow-violet': 'pulseGlowViolet 4s ease-in-out infinite',
        'pulse-glow-green': 'pulseGlowGreen 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
        pulseGlowViolet: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        pulseGlowGreen: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config
