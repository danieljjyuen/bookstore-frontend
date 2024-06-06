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
        slateBlue: '#6A5ACD' //slate blue
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

