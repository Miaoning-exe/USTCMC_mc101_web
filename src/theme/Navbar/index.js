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
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import { usePageSkin } from '../../hooks/usePageSkin';



function BrandLogo() {
  const { navbar } = useThemeConfig();
  const logo = navbar.logo;
  const title = navbar.title || 'USTC MC101'; 
  const [text0, text1] = title.split(' ');
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
        {text0} <span className="text-colorset-primaryDarker">{text1}</span>
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


function MobileToggleButton({ isMenuOpen, toggle }) {
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


function SkinPicker() {
  const { skin, changeSkin } = usePageSkin();

  const skins = [
    { id: 'emerald', name: '翠绿', color: 'bg-emerald-400' },
    { id: 'skyBlue', name: '天蓝', color: 'bg-[#25799d]' },
  ];

  return (
    <div className="flex items-center gap-2">
      {skins.map((s) => (
        <button
          key={s.id}
          title={s.name}
          onClick={() => changeSkin(s.id)}
          className={`
            w-5 h-5 border-2 border-black cursor-pointer transition-transform
            ${s.color}
            ${skin === s.id 
              ? 'translate-y-[2px] translate-x-[2px] shadow-none' // 选中时的按压状态
              : 'shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:-translate-y-[1px]' // 未选中时的浮起状态
            }
          `}
        />
      ))}
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