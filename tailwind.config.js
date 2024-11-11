/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'home-bg': '#FAF3E4',
        'home-text': '#4E2526',
        'dark-white': '#999',
        'grey_' : '#808080'
      },
      fontFamily: {
        'klein': ['Klein', 'Helvetica', 'sans-serif']
      }
    },
  },
  plugins: [],
}