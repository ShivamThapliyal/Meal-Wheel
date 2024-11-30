/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customcolor: "#49557e",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
    keyframes: {
      fadeInPop: {
        "0%": { opacity: "0", transform: "scale(0.5)" },
        "100%": { opacity: "1", transform: "scale(1)" },
      },
    },
    animation: {
      fadeInPop: "fadeInPop 0.2s ease-in-out",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
