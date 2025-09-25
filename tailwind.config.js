/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'dm-sans-light': ['DM Sans', 'sans-serif'],
        'cooper-hewitt': ['Cooper Hewitt', 'sans-serif'],
        'cooper-hewitt-book': ['Cooper Hewitt', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
