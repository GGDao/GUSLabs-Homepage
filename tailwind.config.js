/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // etc.
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        gusgold: "#fde45d",
        alert: "#c62828",
        globalborder: "#FFD66C",
        successtext: "#42D010",
        warning: "#ff8800",
        darkbg: "#0a0a0aa6"
      },
      backgroundImage: {
        "accent": "conic-gradient(#FA50A1, #8481CF, #409EE9, #9CDBFC, #FFFFFF, #FA50A1)",
      }
    },
  },
};
