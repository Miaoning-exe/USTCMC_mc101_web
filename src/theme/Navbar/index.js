// import React from 'react';
// import NavbarLayout from '@theme/Navbar/Layout';
// import NavbarContent from '@theme/Navbar/Content';
// export default function Navbar() {
//   return (
//     <NavbarLayout>
//       <NavbarContent />
//     </NavbarLayout>
//   );
// }


// src/theme/Navbar/index.jsx
import React, { useState } from 'react';
import Link from '@docusaurus/Link'; // ⚠️ Docusaurus 的核心路由组件
import { Pickaxe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // 注意：在这里加上了 font-sans text-zinc-900 确保字体颜色和你的主页一致
    <nav className="navbar !block border-b-4 border-black bg-white p-0 sticky top-0 z-50 font-sans text-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-center justify-center transform rotate-3">
              <Pickaxe size={24} className="text-white" />
            </div>
            {/* 使用 Link 包裹 Logo，点击回首页 */}
            <Link to="/" className="font-black text-2xl tracking-tight uppercase hover:no-underline text-black">
              USTC<span className="text-emerald-600">MC101</span>
            </Link>
          </div>
          
          {/* 桌面端菜单 */}
          <div className="hidden md:flex items-center space-x-8 font-bold">
            {/* ⚠️ 注意：这里把 <a> 换成了 <Link to="..."> */}
            <Link to="/" className="hover:text-emerald-600 transition-colors text-black hover:no-underline">主页</Link>
            <Link to="/docs" className="hover:text-emerald-600 transition-colors text-black hover:no-underline">教程文档</Link>
            <a href="https://wiki.ustcmc.com:5500/" className="hover:text-emerald-600 transition-colors text-black hover:no-underline">Wiki</a>
            
            <a href="https://www.ustcmc.com/lobby">
              <button className="bg-amber-300 px-6 py-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] cursor-pointer transition-all font-black">
                社团主页
              </button>
            </a>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 border-2 border-black bg-gray-100 hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] cursor-pointer transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端展开菜单 */}
      {isMenuOpen && (
        <div className="md:hidden border-t-4 border-black bg-white p-4 font-bold flex flex-col gap-4">
          <Link to="/" className="block py-2 border-b-2 border-gray-200 text-black hover:no-underline">主页</Link>
          <Link to="/docs" className="block py-2 border-b-2 border-gray-200 text-black hover:no-underline">教程文档</Link>
          <a href="https://wiki.ustcmc.com:5500/" className="hover:text-emerald-600 transition-colors text-black hover:no-underline">Wiki</a>
          <a href="https://www.ustcmc.com/lobby">
              <button className="bg-amber-300 px-6 py-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] cursor-pointer transition-all font-black">
                社团主页
              </button>
            </a>
        </div>
      )}
    </nav>
  );
}