/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "public/*.{html,js}",
  ],
  theme: {
    extend: {
      
      screens: {
        "2lg": "1440px",
        "3xl": "1680px",
        "4xl": "2048px"
      },
      fontFamily: {
        cyber: ["cyber", "system-ui"],
        val: ["Val","system-ui"]
      }
    },
  },
  plugins: [],
};
