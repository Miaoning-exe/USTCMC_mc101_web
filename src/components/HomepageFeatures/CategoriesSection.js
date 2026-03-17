import React from 'react';
import { ArrowDownToLine, Swords, Zap, Hammer, ChevronRight } from 'lucide-react';

export default function CategoriesSection() {
  const categories = [
    { id: 1, title: '游戏安装', desc: '从0开始的Minecraft之旅', icon: <ArrowDownToLine size={32} />, color: 'bg-cyan-400' },
    { id: 2, title: '基础生存', desc: '从撸树到末影龙，第一天的完美开局指南。', icon: <Swords size={32} />, color: 'bg-emerald-400' },
    { id: 3, title: '红石科技', desc: '自动化农场、密码门与生电基础原理剖析。', icon: <Zap size={32} />, color: 'bg-red-400' },
    { id: 4, title: '建筑美学', desc: '火柴盒改造计划，中世纪与现代风格建筑教学。', icon: <Hammer size={32} />, color: 'bg-amber-400' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-black uppercase">教程分类</h2>
        <div className="h-1 flex-1 bg-black hidden sm:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white border-4 border-black p-6 shadow-brutal-xl 
            active:translate-y-[8px] active:translate-x-[8px] active:shadow-none
            transition-all 
            cursor-pointer group flex flex-col h-full"
          >
            <div className={`${category.color} w-16 h-16 border-4 border-black flex items-center justify-center mb-6 shadow-brutal-m group-hover:scale-110 transition-transform`}>
              {category.icon}
            </div>
            <h3 className="text-2xl font-black mb-3">{category.title}</h3>
            <p className="text-zinc-600 font-bold mb-6 flex-1">{category.desc}</p>
            <div className="flex items-center font-black text-colorset-primaryDarker group-hover:text-colorset-primaryDarkest uppercase mt-auto">
              查阅教程 <ChevronRight size={20} className="ml-1 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
