/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      animation: {
        "skill-move-fast": "move 1.5s infinite ease-in-out",
        "skill-move-medium": "move 2s infinite ease-in-out",
        "skill-move-slow": "move 3s infinite ease-in-out",
      },
    keyframes: {
      move: {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-20px)" },
      },
    },},
  },
  plugins: [],
}


