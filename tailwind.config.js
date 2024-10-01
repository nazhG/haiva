// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: '320px' },
        md: { max: '645px' },
      },
      colors: {
        primary: '#517D98',
        secondary: '#545454',
        dark: '#375F80',
        light: '#84A3B6',
        lighter: '#EAF6F8',
        lightest: '#EAF0F2',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        russo: ['Russo One', 'sans-serif'],
      },
    },
  },
  plugins: [],
};