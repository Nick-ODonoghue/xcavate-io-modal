/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        graphikRegular: ["GraphikRegular", "sans-serif"],
        graphikMedium: ["GraphikMedium", "sans-serif"],
        graphikSemibold: ["GraphikSemibold", "sans-serif"],
        graphikBold: ["GraphikBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
