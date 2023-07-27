/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-archivo)"],
        serif: ["var(--font-archivo-black)"],
        sansRoboto: ["var(--font-roboto)"],
      },
      colors: {
        "pr-primary": "#3A7658",
        "pr-dark-green": "#0A1510",
        "pr-light-green": "#DAEDED",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
