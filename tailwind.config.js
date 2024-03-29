/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '900': '900px',
        '800': '800px',
        '700': '700px',
        '600': '600px',
        '500': '500px',
      },
      height: {
        '900': '900px',
        '800': '800px',
        '700': '700px',
        '600': '600px',
        '500': '500px',
        '300':'300px',
        '200':'200px',
        '100':'100px',
      },
      margin: {
        'l': '5.5%'
      }
    },

  },
  plugins: [],
}

