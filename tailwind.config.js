const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      green: colors.green,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      amber: colors.amber,
      rose: colors.rose,
      pink: colors.pink,
      violet: colors.violet,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
