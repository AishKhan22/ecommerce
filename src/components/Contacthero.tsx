import React from 'react';

const Contacthero = () => {
  return (
    <div
      className="relative bg-cover bg-center w-full h-[316px] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
      style={{ backgroundImage: 'url(/shop.png)' }} // Ensure the image is in the public folder
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        {/* Logo */}
        <img
          src="/logo.png" // Replace with the actual path to your logo
          alt="Logo"
          className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] mb-4" // Adjust size and spacing for responsiveness
        />
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-full flex justify-center items-center">
          Contact
        </h1>
        {/* Breadcrumb */}
        <div className="mt-2 text-sm sm:text-base md:text-lg">
          <span className="text-sm sm:text-base">Home</span> &gt;{' '}
          <span className="text-sm sm:text-base">Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Contacthero;
