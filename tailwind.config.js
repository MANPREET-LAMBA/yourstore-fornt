/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        firstWhite : "#f9f9f9",
        secondDGray :"#2d2d2d",
        thirdDGreen : "#48735F",
        fourthLGreen: "#4F8C6F",

      }
    },
  },
  plugins: [],
}

