import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#F2FCFC',
          '100': '#E6FAF9',
          '200': '#C6F5F2',
          '300': '#A5F0EC',
          '400': '#66E3DB',
          '500': '#2ed5c8',
          '600': '#27C2AD',
          '700': '#1AA186',
          '800': '#118062',
          '900': '#0A6144',
          '950': '#043D25',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

