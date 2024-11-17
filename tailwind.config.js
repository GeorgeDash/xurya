/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      screens: {
        "sm": "320px",
        "sm-m": "375px",
        "sm-l": "425px",
        "sm-xl": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1024px",
        "2xl": "1200px",
        "3xl": "1440px"
      },
      fontFamily: {
        "sans": ["Aeonik Pro", "sans-serif"]
      },
      colors: {
        "black": "#1e1e1e",
        "gray": "#8d959d",
        "lightgray": "#f2f4f4",
        "green": "#00d74e"
      },
      backgroundImage: {
        "home": "url('/build/img/cover.jpeg')",
      },
      transitionDuration: {
        "375": "375ms"
      },
    },
  },
  plugins: []
}

