/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '2560px',
      '2xl': '3840px',
    },
    },
    corePlugins: {
      aspectRatio: false,
    },
    plugins: [require("daisyui"), ('@tailwindcss/aspect-ratio')],
  }