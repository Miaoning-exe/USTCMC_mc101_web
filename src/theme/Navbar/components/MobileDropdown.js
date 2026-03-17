import React from 'react';
import Link from '@docusaurus/Link';
import NavbarButton from '../../../components/Button/Button';

export default function MobileDropdown({ items }) {
    return (
        <div className="md:hidden border-t-4 border-black bg-white p-4 font-bold flex flex-col gap-4">
            {items.map((item, index) => {
                // If button
                if (item.customProps?.isButton) {
                    return (
                        <NavbarButton
                            key={index}
                            to={item.to || item.href}
                            text={item.label}
                            color={item.customProps.color}
                            className="w-full mt-2"
                        />
                    );
                }

                // Otherwise, render it as a normal link
                return item.to ? (
                    <Link key={index} to={item.to} className="block py-2 border-b-2 border-gray-200 text-black hover:no-underline">
                        {item.label}
                    </Link>
                ) : (
                    <a key={index} href={item.href} className="block py-2 border-b-2 border-gray-200 text-black hover:no-underline">
                        {item.label}
                    </a>
                );
            })}
        </div>
    );
}
