/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "rgb(var(--foreground-color))",
        background: "rgb(var(--background-color))",
        highlight: "rgb(var(--highlight-color))",
        accent: "rgb(var(--accent-color))",
      },
    },
  },
  plugins: [],
};
