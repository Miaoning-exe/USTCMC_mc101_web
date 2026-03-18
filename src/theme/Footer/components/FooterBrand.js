import React from 'react';
import FooterLogo from '../../../components/Logo/Logo';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Configurable at docusaurus.config.js
 * config.customFields.footer.description
 */
export default function FooterBrand() {
    const { siteConfig } = useDocusaurusContext();
    const description = siteConfig.customFields?.footer?.description;

    return (
        <div className="col-span-1 md:col-span-2">
            <FooterLogo text0_color="white" text1_color="colorset-primaryDarker" />
            <p className="text-zinc-400 font-bold max-w-sm mt-4">
                {description}
            </p>
        </div>
    );
}
