import React from "react";
import { useLocation } from "react-router-dom";
import { PaystackButton } from "react-paystack";

const Payment = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || []; // Fallback to empty array if state is undefined

  if (cartItems.length === 0) {
    return <p>Your cart is empty. Go back and add some items.</p>;
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Paystack public key (replace with your actual public key)
  const publicKey = "pk_test_f933ab751601c5b16bc8fd912324ae15fc857c91";

  // Paystack payment configuration
  const paystackConfig = {
    email: "uyehelizabeth@gmail.com", // Replace with a dynamic email from user input if available
    amount: totalAmount * 100, // Convert to kobo (smallest unit for Paystack)
    publicKey,
  };

  // Handle payment success
  const onSuccess = (reference) => {
    console.log("Payment successful! Reference:", reference);
    alert("Payment successful! Thank you for your order.");
  };

  // Handle payment failure
  const onClose = () => {
    console.log("Payment closed by user.");
    alert("Payment process was canceled.");
  };

  return (
    <div className="payment-page bg-amber-100 p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-amber-800 mb-6">Payment</h1>
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <div>
              <p className="font-medium">{item.name} ({item.size})</p>
              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
            </div>
            <p className="text-amber-800 font-semibold">
              ₦{(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800">Total</h3>
          <h3 className="text-xl font-bold text-amber-800">₦{totalAmount.toFixed(2)}</h3>
        </div>

        {/* Paystack Payment Button */}
        <div className="mt-6">
          <PaystackButton
            className="w-auto bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition"
            {...paystackConfig}
            text="Confirm Payment"
            onSuccess={onSuccess}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
