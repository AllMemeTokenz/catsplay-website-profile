import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#09090b",
          light: "#FEFCE8",
        },
        foreground: {
          dark: "#141314",
          light: "#FEFCE8",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
