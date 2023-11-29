/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "purple-350": "#D0C4E2",
        "purple-450": "#B09DCB",
        "purple-550": "#9184A4",
        "purple-750": "#6A38AF",
        "purple-850": "#4F1F7A",
        "purple-950": "#24094A",
        "blue-950": "#190732",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

