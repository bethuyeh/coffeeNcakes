import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import products from "./ProductsData"; // Import products array

const PickACoffee = ({ handleAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current product
  const [quantity, setQuantity] = useState(1); // Track quantity
  const [size, setSize] = useState(""); // Track selected size

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
        price: selectedProduct.price, // Price is already a number
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

  return (
    <div className="flex h-[90vh] w-full relative">
      {/* Left Section: Slider */}
      <div className="w-1/4 bg-gray-100 flex justify-center items-center relative">
        <button
          onClick={prevPage}
          className="absolute left-0 bg-gray-200 p-2 rounded-full shadow-sm hover:bg-gray-300 transition"
        >
          <FiChevronLeft size={24} />
        </button>

        <div className="overflow-hidden w-full flex justify-center items-center">
          <div className="flex flex-col items-center">
            <img
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              className="w-20 h-20 object-contain mx-auto"
            />
            <p className="text-gray-700 mt-2">{products[currentIndex].name}</p>
          </div>
        </div>

        <button
          onClick={nextPage}
          className="absolute right-0 bg-gray-200 p-2 rounded-full shadow-sm hover:bg-gray-300 transition"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Center Section: Large Coffee Image */}
      <div className="w-2/4 flex justify-center items-center relative">
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].name}
          className="w-[60vh] h-[80vh] object-contain z-10 transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Right Section: Price, Quantity, Size, and Add to Cart */}
      <div
        className={`w-1/4 p-6 flex flex-col justify-center items-center text-white transition-colors duration-500 ${products[currentIndex].backgroundColor}`}
      >
        <h2 className="text-4xl font-bold mb-2">{products[currentIndex].price}</h2>
        <p className="text-xl mb-4">{products[currentIndex].name}</p>

        {/* Quantity Section */}
        <div className="mt-4">
          <p className="text-lg mb-2">Quantity</p>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 text-center rounded text-gray-700"
          />
        </div>

        {/* Size Selection */}
        <div className="mt-4">
          <p className="text-lg mb-2">Select Size</p>
          <div className="flex space-x-4">
            {["Small", "Medium", "Large"].map((s) => (
              <button
                key={s}
                onClick={() => handleSize(s)}
                className={`px-4 py-2 rounded ${
                  size === s ? "bg-green-500 text-white" : "bg-white text-green-500"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAdd}
          className="bg-white text-green-500 mt-6 px-6 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PickACoffee;
