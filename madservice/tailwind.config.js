/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3a7ebd',
        'button' : '#FFC736',
      }
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};