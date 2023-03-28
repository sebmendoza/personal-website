/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        vercel: 'url("../assets/mid-sentence.svg")',
      },
      fontFamily: {
        Gaya: ["Gaya"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
