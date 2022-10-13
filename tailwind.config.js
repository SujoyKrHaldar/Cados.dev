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
        secondary: "#f1a597",
      },
    },
  },
  plugins: [],
};
