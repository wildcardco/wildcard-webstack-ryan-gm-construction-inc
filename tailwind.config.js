/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--color-paper-rgb) / <alpha-value>)",
        ink: "rgb(var(--color-ink-rgb) / <alpha-value>)",
        stone: "rgb(var(--color-stone-rgb) / <alpha-value>)",
        bronze: "rgb(var(--color-bronze-rgb) / <alpha-value>)",
        mist: "rgb(var(--color-mist-rgb) / <alpha-value>)",
        slate: "rgb(var(--color-slate-rgb) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
