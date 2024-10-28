/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter", "sans-serif"], // Define the custom font family correctly
      },
    },
  },
  plugins: [],
};
