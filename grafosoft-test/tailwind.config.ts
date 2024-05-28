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
        primary: '#7DA870',
        'primary-25': '#DBE6D7',
        'primary-75': '#90B687',
        secondary: '#E9A763',
        'secondary-25': '#F5E5D4',
        tertiary: '#343A3F',
      },
      borderRadius:{
        '10': '10px',
        '15': '25px',
        '25': '25px'
      }
    },
  },
  plugins: [],
};
export default config;
