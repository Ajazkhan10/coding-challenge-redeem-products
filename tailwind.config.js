/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['"Roboto", sans-serif'],
        Montserrat: ['"Montserrat", sans-serif'],
        bebas: ['"Bebas Neue", sans-serif'],
      },
      colors: {
        primary_deep_blue: "#14267E", // Deep Blue
        secondary_deep_blue: "#1A237E", // light Deep Blue
        primary_dark_navy: "#0E243B", // Dark Navy
        primary_orange: "#FF5722", // Orange
        primary_steel_blue: "#1A3B55", // Steel Blue
        primary_off_white: "#F6F7F8", // Off-White
        white: "#FFFFFF", // Pure White
        primary_gray: "#F6F8FB", // Light Gray
        seconday_dark_navy: "#0E2638", // Secondary Dark Navy
        secondary_dark_blue: "#060E64", // Secondary Light Blue
        secondary_light_blue: "#285172", // Light Blue
      },
      fontSize: {
        "h1-mobile": ["3.1rem", "3.5rem"], // 35px / 46px
        "h1-desktop": ["5rem", "5.938rem"], // 80px / 95px
        "h2-mobile": ["1.875rem", "2.188rem"], // 30px / 35px
        "h2-desktop": ["5.188rem", "6.25rem"], // 83px / 100px
        "h3-mobile": ["1.5rem", "1.75rem"], // 22px / 28px
        "h3-desktop": ["2.813rem", "120%"], // 36px / 44px
        "h4-mobile": ["2.5rem", "120%"], // 22px / 28px
        "h4-desktop": ["2.813rem", "1.75rem"], // 32px / 40px
      },
      backgroundImage: {
        "manu-border-gradient": "linear-gradient(90deg, rgba(255,255,255,0.021) 0%, rgba(255,255,255,0.35) 52%, rgba(255,255,255,0.14) 100%)",
      },
      borderImage: {
        gradient: [
          "radial-gradient(80.38% 222.5% at -13.75% -12.36%, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
          "radial-gradient(80.69% 208.78% at 108.28% 112.58%, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
        ],
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text|border)-(yellow-100)/,
    },
  ],
  plugins: [require("tailwindcss-autofill")],
};
