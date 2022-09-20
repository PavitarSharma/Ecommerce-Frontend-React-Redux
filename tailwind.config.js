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
          '0%': { transform: 'translateX(-40%)' },
          // '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },

      animation: {
        'sliding': 'sliding 10s linear infinite',
      },

      backgroundImag: {
        "login-signup": "https://image.freepik.com/free-vector/online-wishes-list-concept-illustration_114360-3900.jpg"
      }
    },
    plugins: [],
  }
}
