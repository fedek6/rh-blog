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
      },
    },
  },
  plugins: [],
};
