/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontSize: {
      xxs: ["8px", "10px"],
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["18px", "28px"],
      xl: ["20px", "32px"],
      xxl: ["24px", "34px"],
      xsl: ["40px", "56px"],
    },
    extend: {
      fontFamily: {
        sans: ["vazir"],
      },
    },
  },
  plugins: [],
};
