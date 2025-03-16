/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red' : '#D21F30',
        'darkGray': '#222222',
        'lightGray': '#EBECEE',
      },
    },
  },
  plugins: [],
};
