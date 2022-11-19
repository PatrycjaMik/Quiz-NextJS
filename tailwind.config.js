const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      oswald: ["Oswald", ...fontFamily.sans],
    },
    colors: {
      primary: "#fdee00",
      black: "#000000",
      white: "#ffffff",
      dark: "#1e1d1b",
    },
    backgroundDots: {
      topLeft: "url('/images/topRightYellowDots.png')",
      bottomRight: "url('/images/bottomLeftYellowDots.png')",
    },
    extend: {},
  },
  plugins: [],
};
