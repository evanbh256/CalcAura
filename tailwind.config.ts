import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          gain: "#00FF41", // Matrix/Neon Green
          loss: "#FF0055", // Hot Pink/Red
          black: "#050505",
          white: "#F5F5F5",
        },
      },
      boxShadow: {
        brutal: "5px 5px 0px 0px rgba(0,0,0,1)",
        "brutal-white": "5px 5px 0px 0px rgba(245,245,245,1)",
      },
    },
  },
  plugins: [],
};
export default config;
