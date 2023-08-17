const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@apideck/components/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "basier-circle": ["Basier Circle", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.slate,
        primary: {
          50: "#FDFBF7",
          100: "#F9F5EB",
          200: "#F4EAD7",
          300: "#EFE2C7",
          400: "#EAD8B3",
          500: "#E4CD9F",
          600: "#DFC38C",
          700: "#CB9E43",
          800: "#906D28",
          900: "#483714",
          950: "#241B0A",
        },
        glacier: {
          50: "#f5f8fa",
          100: "#eaf0f4",
          200: "#cfe0e8",
          300: "#91b9ca",
          400: "#75a8bb",
          500: "#538da4",
          600: "#407289",
          700: "#355b6f",
          800: "#2f4e5d",
          900: "#2b434f",
          950: "#1d2c34",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
