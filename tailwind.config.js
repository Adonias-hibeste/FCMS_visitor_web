/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/Pages/**/*.{js,jsx,ts,tsx}',
    './src/Components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3b82f6',
        'secondary': '#6b7280',
        'accent': '#ea580c',
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
      },
    },
  },
  plugins: [],
}
