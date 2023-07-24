/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-archivo)"],
        serif: ["var(--font-archivo-black"],
        sansRoboto: ["var(--font-roboto)"],
      },
      colors: {
        "pr-primary": "#3A7658",
        "pr-dark-green": "#0A1510",
        "pr-light-green": "#DAEDED",
      },
    },
  },
  plugins: [],
};
