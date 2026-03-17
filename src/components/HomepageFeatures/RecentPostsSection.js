import React from 'react';

export default function RecentPostsSection() {
  const recentPosts = [
    { id: 1, title: '【红石】如何建造一个每小时产出10000+的刷铁机', tag: '红石科技', date: '2023-10-25' },
    { id: 2, title: '【建筑】屋顶的10种搭法，告别火柴盒', tag: '建筑美学', date: '2023-10-22' },
    { id: 3, title: '【生存】1.20版本村民交易所最优布局', tag: '基础生存', date: '2023-10-20' },
    { id: 4, title: '【公告】第三赛季主城规划图及地皮认领说明', tag: '服务器动态', date: '2023-10-18' },
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
      <button className="mt-8 border-4 border-black bg-zinc-100 px-6 py-3 font-black shadow-brutal-m hover:bg-zinc-200 transition-colors w-full sm:w-auto text-center">
        查看所有归档
      </button>
    </div>
  );
}
