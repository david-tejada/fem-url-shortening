/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      cyan: "hsl(180deg 66% 49%)",
      red: "hsl(0deg 87% 67%)",
      violet: { 800: "hsl(257deg 26% 33%)", 900: "hsl(260deg 27% 26%)" },
      gray: { 100: "hsl(225deg 32% 95%)", 400: "hsl(257deg 8% 63%)" },
      white: "hsl(0deg 0% 100%)",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
