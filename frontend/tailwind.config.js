/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
        md: "5rem",
      },
    },
  },
  plugins: [],
};
