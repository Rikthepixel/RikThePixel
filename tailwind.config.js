const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#fbd7ff",
        dark: "#932d9e",
        secondary: "#F06BFF",
        active: "#559E13",
        accent: "#B2FF6B"
      }
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("current-page", "&.active");
      addVariant("children", "&>*");
      addVariant("decendants", "& *");
    })
  ],
};
