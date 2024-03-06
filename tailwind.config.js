/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/renderer/index.html', './src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto', sans-serif", 'system-ui']
      }
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  plugins: []
}
