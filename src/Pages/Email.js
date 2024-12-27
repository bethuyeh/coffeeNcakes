// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // EmailJS parameters
//     const serviceId = "service_fq3cxgj";
//     const templateId = "template_e5ecia3";
//     const userId = "RuQddwM_2dmmfEPU0";

//     emailjs
//       .send(serviceId, templateId, formData, userId)
//       .then(
//         (response) => {
//           alert("Thank you for reaching out! We'll get back to you soon.");
//           console.log("SUCCESS!", response.status, response.text);
//           setFormData({ name: "", email: "", message: "" });
//           setIsSubmitting(false);
//         },
//         (err) => {
//           alert("Oops! Something went wrong. Please try again later.");
//           console.error("FAILED...", err);
//           setIsSubmitting(false);
//         }
//       );
//   };

//   return (
//     <div className="min-h-screen bg-[#f5ebe0] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-[#6f4e37]">Get in Touch ☕</h2>
//           <p className="mt-2 text-sm text-[#8b5e3c]">
//             We'd love to hear from you! Drop us a message and we'll respond as soon as possible.
//           </p>
//         </div>
//         <form
//           className="bg-[#e0c8ac] shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
//           onSubmit={handleSubmit}
//         >
//           <div className="mb-4">
//             <label
//               className="block text-sm font-medium text-[#6f4e37] mb-2"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border border-[#8b5e3c] rounded focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] bg-[#f8f3ec]"
//               placeholder="Your Full Name"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-sm font-medium text-[#6f4e37] mb-2"
//               htmlFor="email"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border border-[#8b5e3c] rounded focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] bg-[#f8f3ec]"
//               placeholder="Your Email Address"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-sm font-medium text-[#6f4e37] mb-2"
//               htmlFor="message"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border border-[#8b5e3c] rounded focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] bg-[#f8f3ec] h-32"
//               placeholder="Your Message"
//             ></textarea>
//           </div>
//           <div className="flex items-center justify-center">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`bg-[#6f4e37] text-white px-6 py-2 rounded-md hover:bg-[#8b5e3c] focus:outline-none focus:ring-2 focus:ring-[#6f4e37] ${
//                 isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
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
  const handleSize = (selectedSize: string) => {
    setSize(selectedSize);
  };

  const currentProduct = products[currentIndex];

  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-full relative"
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
                  ? "bg-white text-black"
                  : "bg-gray-200 text-black"
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
