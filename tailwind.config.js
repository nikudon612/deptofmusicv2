/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      brandBlack: "#121414",
      brandWhite: "#F5F5F5",
      brandBlue: "#85a199",
      brandGreen: "#3d542d",
      brandTan: "#d3c2ab",
      brandBrown: "692c1b",
      brandYellow: "#ebb81e",
    },
    extend: {},
  },
  plugins: [],
};
