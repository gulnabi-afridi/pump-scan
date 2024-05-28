/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        gesistThin: ['gesist-thin', 'sans-serif'],
        gesistMedium: ['gesist-medium', 'serif'],
        gesistRegular: ['gesist-regular', 'serif'],
        gesistBold: ['gesist-bold', 'serif'],
        gesistSemibold: ['gesist-semibold', 'serif'],
        gesistBlack: ['gesist-black', 'serif'],
      },
      screens: {
        xs: '325px',
        sm: '480px',
        csm: '540px',
        md: '768px',
        cmd: '850px',
        lg: '976px',
        clg: '1080px',
        xl: '1280px',
      },
      colors: {
        black: {
          1: '#000000',
        },

        green: {
          1: '#19F490',
        },
        white: {
          1: '#FFF',
        },
      },
    },
  },
  plugins: [],
};
