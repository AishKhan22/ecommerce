import React from "react";
import ProductCard from "./ProductCard"; // Import the reusable ProductCard component

const Shopproducts = () => {
  // Product data
  const products = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      imageUrl: "syltherine (2).png",
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 4.000.000",
      discount: "",
      imageUrl: "k.PNG",
    },
    {
      name: "Lolito",
      description: "Classic wooden chair",
      price: "Rp 7,000,000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      imageUrl: "lolito (2).png",
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      originalPrice: "",
      discount: "New",
      imageUrl: "respiraa.png",
    },
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          description={product.description}
          price={product.price}
          originalPrice={product.originalPrice}
          discount={product.discount}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default Shopproducts;
