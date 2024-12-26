import React from "react";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cartItems }) => {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-4">
                <div className="flex justify-between items-center">
                  <span>
                    {item.name} ({item.size}) x {item.quantity}
                  </span>
                  <span>₦{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h2 className="text-lg font-bold">Total: ₦{totalPrice.toFixed(2)}</h2>
            <button
              onClick={handleCheckout}
              className="mt-4 px-4 py-2 bg-coffee-400 text-white rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
