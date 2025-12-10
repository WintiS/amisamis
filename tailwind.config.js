/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'construction-orange': '#FF6B35',
        'construction-yellow': '#FFB627',
        'construction-dark': '#2C2C2C',
      },
    },
  },
  plugins: [],
}

