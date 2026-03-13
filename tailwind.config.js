/** @type {import('tailwindcss').Config} */
module.exports = {
  // 告诉 Tailwind 去哪里寻找你使用了它的 class 的文件
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // 如果你在 docs 或 blog 里的 mdx 文件中也用了 tailwind，可以加上下面这行
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