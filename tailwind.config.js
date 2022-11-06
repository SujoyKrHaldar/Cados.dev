module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem", //640px
        md: "2rem", //768px
        lg: "5rem", //1024px
        xl: "7rem", //1280px
        "2xl": "12rem", //1536px
      },
    },
    extend: {
      colors: {
        "black-500": "#1c1c1c",
        "brown-200": "#fadfda",
        "brown-700": "#aa7560",
        "skin-200": "#ffe8d6",
        "skin-500": "#ddbea9",
        "skin-700": "#cb997e",
      },
      backgroundImage: {
        circle: "url('/assets/circle.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
