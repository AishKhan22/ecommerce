import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        width: '1440px',
        height: '316px',
        backgroundImage: 'url(/shop.png)', // Ensure the image exists in the public folder
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-black px-4">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex justify-center items-center">
          Shop
        </h1>
        {/* Breadcrumb */}
        <div className="mt-2 text-base sm:text-lg md:text-xl">
          <span className="text-sm sm:text-base">Home</span> &gt;{' '}
          <span className="text-sm sm:text-base">Shop</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
