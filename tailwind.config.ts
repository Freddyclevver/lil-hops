import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: '#58d5b5',
          400: '#58d5b5',
          900: '#1a4d45',
          950: '#0f3530',
        },
        lila: {
          DEFAULT: '#a45bb2',
          400: '#a45bb2',
          600: '#7d4589',
          800: '#5a306f',
        },
        pink: {
          DEFAULT: '#fc59c8',
          300: '#fc59c8',
          400: '#fc59c8',
        },
        darkBlue: {
          DEFAULT: '#2e2075',
          900: '#1a1244',
          950: '#0f0a2b',
        },
      },
    },
  },
  plugins: [],
}

export default config
