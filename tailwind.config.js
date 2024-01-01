/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        'hero-image': "'./public/hero-momos.jpg'",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    plugins: [],
  },
  plugins: [],
}