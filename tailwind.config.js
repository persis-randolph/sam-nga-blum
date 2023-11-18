/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      cursor: {
        regular: 'url(./assets/Cursor_Regular.svg), pointer',
        hover: 'url(./assets/Cursor_Hover.svg), pointer'
      }
    }
  },
  plugins: []
}
