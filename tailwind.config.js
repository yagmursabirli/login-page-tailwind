// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      backgroundImage:{
        'mobile': "url('./images/bg-intro-mobile.png')",
        'desktop': "url('./images/bg-intro-desktop.png')",
      },
      colors:{
        'red400': 'red',
        'button': 'hsl(248, 32%,49%)',
        'claim': 'hsl(154, 59%, 51%)',
        'buttonShadow': 'hsl(154, 73%, 43%)',
        'terms-color': 'hsl(246, 25%, 77%)',
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
