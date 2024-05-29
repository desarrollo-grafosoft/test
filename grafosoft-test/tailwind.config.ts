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
        'primary-o25': '#DBE6D7',
        'primary-o75': '#90B687',
        secondary: '#E9A763',
        'secondary-o25': '#F5E5D4',
        tertiary: '#343A3F',
        'light-gray': '#F2F2F2'
      },
      borderRadius:{
        '10': '10px',
        '15': '15px',
        '25': '25px'
      }
    },
  },
  plugins: [],
};
export default config;
