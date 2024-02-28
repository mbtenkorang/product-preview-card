/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        "dark-blue": "hsl(212, 21%, 14%)",
        "gray-blue": "hsl(228, 12%, 48%)",
        "neutral-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
