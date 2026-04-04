/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      /* 🎨 BRAND COLORS */
      colors: {
        primary: "#ec4899",   // pink
        secondary: "#9333ea", // purple
        dark: "#0f172a",      // dark bg
        light: "#f9fafb",     // light bg
      },

      /* 🌈 GRADIENTS */
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #ec4899, #9333ea)",
        "dark-gradient": "linear-gradient(to right, #0f172a, #1e1b4b, #581c87)",
      },

      /* 🔥 SHADOWS */
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.1)",
        strong: "0 15px 40px rgba(0,0,0,0.2)",
      },

      /* 🔥 BORDER RADIUS */
      borderRadius: {
        xl2: "1.25rem",
      },

      /* 🔥 ANIMATIONS */
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.4s ease-in-out",
      },

    },
  },
  plugins: [],
};