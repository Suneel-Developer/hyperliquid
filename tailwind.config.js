/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "rgb(59, 66, 65)",
        dark_100: "rgb(85, 99, 97)",
        dark_200: "rgb(148, 158, 156)",
        dark_300: "rgb(80, 210, 193)",
        dark_400: " rgb(48, 48, 48)",
        dark_500: " rgb(246, 254, 253)",
        dark_600: " rgb(148, 158, 156)",
        dark_700: " rgb(34, 36, 40)",
        dark_800: "rgb(80, 210, 193)",
        dark_900: "rgb(154, 163, 164)",
        dark_1000: "rgb(237, 112, 136)",
        dark_1100: "rgb(80, 210, 193)",
        dark_1200: "rgb(151, 252, 228)",
        dark_1300: "rgb(23, 69, 63)",
        dark_1400: "rgb(15, 26, 31)",
        dark_1500: "rgb(2, 35, 30)",
        border_color: "rgb(62, 62, 62)",
        border_color_100: "rgb(71, 71, 71)",
        border_color_200: "rgb(41, 41, 41)",
        border_color_300: "rgb(154, 163, 164)",
      },
    },
  },
  plugins: [],
};
