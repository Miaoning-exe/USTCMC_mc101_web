import React from 'react';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';

export default function FooterLinks() {
    const { footer } = useThemeConfig();
    if (!footer || !footer.links) {
        return null;
    }

    return (
        <>
            {footer.links.map((linkItem, i) => (
                <div key={i}>
                    <h4 className="text-xl font-black mb-4 border-b-2 border-zinc-700 pb-2 inline-block">
                        {linkItem.title}
                    </h4>
                    <ul className="space-y-2 font-bold text-zinc-400 p-0 list-none">
                        {linkItem.items.map((item, j) => (
                            <li key={j}>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-colorset-primaryDark transition-colors text-zinc-400 hover:no-underline"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={item.to}
                                        className="hover:text-colorset-primaryDark transition-colors text-zinc-400 hover:no-underline"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}
