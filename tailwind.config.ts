/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",

        "purple-350": "#D0C4E2",
        "purple-450": "#B09DCB",
        "purple-550": "#9184A4",
        "purple-750": "#6A38AF",
        "purple-850": "#4F1F7A",
        "purple-950": "#24094A",
        "blue-50": "#B4E8FF",
        "blue-950": "#190732",
      },
    },
  },
  plugins: [],
} satisfies Config;