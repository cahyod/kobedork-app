/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Use class strategy for dark mode - looks for [data-theme="dark"]
  theme: {
    extend: {},
  },
  plugins: [],
}