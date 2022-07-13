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
      },
    },
  },
  plugins: [],
};
