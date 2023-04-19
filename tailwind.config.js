/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: [
        '-apple-system',
        'system-ui',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'sans-serif'
      ],
      serif: [
        '-apple-system',
        'system-ui',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'serif'
      ]
    },
    fontWeight: {
      normal: 400,
      medium: 600
    },
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      colors: {
        primary: '#191A32',
        secondary: '#33CEF6',
        tertiary: '#33B0F6',
        white: '#FBFBFF',
        black: '#000',
        accent: '#FF2060',
        'gray-100': '#f1f1f1',
        'gray-200': '#C2C3CC',
        'gray-300': '#888',
        'gray-500': '#555'
      }
    }
  },
  plugins: []
};
