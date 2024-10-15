/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'custom-segoe': ['Segoe UI Semibold', 'Segoe UI', 'General Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

