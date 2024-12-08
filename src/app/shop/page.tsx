import Features from '@/components/Features'
import HeroSection from '@/components/Herosection';
import Pagination from '@/components/Pagination';
import Shopproducts from '@/components/Shopproducts';
import Shopproductstwo from '@/components/Shopproductstwo';
import React from 'react'

export const shop = () => {
  return (
    <div>
   <HeroSection/>   
   <Shopproducts/>
   <Shopproductstwo/>
   <Shopproductstwo/>
   <Shopproductstwo/>
   <Pagination/>
   <Features/>
  

    </div>
  )
}

export default shop;  // Ensure this is the default export
