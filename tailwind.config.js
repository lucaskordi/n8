/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mirante': ['var(--font-mirante)', 'sans-serif'],
        'carla-sans': ['var(--font-carla-sans)', 'sans-serif'],
        'new-black': ['var(--font-new-black)', 'sans-serif'],
        'sans': ['system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      screens: {

        '1112xl': '1192px',
        '3xl': '1720px',

        '4xl': '1920px',
      },
    },
  },
  plugins: [],
}

