import React from 'react';

export default function NavbarLayout({ children }) {
    return (
        <nav className="navbar !block border-b-4 border-black bg-white p-0 sticky top-0 z-50 font-sans text-zinc-900">
            {children}
        </nav>
    )
}
