import React from 'react';
import BrandLogo from '../../../components/BrandLogo';
import { useThemeConfig } from '@docusaurus/theme-common';

/**
 * Configurable at docusaurus.config.js
 * config.themeConfig.footer.description
 */
export default function FooterBrand() {
    const { footer } = useThemeConfig();
    const description = footer?.description;

    return (
        <div className="col-span-1 md:col-span-2">
            <BrandLogo text0_color="white" text1_color="colorset-primaryDarker" />
            {description && (
                <p className="text-zinc-400 font-bold max-w-sm mt-4">
                    {description}
                </p>
            )}
        </div>
    );
}
