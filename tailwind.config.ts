import type { Config } from 'tailwindcss';

const config: Config = {
  safelist: [
    'bg-[#f74c00]',
    'bg-[#08b0d9]',
    'bg-[#64cbf8]',
    'bg-[#03589c]',
    'bg-[#f7e018]',
    'bg-[#58c4dc]',
    'bg-[#323540]',
    'bg-[#035798]',
  ],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
      },
      maxWidth: {
        [`main-container`]: '1024px',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        text: 'var(--color-text)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
