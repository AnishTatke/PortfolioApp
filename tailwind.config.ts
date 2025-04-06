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
      colors: {
        bboard: '#1A1918',
        themecolor: '#fb923c',
        themeopacque: '#ac896830',
        themetransparent: '#ac896805',
        themeerror: '#85664d'
      },
    },
  },
};
export default config;
