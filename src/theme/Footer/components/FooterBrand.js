import React from 'react';
import BrandLogo from '../../../components/BrandLogo';

export default function FooterBrand() {
    return (
        <div className="col-span-1 md:col-span-2">
            <BrandLogo text0_color="white" text1_color="colorset-primaryDarker" />
            <p className="text-zinc-400 font-bold max-w-sm mt-4">
                由USTC Minecraft 社团构建的综合版 Minecraft 教程与维基社区。生存，建造，探索，永不止步。
            </p>
        </div>
    );
}
