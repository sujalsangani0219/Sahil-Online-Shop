/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#85C1E9",
        secondary:"#ed8900",
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"3rem",
        }
      }
    },
  },
  plugins: [],
}