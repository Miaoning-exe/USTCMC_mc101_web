import React from 'react';
import FooterBrand from './components/FooterBrand';
import FooterLinks from './components/FooterLinks';
import FooterCopyright from './components/FooterCopyright';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white border-t-8 border-black pt-16 pb-8 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <FooterBrand />
        <FooterLinks />
      </div>
      <FooterCopyright />
    </footer>
  );
}