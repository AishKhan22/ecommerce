'use client'

import React, { useState } from "react";
import Image from "next/image";

const Imagegrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/img1.png", 
    "/img2.png",
    "/img3 (2).png",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="flex mt-12 flex-col lg:flex-row items-center w-full max-w-[1440px] mx-auto p-4 lg:p-6 bg-[#F9F1E7]">
      {/* Left Text Section */}
      <div className="flex-1  ml-9 lg:pr-12 mb-6 lg:mb-0" style={{ width: '422px', height: '151px' }}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
          50+ Beautiful rooms <br/> inspiration
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
          Our designer already made a lot of beautiful <br/> prototypes of rooms that
          inspire you.
        </p>
        <button className="bg-[#B88E2F] text-white px-6 py-3 text-sm md:text-base font-bold rounded hover:bg-[#a77b2b] transition">
          Explore More
        </button>
      </div>

      {/* Right Slider Section */}
      <div className="flex-1 relative w-full lg:w-[50%] overflow-hidden">
        <div className="flex gap-2 justify-center w-full">
          {/* Image display based on the current index */}
          <div className="relative w-[372px] h-[486px] flex-shrink-0">
            <Image
              src={images[currentIndex]}
              alt="Room Inspiration"
              width={372} 
              height={486}
              objectFit="cover"
            />
          </div>

          <div className="relative w-[372px] h-[486px] flex-shrink-0">
            <Image
              src={images[(currentIndex + 1) % images.length]} // Show the next image after current
              alt="Room Inspiration"
              width={372} 
              height={486} 
              objectFit="cover"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute  top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          ▶
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-[#B88E2F]" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Imagegrid;
