import React from "react";
import ProductCard from "./ProductCard"; // Import the reusable ProductCard component

const ProductGrid = () => {
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
      imageUrl: "leviosa.png",
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
    {
      name: "Grifo",
      description: "Night Lamp",
      price: "Rp 1.500.000",
      originalPrice: "",
      discount: "",
      imageUrl: "grifo.png",
    },
    {
      name: "Muggo",
      description: "Small Mug",
      price: "Rp 150.000",
      originalPrice: "",
      discount: "New",
      imageUrl: "muggo.png",
    },
    {
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      originalPrice: "Rp 1.400.000",
      discount: "-50%",
      imageUrl: "pingky.png",
    },
    {
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 5.00.000",
      originalPrice: "",
      discount: "New",
      imageUrl: "potty.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1"> {/* Changed gap-6 to gap-1 for 4px spacing */}
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

export default ProductGrid;
