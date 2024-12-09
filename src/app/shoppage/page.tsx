// src/app/shop/page.tsx
import Features from '@/components/Features';
import FilterBar from '@/components/Filterbar';
import HeroSection from '@/components/Herosection';
import Pagination from '@/components/Pagination';
import Shopproducts from '@/components/Shopproducts';
import Shopproductstwo from '@/components/Shopproductstwo';
import React from 'react';

const shoppage = () => {
  return (
    <div>
      <HeroSection />
      <FilterBar/>
      <Shopproducts />
      <Shopproductstwo />
      <Shopproductstwo />
      <Shopproductstwo />
      <Pagination />
      <Features />
    </div>
  );
};

export default shoppage; // Ensure it's a default export
