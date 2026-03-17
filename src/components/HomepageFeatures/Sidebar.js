import React from 'react';
import { Server } from 'lucide-react';
import HomepageButton from '../Button/Button';

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-8">
      {/* 服务器状态面板 */}
      <div className="bg-zinc-900 border-4 border-black p-6 text-white shadow-serverInfoCard">
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
              className="w-full bg-black border-2 border-zinc-600 hover:border-colorset-primary active:bg-zinc-900 active:scale-[0.99] p-3 font-mono text-center transition-all duration-100 ease-out text-colorset-primaryLight"
            >
              114514.ustcmc.com
            </button>
          </div>
        </div>
      </div>

      {/* 参与贡献卡片 */}
      <div className="bg-cyan-100 border-4 border-black p-6 shadow-brutal-xl">
        <h3 className="text-2xl font-black mb-3">一起编写教程！</h3>
        <p className="text-zinc-700 font-bold mb-6">发现教程有误？或者想分享你的独家红石机器？本教程欢迎所有玩家参与共建。</p>
        <HomepageButton
          onClick={() => window.location.href = '/contact'}
          text="申请成为编辑者"
        />
      </div>
    </div>
  );
}
