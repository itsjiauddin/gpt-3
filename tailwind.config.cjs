/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        customOrange: {
          300: "#F49867",
          400: "#FF8A71",
          500: "#FF4820",
        },
        customViolet: {
          500: "#AE67FA",
        },
        customBlack: {
          400: "#031B34",
          500: "#3D6184",
          600: "#052D56",
          700: "#042C54",
          800: "#040C18",
          900: "#0E0E0E",
        },
        customBlue: {
          200: "#71E5FF",
          400: "#81AFDD",
        },
      },
    },
  },
  plugins: [],
};
