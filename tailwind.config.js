/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,html,jsx}"],
  theme: {
    extend: {
      // screens:{
      //   xs:"320px",
      //   sm:"375px",
      //   sml:"500px",
      //   md:"667px",
      //   mdl:"768px",
      //   lg:"960px",
      //   lgl:"1024px",
      //   xl:"1536px"
      // },

      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        // bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "#23272b",
        // designColor: "#ff014f",
        designColor: '#ff014f', 
        bodyColor: '#121212', 
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      borderWidth: {
        DEFAULT: '1px', 
        '0': '0',
        '2': '2px',
        '4': '4px',
        '8': '8px',
      },
    },
  },
  plugins: [],
};
