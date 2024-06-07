/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F5F5DC', //light beige background
        lightBlue: '#ADD8E6', // light blue color
        slateBlue: '#6A5ACD', //slate blue
        darkBeige: '#d2b48c', // define the dark beige color
      },
      borderRadius: {
        x1: '1rem', //round border
      },
      container: {
        center: true, //center components
      }
    },
  },
  plugins: [],
}

