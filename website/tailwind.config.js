/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      tangerine: ["Tangerine", "cursive"],
      fira: ["Fira Sans", "sans-serif"],
    },
    extend: {
      colors: {
        offBlack: "#272727",
        offWhite: "#E6E4DD",
        sage: "#B2AC88",
        brown: "#827252",
        lightBrown: "#C3BCAE",
        menuBrown: "#AEA48F",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
