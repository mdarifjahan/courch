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
      boxShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        'soft': '0 5px 15px rgba(0,0,0,0.1)',
        'neon': '0 0 15px rgba(0,255,0,0.5)',
      }
    },
  },
  plugins: [],
}

