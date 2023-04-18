/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: "transparent",
        primary: "#1E2938",
        secondary: "#020617",
        tertiary: "#334155"
        // primary: "#4F4557",
        // secondary: "#393646",
        // tertiary: "#6D5D6E"

      },
    },
  },
  plugins: [],
}
