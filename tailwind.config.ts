import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        subheading: "#6C7072"
      },
      fontSize :{
       'responsive' :'clamp(2rem,3.5vw,3rem)'
      },
      boxShadow: {
        'custom-shadow': '0px 9.37px 9.37px 0px #000000',
      }
    },
  },
  plugins: [],
} satisfies Config;
