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
import { Menu, X } from 'lucide-react';
import NavbarButton from '../../components/Button/Button';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';



function BrandLogo() {
  const { navbar } = useThemeConfig();
  const logo = navbar.logo;
  const logoUrl = useBaseUrl(logo?.src);

  return (
    <div className="flex items-center gap-3">
      {logo && logoUrl && (
        <Link to={logo.href || '/'} className="flex items-center">
          <img 
            src={logoUrl} 
            alt={logo.alt || 'Logo'} 
            className="w-12 h-12 object-contain" 
          />
        </Link>
      )}

      <Link to="/" className="font-black text-2xl tracking-tight uppercase hover:no-underline text-black">
        USTC<span className="text-emerald-600">MC101</span>
      </Link>
    </div>
  );
}



function DesktopMenu({ items }) {
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
          <Link key={index} to={item.to} className="hover:text-emerald-600 transition-colors text-black hover:no-underline">
            {item.label}
          </Link>
        ) : (
          <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors text-black hover:no-underline">
            {item.label}
          </a>
        );
      })}
    </div>
  );
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


function MobileDropdown({ items }) {
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

function NavbarLayout({children}) {
  return (
    <nav className="navbar !block border-b-4 border-black bg-white p-0 sticky top-0 z-50 font-sans text-zinc-900">
      {children}
    </nav>
  )
}


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navbar } = useThemeConfig();
  const items = navbar.items;

  return (
    <nav className="navbar !block border-b-4 border-black bg-white p-0 sticky top-0 z-50 font-sans text-zinc-900">
      <NavbarLayout>
        <div className="navbar__inner flex items-center justify-between px-4 py-3">
          <BrandLogo />
          <DesktopMenu items={items}/>
          <MobileToggleButton isMenuOpen={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </NavbarLayout>

      {/* Mobile Drop Down */}
      {isMenuOpen && <MobileDropdown items={items} />}
    
    </nav>
  );
}