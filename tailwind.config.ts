import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: { min: '432px' },
      sm: { min: '640px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        heroGradient: 'linear-gradient(94.59deg,#4923B4 2.39%,#E878EF 97.66%)',
      },
    },
  },
  plugins: [],
};
export default config;
