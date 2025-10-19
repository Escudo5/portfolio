/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#00ff99',
          blue: '#00b4d8',
        },
      },
    },
  },
  plugins: [],
};
