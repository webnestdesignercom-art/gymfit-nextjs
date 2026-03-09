/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gym-orange': '#F97316',
        'gym-navy':   '#0F172A',
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body:    ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}