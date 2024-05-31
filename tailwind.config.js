/** @type {import('tailwindcss').Config} */

module.exports = ({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3a7ebd',
        'button' : '#FFC736',
      }
    },
  },
  plugins: [],
});
