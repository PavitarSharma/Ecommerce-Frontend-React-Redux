/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        sliding: {
          '0%': { transform: 'translateX(-70%)' },
          '100%': { transform: 'translateX(130%)' },
        },
      },

      animation: {
        'sliding': 'sliding 14s linear infinite',
      },
    },
    plugins: [],
  }
}
