/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Make sure your components live here
    ],
    theme: {
      extend: {
        fontFamily: {
          'helvetica-neue': ['Helvetica Neue LT Std', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  