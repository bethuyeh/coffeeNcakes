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
    <div className="min-h-screen bg-[#F8F5F1] p-6">
      <h1 className="text-4xl text-[#4B371C] font-bold text-center mb-8">
        Checkout
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">
            Your cart is empty. Add some items!
          </p>
        ) : (
          <div>
            {/* Cart Items */}
            <ul>
              {cartItems.map((item) => (
                <li
                  key={`${item.id}-${item.size}`}
                  className="flex items-center justify-between py-4 border-b border-gray-300"
                >
                  {/* Product Image */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-[#4B371C]">
                        {item.name} ({item.size})
                      </h2>
                      <p className="text-sm text-gray-500">
                       ₦{item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="bg-[#D2691E] text-white px-4 py-1 rounded shadow hover:bg-[#A0522D] transition"
                    >
                      -
                    </button>
                    <p className="text-lg text-gray-800">{item.quantity}</p>
                    <button
                      onClick={() => handleAddItem(item)}
                      className="bg-[#4B371C] text-white px-4 py-1 rounded shadow hover:bg-[#6F4E37] transition"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <p className="text-lg font-semibold text-gray-800">
                  ₦{(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            {/* Total and Pay Now */}
            <div className="mt-6 text-right">
              <h3 className="text-2xl font-bold text-[#4B371C]">
                Total: ₦{total.toFixed(2)}
              </h3>
              <button
                onClick={handlePayment}
                className="bg-coffee-400 text-white px-6 py-2 rounded shadow mt-4 hover:bg-[#6F4E37] transition"
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
