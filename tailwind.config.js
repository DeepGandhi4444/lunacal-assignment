/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-top-bottom': 'inset 0px 5px 10px #282828, inset 0px -5px 10px #f8f8f8',
      },
    },
  },
  plugins: [],
}

