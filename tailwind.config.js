/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backdropFilter: {
        'blur': 'blur(10px)',
      }
    },
  },
  plugins: [
  ],
}