/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#FF6363'
      },
      backgroundImage: {
        
        primary:'#0288D1',
        secondary: 'linear-gradient(135deg, #0091EA, #B3E5FC)',
        tertiary: 'linear-gradient(130deg, #0091EA, #B3E5FC)',
      },
    },
  },
  plugins: [],
}

