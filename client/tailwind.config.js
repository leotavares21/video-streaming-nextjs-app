/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}',
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
        md: '840px',
        lg: '976px',
        xl: '1440px'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      colors: {
        primary: '#33CEF6',
        secondary: '#191A32',
        tertiary: '#33B0F6',
        white: '#FFF',
        black: '#000',
        accent: '#FF2060',
        gray: {
          50: '#FBFBFF',
          100: '#f1f1f1',
          200: '#C2C3CC',
          300: '#888',
          500: '#555',
          700: '#333'
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
};
