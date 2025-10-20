/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        metal: ['"Metal Mania"', '"Black Ops One"', 'system-ui'],
      },
      colors: {
        metal: {
          bg: '#0b0b0c',           // fondo casi negro
          steel: '#2b2b2d',        // gris metálico
          iron: '#3f3f46',         // gris azulado
          blood: '#b91c1c',        // rojo oscuro
          neon: '#9f00ff',         // púrpura intenso
        },
      },
      boxShadow: {
        neon: '0 0 20px rgba(159, 0, 255, 0.5)',
        redglow: '0 0 25px rgba(185, 28, 28, 0.6)',
      },
      backgroundImage: {
        'metal-texture': "radial-gradient(circle at 30% 30%, #1a1a1a, #000)",
        'dark-smoke': "linear-gradient(135deg, #0b0b0c 0%, #1f1f1f 100%)",
      },
    },
  },
  plugins: [],
}
