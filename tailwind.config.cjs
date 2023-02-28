/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "grayTextDark" : "#8892b0",
        "grayTextLight" : "#a8b2d1",
        "primaryBg" : "#0a192f",
        "accentClr" : "#64ffda",
        "cardBg" : "#112240",
        "textShadeOne" : "#e6f1ff",
        "textShadeTwo" : "#e8e8e8",
      },
      gridTemplateColumns : {
        "fluidLayout" : "repeat(auto-fit,minmax(6rem,1fr))",
        "fluidLayout1" : 'repeat(auto-fit, minmax(3rem, 1fr))',
        "fluidLayoutCardLg" : 'repeat(auto-fit, minmax(26rem, 1fr))',
        "fluidLayoutCardMd" : 'repeat(auto-fit, minmax(20rem, 1fr))',
        "fluidLayoutAbout" : 'repeat(auto-fit, minmax(15rem, 1fr))',
      }
    },
  },
  plugins: [],
}
