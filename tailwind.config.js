/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bornoregular: 'bornomala-regular',
        bornobold: 'bornomala-bold',
        kalregular: 'kalpurush-regular',
      },
      boxShadow: {
        'xl': '7px 7px 10px 0px rgba(0, 0, 0, 0.3)',
      }
    },
    colors: {
      transparent: 'transparent',
      'primary': '#62953A',
      'green-10': '#162805',
      'ash': '#717C7F',
      'white': '#FFFFFF',
      'black': '#000000',
      'black-200': '#2D2D2D',
      'brown': '#73513D',
      'bodycolor': '#F6F8EC'
    },
  },
  plugins: [],
}
