/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./docs/**/*.{md,mdx}", 
    // "./blog/**/*.{md,mdx}",
  ],
  
  // 禁用基础重置样式，防止破坏 Docusaurus 原有的 Markdown 样式
  corePlugins: {
    preflight: false,
  },
  
  theme: {
    extend: {
      colors: {
        colorset: {
          primary: 'var(--colorset-primary)',
          primaryDark: 'var(--colorset-primary-dark)',
          primaryDarker: 'var(--colorset-primary-darker)',
          primaryDarkest: 'var(--colorset-primary-darkest)',
          primaryLight: 'var(--colorset-primary-light)',
          primaryLighter: 'var(--colorset-primary-lighter)',
          primaryLightest: 'var(--colorset-primary-lightest)',
        },
      }
    },
  },
  plugins: [],
}