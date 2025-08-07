/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  fontFamily: {
  londrina: [
    "Londrina Solid",
    "sans-serif",
  ],
},
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
