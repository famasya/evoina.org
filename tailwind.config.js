/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'silver': { DEFAULT: '#AAA7A0', 100: '#23221f', 200: '#46443e', 300: '#69665d', 400: '#8c887d', 500: '#aaa7a0', 600: '#bcb9b3', 700: '#cdcbc6', 800: '#dddcd9', 900: '#eeeeec' },
        'eggshell': { DEFAULT: '#EDE4D1', 100: '#403419', 200: '#806732', 300: '#bb994f', 400: '#d4be8f', 500: '#ede4d1', 600: '#f0e9d9', 700: '#f4eee2', 800: '#f8f4ec', 900: '#fbf9f5' },
        'hunyadi_yellow': { DEFAULT: '#EABB66', 100: '#3b2908', 200: '#765310', 300: '#b27c18', 400: '#e2a22b', 500: '#eabb66', 600: '#eec985', 700: '#f3d7a3', 800: '#f7e4c2', 900: '#fbf2e0' },
        'dim_gray': { DEFAULT: '#5C6263', 100: '#121314', 200: '#242727', 300: '#363a3b', 400: '#484e4e', 500: '#5c6263', 600: '#798284', 700: '#9ba1a2', 800: '#bcc1c1', 900: '#dee0e0' },
        'reseda_green': { DEFAULT: '#7A7247', 100: '#18170e', 200: '#312e1d', 300: '#49452b', 400: '#625c39', 500: '#7a7247', 600: '#a19860', 700: '#b9b187', 800: '#d0cbaf', 900: '#e8e5d7' }
      }
    },
  },
  plugins: [],
}

