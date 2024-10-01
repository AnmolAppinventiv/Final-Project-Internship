import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1.5)',
      }
    },
  },
  plugins: [],
};
export default config;
