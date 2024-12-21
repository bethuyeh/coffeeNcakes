/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          100: "#f3ece3",
          200: "#e0d6cc",
          300: "#cbb8a9",
          400: "#a89a85",
          600: "#7b5e57",
          700: "#5a3d36",
          800: "#422f28",
        },
      },
    },
  },
  plugins: [],
  margin:{
    "350":"-350px",
    '300':'300px'
  },
  padding:{
    "200":"-200px",
  },
};