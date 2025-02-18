/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Orange: '#fe6d46',
        Purple: "#2d2862",
        Yellow: "#fde047",
      },
    },
  },
  plugins: [],
}

export default config;
