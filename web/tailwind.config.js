/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ['cupcake'],
  },
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
