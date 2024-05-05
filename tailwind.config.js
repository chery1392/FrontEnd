/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, hsla(312, 66%, 76%, 1) 0%, hsla(310, 17%, 14%, 1) 0%, hsla(234, 93%, 67%, 1) 100%)'
      },
    },
  },
  plugins: [],
}
