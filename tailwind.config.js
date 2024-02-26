/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: {
          500: "#146eb4",
          600: "#0e4f82"
        }
      }
    },
  },
  plugins: [],
}