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
import { useThemeConfig } from '@docusaurus/theme-common';
import BrandLogo from '../../components/BrandLogo';
import DesktopMenu from './components/DesktopMenu';
import MobileToggleButton from './components/MobileToggleButton';
import MobileDropdown from './components/MobileDropdown';
import NavbarLayout from './components/NavbarLayout';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navbar } = useThemeConfig();
  const items = navbar.items;

  return (
    <nav className="navbar !block border-b-4 border-black bg-white p-0 sticky top-0 z-50 font-sans text-zinc-900">
      <NavbarLayout>
        <div className="navbar__inner flex items-center justify-between px-4 py-3">
          <BrandLogo />
          <DesktopMenu items={items} />
          <MobileToggleButton isMenuOpen={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </NavbarLayout>

      {/* Mobile Drop Down */}
      {isMenuOpen && <MobileDropdown items={items} />}

    </nav>
  );
}