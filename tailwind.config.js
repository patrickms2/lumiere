const colors = require('tailwindcss/colors');

module.exports = {
  jit: true,
  purge: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./node_modules/atmosphere-ui/**/*.vue"
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        brand: ['Pacifico', 'cursive'],
      },
      colors: {
        primary: {
          DEFAULT: '#1E90FF',
          '50': '#FFFFFF',
          '100': '#EAF5FF',
          '200': '#B7DBFF',
          '300': '#84C2FF',
          '400': '#51A9FF',
          '500': '#1E90FF',
          '600': '#0077EA',
          '700': '#005DB7',
          '800': '#004384',
          '900': '#002951'
        },
        amber: colors.amber,
        'warm-gray': colors.warmGray,
        orange: colors.orange,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
