/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark violet theme matching logo
        dark: '#0A0A0F', // Deep dark background
        darkPurple: '#1A0A2E', // Dark purple base
        purple: '#9333EA', // Primary purple (logo accent)
        violet: '#7C3AED', // Violet accent
        lightPurple: '#A855F7', // Light purple for highlights
        orange: '#FF6B35', // Orange for SCALE text
        white: '#FFFFFF',
        gray: '#9CA3AF', // Light gray for secondary text
        darkGray: '#4B5563', // Dark gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'xl': '20px',
      },
    },
  },
  plugins: [],
}

