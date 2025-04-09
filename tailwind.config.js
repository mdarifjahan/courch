/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        hind :['Hind Siliguri', 'sans-serif']
      },
      colors: {
        'bg-color': '#02291E',
        'primary': 'rgb(255, 255, 255)',
        'secondary': '#00E573',
      },
    },
  },
  plugins: [],
}

