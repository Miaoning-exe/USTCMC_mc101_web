import React from 'react';
import Link from '@docusaurus/Link';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarButton from '../../../components/Button/Button';
import SkinPicker from './SkinPicker';

export default function DesktopMenu({ items }) {
    return (
        <div className="hidden md:flex items-center space-x-8 font-bold">
            {items.map((item, index) => {
                // If `customProps.isButton` is specified in the configuration, it will be rendered as a button
                if (item.customProps?.isButton) {
                    return (
                        <NavbarButton
                            key={index}
                            to={item.to || item.href}
                            text={item.label}
                            color={item.customProps.color}
                        />
                    );
                }

                // Otherwise, render it as a normal link
                return item.to ? (
                    <Link key={index} to={item.to} className="hover:text-colorset-primaryDarker transition-colors text-black hover:no-underline">
                        {item.label}
                    </Link>
                ) : (
                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-colorset-primaryDarker transition-colors text-black hover:no-underline">
                        {item.label}
                    </a>
                );
            })}

            <SkinPicker />

            <div className="pl-4 border-l-2 border-zinc-200 flex items-center">
                <NavbarColorModeToggle />
            </div>
        </div>
    );
}
