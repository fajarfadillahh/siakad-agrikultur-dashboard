/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "3xl": "2px 6px 15px rgba(107,114,128,0.1)",
      },
    },
  },
  plugins: [],
};
