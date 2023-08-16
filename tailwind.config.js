/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary_bgcolor : "#fff",
        primary_color : "#000000",
        secondary_bgcolor : "#f4f4f4",
        secondary_color : "#222",
        border_color: '#f1f1f1'

      }
    },
  
  },
  plugins: [],
}

