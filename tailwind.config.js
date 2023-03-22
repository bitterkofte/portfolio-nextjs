/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sgb25': ["SG-Black25", "cursive"],
        'sgb20': ["SG-Black20", "cursive"],
        'Sofia': ["Sofia", "sans"],
        'SofiaBold': ["SofiaBold", "sans"],
        'SofiaBlack': ["SofiaBlack", "sans"],
      },
    },
  },
  plugins: [],
}
