import React from 'react';
import { Menu, X } from 'lucide-react';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';

export default function MobileToggleButton({ isMenuOpen, toggle }) {
    return (
        <div className="md:hidden flex items-center">
            <div className="mr-4">
                <NavbarColorModeToggle />
            </div>

            <button onClick={toggle}
                className="pt-1 border-0 bg-transparent cursor-pointer">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
    )
}
