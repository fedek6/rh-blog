/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./config/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🖊️ Fonts
      fontFamily: {
        sans: ['"Public Sans"', "sans-serif"],
        display: ['"League Spartan"', "sans-serif"],
      },
      // 🎨 Colors
      colors: {
        "english-vermillion": {
          100: "#f7d9da",
          200: "#efb3b5",
          300: "#e68c8f",
          400: "#de666a",
          500: "#d64045",
          600: "#ab3337",
          700: "#802629",
          800: "#561a1c",
          900: "#2b0d0e",
          DEFAULT: "#d64045",
        },
        "eerie-black": {
          100: "#d0d0d0",
          200: "#a1a1a1",
          300: "#737373",
          400: "#444444",
          500: "#151515",
          600: "#111111",
          700: "#0d0d0d",
          800: "#080808",
          900: "#040404",
          DEFAULT: "#151515",
        },
        "dark-blue-gray": {
          100: "#dddfe9",
          200: "#bcbed3",
          300: "#9a9ebc",
          400: "#797da6",
          500: "#575d90",
          600: "#464a73",
          700: "#343856",
          800: "#23253a",
          900: "#11131d",
          DEFAULT: "#575d90",
        },
        platinum: {
          100: "#fafafa",
          200: "#f5f6f5",
          300: "#f0f1f0",
          400: "#ebedeb",
          500: "#e6e8e6",
          600: "#b8bab8",
          700: "#8a8b8a",
          800: "#5c5d5c",
          900: "#2e2e2e",
          DEFAULT: "#e6e8e6",
        },
      },
    },
  },
  plugins: [],
};
