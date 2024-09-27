// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ajusta las rutas según tu estructura de proyecto
  theme: {
    extend: {
      screens: {
        sm: { max: '320px' },
        md: { max: '645px' },
      },
      colors: {
        primary: '#375F80',
        secondary: '#545454',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Define Poppins como una fuente personalizada
      },
    },
  },
  plugins: [],
};