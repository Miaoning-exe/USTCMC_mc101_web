import React from 'react';

export default function FooterCopyright() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-500 font-bold text-sm">
            <p className="mb-2">© {new Date().getFullYear()} USTCMC. 并非官方 Minecraft 产品。</p>
            <p>
                除非另有声明，本站所有内容均采用{' '}
                <a
                    href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-colorset-primaryDark underline decoration-zinc-600 hover:decoration-colorset-primaryDark underline-offset-4 transition-all"
                >
                    CC BY-SA 4.0 国际许可协议
                </a>
                {' '}进行许可。
            </p>
        </div>
    );
}
