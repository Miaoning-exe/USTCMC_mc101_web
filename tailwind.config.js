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
    extend: {},
  },
  plugins: [],
}