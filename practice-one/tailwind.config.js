/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00cc61',
        secondary: '#004050',
        light: '#f4f4f4',
        'gray-500': '#777777',
        'gray-300': '#dcdcdc',
      },
      fontWeight: {
        small: 400,
        medium: 500,
        bold: 700,
      },
      lineHeight: {
        small: '1.1875rem',
        medium: '1.5rem',
        'x-medium': '1.875rem',
        large: '2.125rem',
        'x-large': '2.875rem',
        'xx-large': '3.125rem',
        'xxx-large': '4.625rem',
      },
    },
  },
  plugins: [],
};
