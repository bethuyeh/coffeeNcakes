import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import products from "./ProductsData"; // Import your products data

const PickACoffee = ({ handleAddToCart }: { handleAddToCart: (product: any) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  // Navigate slider
  const prevPage = () => {
    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  };

  const nextPage = () => {
    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  };

  // Handle Add to Cart
  const handleAdd = () => {
    if (!size) {
      alert("Please select a size before adding to cart.");
    } else {
      const selectedProduct = products[currentIndex];
      handleAddToCart({
        ...selectedProduct,
        size,
        quantity,
        price: selectedProduct.price,
      });
      alert(
        `${selectedProduct.name} (${size}) added to cart. Quantity: ${quantity}`
      );
      setQuantity(1); // Reset quantity
      setSize(""); // Reset size
    }
  };

  // Handle size selection
  const handleSize = (selectedSize) => {
    setSize(selectedSize);
  };

  const currentProduct = products[currentIndex];

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen w-full relative ${products[currentIndex].backgroundColor} `}
      style={{ backgroundColor: currentProduct.backgroundColor }} // Dynamically set background color
    >
      {/* Arrows */}
      <button
        onClick={prevPage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-sm hover:bg-gray-300 z-10"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={nextPage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-sm hover:bg-gray-300 z-10"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Product Details */}
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <img
          src={currentProduct.image}
          alt={currentProduct.name}
          className="w-[300px] h-[300px] object-contain"
        />
        <h2 className="text-xl font-bold">{currentProduct.name}</h2>
        <h3 className="text-2xl font-bold text-white">
          ₦{currentProduct.price}
        </h3>

        {/* Size Selector */}
        <div className="flex space-x-4">
          {["Small", "Medium", "Large"].map((s) => (
            <button
              key={s}
              onClick={() => handleSize(s)}
              className={`px-4 py-2 rounded-full ${
                size === s
                  ? "bg-coffee-600 text-white"
                    :"bg-white text-coffee-600"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAdd}
          className="bg-white text-black px-6 py-3 rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PickACoffee;
