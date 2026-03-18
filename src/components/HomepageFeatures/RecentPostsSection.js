import React from 'react';
import HomepageButton from '../Button/Button';

export default function RecentPostsSection() {
  const recentPosts = [
    { id: 1, title: '【生电】如何建造一个每小时产出10000+的刷线机', tag: '红石科技', date: '2025-03-10' },
    { id: 2, title: '【建筑】粉红色抽屉墙的建造教程', tag: '建筑美学', date: '2025-03-18' },
    { id: 3, title: '【建筑】服务器地铁线路修建指南', tag: '建筑美学', date: '2023-10-20' },
    { id: 4, title: '【公告】关于封禁玩家"xxxxx00025"的公告', tag: '服务器动态', date: '2025-03-19' },
  ];

  return (
    <div className="lg:col-span-2">
      <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
        <span className="bg-black text-white px-3 py-1 border-2 border-black transform -rotate-3">最新</span> 知识库更新
      </h2>

      <div className="flex flex-col gap-6">
        {recentPosts.map((post) => (
          <a key={post.id} href="#" className="block bg-white border-4 border-black p-4 sm:p-6 shadow-brutal-m hover:bg-emerald-50 hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-brutal-s transition-all">
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
      <HomepageButton
        onClick={() => window.location.href = '/docs'}
        text="查看所有文档"
        color="bg-zinc-100"
        width="w-full sm:w-auto"
        height="h-auto"
        className="mt-8"
      />
    </div>
  );
}
