/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
      },
      colors: {
        textGray: '#5b5b5b',
      },
    },
  },
  plugins: [],
};
