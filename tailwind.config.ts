import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        'neon-purple': '#b347ff',
        'neon-pink': '#ff47b3',
        'neon-blue': '#47b3ff',
        'deep-purple': '#1a0030',
        'dark-bg': '#0a0010',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'text-flicker': 'textFlicker 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px #b347ff, 0 0 40px #b347ff44' },
          '50%': { boxShadow: '0 0 40px #b347ff, 0 0 80px #b347ff88, 0 0 100px #ff47b344' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        textFlicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%, 98%': { opacity: '0.6' },
          '97%, 99%': { opacity: '0.9' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at top, #2d0060 0%, #0a0010 60%)',
        'card-gradient': 'linear-gradient(135deg, rgba(179,71,255,0.1) 0%, rgba(255,71,179,0.05) 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(179,71,255,0.4) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}
export default config
