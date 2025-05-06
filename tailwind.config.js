/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./gatsby-*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}