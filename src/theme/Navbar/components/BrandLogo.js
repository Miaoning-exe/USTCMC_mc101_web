import React from 'react';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function BrandLogo() {
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
