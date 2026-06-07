/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#020617',
          surface: '#0F172A',
          card: 'rgba(15, 23, 42, 0.75)',
          emerald: '#10B981',
          violet: '#8B5CF6',
          sky: '#38BDF8',
          success: '#34D399',
          warning: '#F59E0B',
          danger: '#EF4444',
          textPrimary: '#F8FAFC',
          textSecondary: '#94A3B8',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.15)',
        'glow-violet': '0 0 20px rgba(139, 92, 246, 0.15)',
        'glow-sky': '0 0 20px rgba(56, 189, 248, 0.15)',
      }
    },
  },
  plugins: [],
}
