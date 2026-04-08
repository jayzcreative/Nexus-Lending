/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1E3D',
          mid: '#122548',
          light: '#1A3560',
        },
        accent: '#2F80ED',
      }
    },
  },
  plugins: [],
}