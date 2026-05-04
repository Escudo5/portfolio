/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4f46e5',
          secondary: '#0ea5e9',
          accent: '#8b5cf6',
          surface: '#eef2ff',
          darkSurface: '#0f172a',
        },
      },
    },
  },
  plugins: [],
};
