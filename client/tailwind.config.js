/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jkt: ['Plus Jakarta Sans', 'sans-serif'],
        ysv: ['Yeseva One', 'cursive'],
      },
      colors: {
        primary: '#3295EB',
        secondary: '#D9D9D9',
        black: '#000',
        blackk: '#000',
        white: '#fff',
        oldPrimary: '#1C6CA7',
        gold: '#FFD700',
        silver: '#C0C0C0',
        bronze: '#BF8970',
        grey: '#808080',
        lightblue: '#CCDFEF',
        darkblue: '#003d7e',
        txt: '#1e1e1e',
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
