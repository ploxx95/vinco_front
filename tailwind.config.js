module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        76: "19rem",
        95: "23.75rem",
      },
    },
    colors: {
      "primary-500": "#05998A",
      "primary-100": "#20AD96",
      "secondary-500": "#3F3A64",
      "secondary-100": "#8C89A2",
      "tertiary-500": "#D7C9BC",
      "tertiary-100": "#F5F1ED",
      "gray-neutral": "#696969",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
