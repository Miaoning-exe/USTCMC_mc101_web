import React from 'react';
import { BookOpen, Search } from 'lucide-react';
import HeroButton from '../Button/HeroButton';

export default function HeroSection() {
  return (
    <header className="relative py-20 lg:py-32 overflow-hidden border-b-4 border-black">
      {/* 背景装饰方块 */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-emerald-400 border-4 border-black opacity-20 transform -rotate-6"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-600 border-4 border-black opacity-20 transform rotate-12"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-400 border-4 border-black opacity-20 transform rotate-45"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block bg-zinc-900 text-white px-4 py-1 border-2 border-black shadow-title0 mb-6 font-bold transform -rotate-2">
          USTCMC | MC101
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-black">
          你的 <span className="text-colorset-primaryDark bg-colorset-primaryLightest px-2 border-4 border-black inline-block transform rotate-1 shadow-brutal-m">Minecraft</span> <br className="hidden md:block" />
          生存指南与知识库。
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 mb-10 max-w-2xl mx-auto font-medium">
          这是由USTC Minecraft 社团维护的教程站。无论你是刚撸下第一块木头的新手，还是精通生电的大佬，这里都有属于你的营地。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <HeroButton
            onClick={() => window.location.href = '/docs'}
            text="浏览教程"
            icon={<BookOpen size={20} />}
            color="bg-colorset-primary"
          />

          <div className="w-full sm:w-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-zinc-500" />
            </div>
            <input
              type="text"
              placeholder="搜索教程、物品、机制..."
              className="w-full sm:w-80 pl-10 pr-4 py-4 border-4 border-black bg-white text-lg font-bold placeholder-zinc-400 focus:outline-none focus:ring-0 shadow-brutal-l"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
