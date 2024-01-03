/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "momo-primary": "#f9b233",
        "momo-orange": "#dd8118",
        "momo-yellow": "#e5cc1c",
        "momo-red": "#c1282f",
        "momo-black": "#030405",
      },
      backgroundImage: {
        'hero-image': 'url("./public/hero-momos.jpg")', // Use 'url()' to specify image path
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
});
