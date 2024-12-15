import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        YekanReg:["YekanRegular", "sans-serif"],
        YekanBold:["YekanBold"]
      },
      colors: {
        primary: {
          50: "#f7f6ef",
          100: "#ece7d5",
          200: "#dbd0ad",
          300: "#c7b27d",
          400: "#b89b5e",
          500: "#a7854b",
          600: "#8f6b3f",
          700: "#735235",
          800: "#624531",
          900: "#553b2e",
          950: "#301f18",
        },
        cello: {
          50: '#f3f6fc',
          100: '#e7edf7',
          200: '#cad8ed',
          300: '#9bb8de',
          400: '#6591cb',
          500: '#4174b6',
          600: '#305a99',
          700: '#28487c',
          800: '#243e68',
          900: '#223555',
          950: '#17233a',
      },
      
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
