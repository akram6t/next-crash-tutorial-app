import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      "light": '#E8E8E8',
      "dark": '#171717',
       "primary": {
         50: "#f0fdfa",
         100: "#ccfbf1",
         200: "#99f6e4",
         300: "#5eead4",
         400: "#2dd4bf",
         500: "#14b8a6",
         600: "#0d9488",
         700: "#0f766e",
         800: "#115e59",
         900: "#134e4a",
       }
     }
    },
  },
  plugins: [],
};
export default config;
