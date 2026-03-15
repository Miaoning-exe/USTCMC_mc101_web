import React, { useState } from 'react';
import { 
  BookOpen, 
  Zap, 
  ChevronRight, 
  Server, 
  Search,
  Swords,
  Hammer,
  ArrowDownToLine
} from 'lucide-react';
import HeroButton from '../Button/HeroButton';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 模拟教程分类数据
  const categories = [
    { id: 1, title: '游戏安装', desc: '从0开始的Minecraft之旅', icon: <ArrowDownToLine size={32} />, color: 'bg-cyan-400' },
    { id: 2, title: '基础生存', desc: '从撸树到末影龙，第一天的完美开局指南。', icon: <Swords size={32} />, color: 'bg-colorset-primary' },
    { id: 3, title: '红石科技', desc: '自动化农场、密码门与生电基础原理剖析。', icon: <Zap size={32} />, color: 'bg-red-400' },
    { id: 4, title: '建筑美学', desc: '火柴盒改造计划，中世纪与现代风格建筑教学。', icon: <Hammer size={32} />, color: 'bg-amber-400' },
  ];

  // 模拟最新文章数据
  const recentPosts = [
    { id: 1, title: '【红石】如何建造一个每小时产出10000+的刷铁机', tag: '红石科技', date: '2023-10-25' },
    { id: 2, title: '【建筑】屋顶的10种搭法，告别火柴盒', tag: '建筑美学', date: '2023-10-22' },
    { id: 3, title: '【生存】1.20版本村民交易所最优布局', tag: '基础生存', date: '2023-10-20' },
    { id: 4, title: '【公告】第三赛季主城规划图及地皮认领说明', tag: '服务器动态', date: '2023-10-18' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f0] font-sans text-zinc-900">
      {/* Hero 头部区域*/}
      <header className="relative py-20 lg:py-32 overflow-hidden border-b-4 border-black">
        {/* 背景装饰方块 */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-colorset-primary border-4 border-black opacity-20 transform -rotate-6"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-600 border-4 border-black opacity-20 transform rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-400 border-4 border-black opacity-20 transform rotate-45"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block bg-zinc-900 text-white px-4 py-1 border-2 border-black shadow-[4px_4px_0_0_rgba(16,185,129,1)] mb-6 font-bold transform -rotate-2">
            USTCMC | MC101
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-black">
            你的 <span className="text-colorset-primaryDark bg-colorset-primaryLightest px-2 border-4 border-black inline-block transform rotate-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">Minecraft</span> <br className="hidden md:block"/> 
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
                className="w-full sm:w-80 pl-10 pr-4 py-4 border-4 border-black bg-white text-lg font-bold placeholder-zinc-400 focus:outline-none focus:ring-0 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
              />
            </div>
          </div>
        </div>
      </header>

      {/* 主要分类区域 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-black uppercase">教程分类</h2>
          <div className="h-1 flex-1 bg-black hidden sm:block"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 hover:translate-x-1 hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transition-all cursor-pointer group flex flex-col h-full"
            >
              <div className={`${category.color} w-16 h-16 border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-black mb-3">{category.title}</h3>
              <p className="text-zinc-600 font-bold mb-6 flex-1">{category.desc}</p>
              <div className="flex items-center font-black text-colorset-primaryDarker group-hover:text-emerald-800 uppercase mt-auto">
                查阅教程 <ChevronRight size={20} className="ml-1 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 最新教程与服务器状态区域 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* 最新文章  */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <span className="bg-black text-white px-3 py-1 border-2 border-black transform -rotate-3">最新</span> 知识库更新
          </h2>
          
          <div className="flex flex-col gap-6">
            {recentPosts.map((post) => (
              <a key={post.id} href="#" className="block bg-white border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-emerald-50 hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="inline-block bg-amber-200 text-amber-900 border-2 border-black px-2 py-1 text-sm font-bold mb-2">
                      {post.tag}
                    </span>
                    <h3 className="text-xl font-bold text-black">{post.title}</h3>
                  </div>
                  <div className="text-zinc-500 font-mono font-bold shrink-0">
                    {post.date}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <button className="mt-8 border-4 border-black bg-zinc-100 px-6 py-3 font-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-zinc-200 transition-colors w-full sm:w-auto text-center">
            查看所有归档
          </button>
        </div>

        {/* 侧边栏 */}
        <div className="flex flex-col gap-8">
          {/* 服务器状态面板 */}
          <div className="bg-zinc-900 border-4 border-black p-6 text-white shadow-[8px_8px_0_0_rgba(16,185,129,1)]">
            <div className="flex items-center gap-3 mb-6 border-b-2 border-zinc-700 pb-4">
              <Server size={28} className="text-colorset-primary" />
              <h3 className="text-2xl font-black pt-3">服务器信息</h3>
            </div>
            
            <div className="space-y-4 font-bold">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">服务器名</span>
                <span className="bg-colorset-primaryDark text-black px-2 py-0.5 border-2 border-black">114514th</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">在线玩家</span>
                <span className="text-xl">12 / 50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">服务器 TPS</span>
                <span className="text-colorset-primary">20.0 (流畅)</span>
              </div>
              
              <div className="pt-4 mt-4 border-t-2 border-zinc-700">
                <p className="text-xs text-zinc-400 mb-2">点击复制服务器 IP</p>
                <button 
                  onClick={() => alert('IP已复制: 114514.ustcmc.com')}
                  className="w-full bg-black border-2 border-zinc-600 hover:border-colorset-primary p-3 font-mono text-center transition-colors text-colorset-primaryLight"
                >
                  114514.ustcmc.com
                </button>
              </div>
            </div>
          </div>

          {/* 参与贡献卡片 */}
          <div className="bg-cyan-100 border-4 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
             <h3 className="text-2xl font-black mb-3">一起编写教程！</h3>
             <p className="text-zinc-700 font-bold mb-6">发现教程有误？或者想分享你的独家红石机器？本教程欢迎所有玩家参与共建。</p>
             <button className="bg-white border-2 border-black px-4 py-2 font-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] w-full hover:bg-colorset-primaryLightest transition-colors">
               申请成为编辑者
             </button>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Homepage;