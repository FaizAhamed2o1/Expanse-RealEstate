/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryCustomText: "#fff",
        secondaryCustomText: "#999",
        "bg-primary-black": "#141414",
        "bg-secondary-black": "#1a1a1a",
        "custom-purple": "#703bf7",
        "custom-border-color": "#262626",
      },

      fontFamily: {
        urbanist: "'Urbanist', serif",
      },
    },
  },
  plugins: [daisyui],
};
