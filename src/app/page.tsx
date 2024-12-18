import { BrowseRange } from "@/components/BrowseRange";
import { Hero } from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Link from "next/link";

import Image from "next/image";
import ImageGrid from "@/components/Imagegrid";



export default function Home() {
  return (
    <div>
      <Hero />
      <Link href="/shoppage">
        {/* Link for Shop */}
      </Link>
      <Link href="/contact">
        {/* Link for Contact */}
      </Link>
      <BrowseRange />
      <ProductGrid />
      
      {/* Simple Button below ProductGrid */}
      <div className="flex justify-center mt-8">
        <button className="border-2 border-[#B88E2F] text-[#B88E2F] font-bold w-[245px] h-[48px] flex items-center justify-center">
          Show More
        </button>
      </div>

      
    <ImageGrid/>
  
    </div>
  );
}
