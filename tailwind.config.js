/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'upg-blue': '#002560',
        'upg-red': '#EC1B24',
        'upg-red-dark': '#C4171E',
        'upg-red-deep': '#B11219',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
