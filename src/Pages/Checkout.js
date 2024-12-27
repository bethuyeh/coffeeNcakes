import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cartItems, handleAddItem, handleRemoveItem }) => {
  const navigate = useNavigate();

  // Calculate total price
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/payment", { state: { cartItems } });
  };

  return (
    <div className="min-h-screen bg-[#F8F5F1] p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl text-[#4B371C] font-bold text-center mb-6 sm:mb-8">
        Checkout
      </h1>

      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 max-w-4xl mx-auto">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">
            Your cart is empty. Add some items!
          </p>
        ) : (
          <div>
            {/* Cart Items */}
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={`${item.id}-${item.size}`}
                  className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 py-4 border-b border-gray-300"
                >
                  {/* Product Image */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div>
                      <h2 className="text-base sm:text-lg font-semibold text-[#4B371C]">
                        {item.name} ({item.size})
                      </h2>
                      <p className="text-sm text-gray-500">
                        ₦{item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="bg-[#D2691E] text-white px-3 py-1 rounded shadow hover:bg-[#A0522D] transition text-sm sm:text-base"
                    >
                      -
                    </button>
                    <p className="text-base sm:text-lg text-gray-800">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() => handleAddItem(item)}
                      className="bg-[#4B371C] text-white px-3 py-1 rounded shadow hover:bg-[#6F4E37] transition text-sm sm:text-base"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    ₦{(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            {/* Total and Pay Now */}
            <div className="mt-6 text-center sm:text-right">
              <h3 className="text-xl sm:text-2xl font-bold text-[#4B371C]">
                Total: ₦{total.toFixed(2)}
              </h3>
              <button
                onClick={handlePayment}
                className="bg-[#4B371C] text-white px-4 py-2 sm:px-6 sm:py-3 rounded shadow mt-4 hover:bg-[#6F4E37] transition text-sm sm:text-base"
              >
                Pay Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
