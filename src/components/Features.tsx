import React from 'react';

const Features = () => {
  const features = [
    {
      imgSrc: '/high.png', // Replace with actual image path
      title: 'High Quality',
      description: 'Crafted from top materials',
    },
    {
      imgSrc: '/Vector.png', // Replace with actual image path
      title: 'Warranty Protection',
      description: 'Over 2 years',
    },
    {
      imgSrc: '/shipping.png', // Replace with actual image path
      title: 'Free Shipping',
      description: 'Order over 150 $',
    },
    {
      imgSrc: '/customer-support.png', // Replace with actual image path
      title: '24 / 7 Support',
      description: 'Dedicated support',
    },
  ];

  return (
    <div className="bg-[#f8f3eb] py-10 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4" // Adjusted to align image and text horizontally
          >
            <div>
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="w-[60px] h-[60px] object-contain" // Set image size to 60px by 60px
              />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-bold text-lg text-black">{feature.title}</h3> {/* Title at the top right */}
              <p className="text-sm text-gray-800">{feature.description}</p> {/* Description below title */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
