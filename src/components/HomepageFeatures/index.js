import React, { useState } from 'react';
import HeroSection from './HeroSection';
import CategoriesSection from './CategoriesSection';
import RecentPostsSection from './RecentPostsSection';
import Sidebar from './Sidebar';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f4f0] font-sans text-zinc-900">
      <HeroSection />
      <CategoriesSection />

      {/* 最新教程与服务器状态区域 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <RecentPostsSection />
        <Sidebar />
      </section>
    </div>
  );
};

export default Homepage;