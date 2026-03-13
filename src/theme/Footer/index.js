// import React from 'react';
// import {useThemeConfig} from '@docusaurus/theme-common';
// import FooterLinks from '@theme/Footer/Links';
// import FooterLogo from '@theme/Footer/Logo';
// import FooterCopyright from '@theme/Footer/Copyright';
// import FooterLayout from '@theme/Footer/Layout';
// function Footer() {
//   const {footer} = useThemeConfig();
//   if (!footer) {
//     return null;
//   }
//   const {copyright, links, logo, style} = footer;
//   return (
//     <FooterLayout
//       style={style}
//       links={links && links.length > 0 && <FooterLinks links={links} />}
//       logo={logo && <FooterLogo logo={logo} />}
//       copyright={copyright && <FooterCopyright copyright={copyright} />}
//     />
//   );
// }
// export default React.memo(Footer);


// src/theme/Footer/index.jsx
import React from 'react';
import Link from '@docusaurus/Link';
import { Pickaxe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white border-t-8 border-black pt-16 pb-8 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Pickaxe size={24} className="text-emerald-400" />
            <span className="font-black text-2xl uppercase">USTC MC101</span>
          </div>
          <p className="text-zinc-400 font-bold max-w-sm">
            由USTC Minecraft 社团构建的综合版 Minecraft 教程与维基社区。生存，建造，探索，永不止步。
          </p>
        </div>
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
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-500 font-bold text-sm">
        <p className="mb-2">© {new Date().getFullYear()} USTCMC. 并非官方 Minecraft 产品。</p>
        <p>
          除非另有声明，本站所有内容均采用{' '}
          <a 
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-emerald-400 underline decoration-zinc-600 hover:decoration-emerald-400 underline-offset-4 transition-all"
          >
            CC BY-SA 4.0 国际许可协议
          </a>
          {' '}进行许可。
        </p>
      </div>
    </footer>
  );
}