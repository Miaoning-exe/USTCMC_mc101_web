// import React from 'react';
// import NavbarLayout from '@theme/Navbar/Layout';
// import NavbarContent from '@theme/Navbar/Content';
// export default function Navbar() {
//   return (
//     <NavbarLayout>
//       <NavbarContent />
//     </NavbarLayout>
//   );
// }



import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { Pickaxe, Menu, X } from 'lucide-react';
import NavbarButton from '../../components/Button/Button';

// Config of navbar items
const NAV_ITEMS = [
  { label: '主页', to: '/' },
  { label: '教程文档', to: '/docs' },
  { label: 'Wiki', href: 'https://wiki.ustcmc.com:5500/' },
];


function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-emerald-500 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-center justify-center transform rotate-3">
        <Pickaxe size={24} className="text-white" />
      </div>
      <Link to="/" className="font-black text-2xl tracking-tight uppercase hover:no-underline text-black">
        USTC<span className="text-emerald-600">MC101</span>
      </Link>
    </div>
  );
}



function DesktopMenu() {
  return (
    <div className="hidden md:flex items-center space-x-8 font-bold">
      {/* normal links */}
       {NAV_ITEMS.map((item, index) => (
        item.to ? (
          <Link key={index} to={item.to} className="hover:text-emerald-600 transition-colors text-black hover:no-underline">
            {item.label}
          </Link>
        ) : (
          <a key={index} href={item.href} className="hover:text-emerald-600 transition-colors text-black hover:no-underline">
            {item.label}
          </a>
        )
      ))}

      <NavbarButton
        href="https://www.ustcmc.com/lobby"
        text="社团主页"
        color="bg-amber-300"
        width="w-auto"
        height="h-auto"
      />
    </div>
  )
}


function MobileToggleButton({ isMenuOpen, toggle }) {
  return (
    <div className="md:hidden flex items-center">
      <button onClick={toggle} 
        className="p-2 border-2 border-black bg-gray-100 hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[0px_0px_0_0_rgba(0,0,0,1)] cursor-pointer transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  )
}


function MobileDropdown() {
  return (
    <div className="md:hidden border-t-4 border-black bg-white p-4 font-bold flex flex-col gap-4">
      {/* normal links */}
      {NAV_ITEMS.map((item, index) => (
        item.to ? (
          <Link key={index} to={item.to} className="hover:text-emerald-600 transition-colors text-black hover:no-underline">
            {item.label}
          </Link>
        ) : (
          <a key={index} href={item.href} className="hover:text-emerald-600 transition-colors text-black hover:no-underline">
            {item.label}
          </a>
        )
      ))}

      <NavbarButton
        href="https://www.ustcmc.com/lobby"
        text="社团主页"
        color="bg-amber-300"
        width="w-auto"
        height="h-auto"
      />
    </div>
  )
}


function NavbarLayout({children}) {
  return (
    <nav className="navbar !block border-b-4 border-black bg-white p-0 sticky top-0 z-50 font-sans text-zinc-900">
      {children}
    </nav>
  )
}


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar !block border-b-4 border-black bg-white p-0 sticky top-0 z-50 font-sans text-zinc-900">
      <NavbarLayout>
        <div className="navbar__inner flex items-center justify-between px-4 py-3">
          <BrandLogo />
          <DesktopMenu />
          <MobileToggleButton isMenuOpen={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </NavbarLayout>

      {/* Mobile Drop Down */}
      {isMenuOpen && <MobileDropdown />}
    
    </nav>
  );
}