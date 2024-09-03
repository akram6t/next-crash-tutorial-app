// tailwind.config.ts
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

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
        'light': colors.gray[100],
        'dark': colors.indigo[950],
        primary: colors.indigo,
        secondary: colors.purple,
      },
    }
  },
  plugins: []
};

export default config;