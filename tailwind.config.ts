import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--text-color)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--fill-color)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: { primary: "#E4E4E7" },
        },
        dark: {
          // ...
          colors: { primary: "white" },
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
