import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1C1A17",
          light: "#252320",
          dark: "#0F0E0C",
        },
        wood: {
          light: "#C4956A",
          DEFAULT: "#A0714F",
          dark: "#7A5230",
          deep: "#b96714",
        },
        amber: {
          craft: "#D4891A",
          light: "#F0A830",
          pale: "#F5C842",
        },
        cream: "#F5ECD7",
        bone: "#E8D5B0",
        rust: "#B54A2A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "wood-grain": "url('/textures/wood.svg')",
        "noise": "url('/textures/noise.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
