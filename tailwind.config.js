const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        mainBg: "#1f1f1e",
        HomecardBg: 'rgb(30, 41, 59)',
        primary: '#F3D5A5',
        buttonLinearTo: '#F3D5A5',
        buttonLinearFrom: '#CBA576',
      },
      animation: {
        marquee: 'marquee 55s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        fade: 'fadeInRight 1s 0.2s ease both',
        wiggle: 'wiggle 2s linear infinite',
        "tracking-in-expand": "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",

      },
      keyframes: {
        marquee: {
          // '0%': { transform: 'translateX(0%)' },
          // '100%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translate(-100%, 0)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeInRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'translateX(30%)' },
          '50%': { transform: 'translateX(0%)' },
        },
        "tracking-in-expand": {
          "0%": {
            "letter-spacing": "-.5em",
            opacity: "0"
          },
          "40%": {
            opacity: ".6"
          },
          to: {
            opacity: "1"
          }
        },
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
// 7D6010