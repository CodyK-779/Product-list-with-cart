/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        cm: '568px'
      },
      colors: {
        // Primary colors
        red: "hsl(14, 86%, 42%)",
        redHover: "hsl(14, 82%, 35%)",
        green: "hsl(159, 69%, 38%)",

        // Rose color shades
        Rose: {
          50: "hsl(20, 50%, 98%)",
          100: "hsl(13, 31%, 94%)",
          300: "hsl(14, 25%, 72%)",
          400: "hsl(7, 20%, 60%)",
          500: "hsl(12, 20%, 44%)",
          900: "hsl(14, 65%, 9%)",
        },
      },
    },
  },
  plugins: [],
}