import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        headColor:'#a1a1aa',
        textColor:'#57534e',
        customPurple: '#5252AD',
        customGray: '#B3B3B3',
        bgBlue:'#2E2E9C',
      },
      fontSize: {
        '48px': '48px',
      },
    },
  },
  plugins: [],
};
export default config;
