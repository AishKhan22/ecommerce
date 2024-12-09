import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative flex items-center justify-center w-full h-[60vh] md:h-[80vh] lg:h-[809px] pt-[80px]">
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/hero.png" // Path to image in public folder
          alt="Hero Image"
          layout="fill" // Fills the container
          objectFit="cover" // Ensures the image covers the container
          priority // Preloads the image for better performance
        />
      </div>

      {/* Content Section */}
      <div
        className="absolute bg-[#FFF3E3] max-w-[90%] md:max-w-[60%] lg:max-w-[40%] p-6 lg:pr-8 lg:pt-8 shadow-md rounded-md"
        style={{ top: "253px", left: "739px" }} // Spacing adjustments
      >
        <h2 className="text-base md:text-lg text-[#333333] mb-2">New Arrival</h2>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B88E2F] mb-4 leading-tight">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-sm md:text-base text-black mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B88E2F] text-white px-8 py-3 text-sm md:text-base font-bold rounded hover:bg-[#a77b2b] transition">
          BUY NOW
        </button>
      </div>
    </section>
  );
};
