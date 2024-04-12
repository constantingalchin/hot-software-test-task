/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#312442",
        'primary-75': "#31244275",
        secondary: "#7E93A8",
        orange: "#F48F6B",
        "pale-blue": "#5C5380",
        "pale-primary": "#3D2D52",
        "white-15": "#ffffff15",
        "hs-yellow": "#F4E02B",
        "hs-gray": "#E6ECF1",
      },
      fontSize: {
        "3xl": "2rem",
      },
      lineHeight: {
        "120%": "120%",
      },
      padding: {
        "7px": "7px",
        "13px": "13px",
      },
      boxShadow: {
        "orange-0-4-8": "0 4px 8px #E84A1150",
      },
    },
  },
  variants: {},
  plugins: [],
};
