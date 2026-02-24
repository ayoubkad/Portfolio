/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["\"Chakra Petch\"", "system-ui", "sans-serif"],
        body: ["\"Manrope\"", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 45px rgba(59, 130, 246, 0.35)",
        soft: "0 20px 60px rgba(15, 23, 42, 0.55)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        float: "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
