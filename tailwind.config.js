/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FAFBFF',
        'bg-secondary': '#F0F2FA',
        'bg-card': '#FFFFFF',
        'accent-primary': '#6C3CE9',
        'accent-secondary': '#FF6B6B',
        'text-primary': '#1A1A2E',
        'text-muted': '#6B7A99',
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'bounce-slow': 'bounce 2s infinite',
        'aurora': 'aurora 12s ease-in-out infinite',
        'aurora-reverse': 'auroraReverse 15s ease-in-out infinite',
        'aurora-slow': 'auroraSlow 18s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(108,60,233,0.3), 0 0 10px rgba(108,60,233,0.15)' },
          '50%': { boxShadow: '0 0 20px rgba(108,60,233,0.4), 0 0 40px rgba(108,60,233,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        auroraReverse: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-40px, 30px) scale(1.15)' },
          '66%': { transform: 'translate(25px, -40px) scale(0.85)' },
        },
        auroraSlow: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, 30px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
