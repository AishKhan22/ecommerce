import React from "react";

const ProductCard = ({ name, description, price, originalPrice, discount, imageUrl }: any) => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[285px] h-[446px] m-auto flex flex-col">
      {/* Product Image with Discount Badge */}
      <div className="relative w-full h-[301px]">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {discount}
        </span>
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between p-4 h-[145px]">
        {/* Title */}
        <h3 className="text-md font-semibold text-gray-900 w-full h-[29px] truncate">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm h-[48px] overflow-hidden">{description}</p>

        {/* Pricing */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-900 font-bold">{price}</span>
          <span className="line-through text-gray-400 text-sm">
            {originalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;