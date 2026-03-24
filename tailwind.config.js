/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7a1ea1",
          dark: "#631987",
          soft: "#f2d3ff",
        },
        ink: "#161018",
        canvas: "#fffafc",
      },
      boxShadow: {
        card: "0 18px 50px rgba(122, 30, 161, 0.12)",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        serif: ['"Cinzel"', "serif"],
      },
    },
  },
  plugins: [],
};
