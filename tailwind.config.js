const Rule = require('postcss/lib/rule');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["*"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px" 
    },
    extend: {
      colors:{
        primaryCol:"#010a5e",
        primaryColorLight: "#010d78",
        secondaryColor: '#FFCC00',
        paragraphColor: '#c0c0c0',      
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColorLight: "#171717",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem'
      }
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}

