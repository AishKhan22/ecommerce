import React from "react";
import Image from "next/image";

export const BrowseRange = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Browse the Range
        </h2>
        {/* Subtitle */}
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <Image
              src="/Dining.png" // Ensure the image is in the public directory
              alt="Dining Room Product"
              width={381}
              height={480}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black">Dining</h3>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <Image
              src="/Living.png" // Ensure the image is in the public directory
              alt="Living Room Product"
              width={381}
              height={480}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Living</h3>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <Image
              src="/bedroom.png" // Ensure the image is in the public directory
              alt="Bedroom Product"
              width={381}
              height={480}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Bedroom</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
