/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cabin-condensed': ["'Cabin Condensed'", "sans-serif"],
      },
      animation: {
        ballmove: "ballmove 3s infinite alternate",
        textreveal: "textreveal 2.9s infinite alternate",
        floating: 'floating 3s ease-in-out infinite',
        slideIn: 'slideIn 1s forwards',
        slideUp: 'slideUp 2.5s ease-out forwards',
        slideOut:"slideOut 1s forwards",
        fadeIn: "fadeIn 5s forwards",
        fadeOut: 'fadeOut 1s ease-in-out', 
        zoomIn: 'zoomIn 1s ease-in-out forwards',
        zoomOut: 'zoomOut 1s ease-in-out forwards',
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        ballmove: {
          "0%": { transform: "translate(0px, 8.5px) scale(0.1)" },
          "10%": { transform: "translateX(0px) scale(0.5)" },
          "40%": { transform: "translateX(255px) scale(0.5)" },
          "60%": { transform: "translate(240px, 8.5px) scale(0.1)" },
          "70%": { transform: "translate(240px, 8.5px) scale(0.15)" },
          "80%": { transform: "translate(240px, 8.5px) scale(0.1)" },
          "90%": { transform: "translate(240px, 8.5px) scale(0.15)" },
          "100%": { transform: "translate(240px, 8.5px) scale(0.1)" },
        },
        textreveal: {
          "0%": { width: "0" },
          "10%": { width: "0" },
          "40%": { width: "240px" },
          "100%": { width: "240px" },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOut:{
          "0%": {
            transform: 'translateY(0)',
            opacity: '1'
          },
          "100%":{
            transform: 'translateY(100%)',
            opacity: '0'
          }
        },
        fadeIn: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      colors: {
        primary: '#3559E0', // Example primary color
        secondary: '#9333EA', // Example secondary color
        accent: '#FBBF24', // Example accent color
        neutral: '#F3F4F6', // Example neutral color
        'dark-bg': '#1F2937', // Example dark background color
        'light-bg': '#FFFFFF', // Example light background color
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}
//3559E0   ORANGE
//#1D4ED8  blue 
//#FBBF24  yellow
//#9333EA  purple
//#F3F4F6  light grey
//#1F2937  dark grey
//#FFFFFF  white

//3559E0
//rgb(249 115 22 / var(--tw-border-opacity, 1))