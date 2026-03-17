import React from 'react';
import Link from '@docusaurus/Link';

export default function FooterLinks() {
    return (
        <>
            <div>
                <h4 className="text-xl font-black mb-4 border-b-2 border-zinc-700 pb-2 inline-block">友链</h4>
                <ul className="space-y-2 font-bold text-zinc-400 p-0 list-none">
                    <li><Link to="/docs/basic" className="hover:text-emerald-400 transition-colors text-zinc-400 hover:no-underline">NJU MC</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-xl font-black mb-4 border-b-2 border-zinc-700 pb-2 inline-block">加入社团</h4>
                <ul className="space-y-2 font-bold text-zinc-400 p-0 list-none">
                    <li><a href="https://qq.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors text-zinc-400 hover:no-underline">QQ 群</a></li>
                    <li><a href="https://bilibili.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors text-zinc-400 hover:no-underline">Bilibili 官方号</a></li>
                </ul>
            </div>
        </>
    );
}
