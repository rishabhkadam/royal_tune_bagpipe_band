/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", // Royal Gold
        "royal-blue": "#1A2B4C",
        "background-light": "#F8F9FA",
        "background-dark": "#0F172A",
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
  plugins: [],
};
