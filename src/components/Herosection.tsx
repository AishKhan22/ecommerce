import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center w-full h-[316px] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
      style={{ backgroundImage: 'url(/shop.png)' }} 
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-black px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-[124px] h-[72px] flex justify-center items-center">
          Shop
        </h1>
        <div className="mt-2 text-base sm:text-lg md:text-xl">
          <span className="text-sm sm:text-base">Home</span> &gt;{' '}
          <span className="text-sm sm:text-base">Shop</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
