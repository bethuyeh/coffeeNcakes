import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import AboutUs from "./Pages/AboutUs";
import CoffeeSlider from "./Pages/CoffeeSlider";
import Footer from "./Pages/Footer";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";
import About from "./Pages/About";
import PickACoffee from "./Pages/PickACoffee";
import Contact from "./Pages/Contact";


function App() {
  const [cartItems, setCartItems] = useState([]); // Track cart items
  const [cartCount, setCartCount] = useState(0); // Track cart count

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existingItem) {
        // Increment quantity if item already exists
        return prevItems.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      // Add  product to cart
      return [...prevItems, product];
    });

    // Update cart count
    setCartCount((prevCount) => prevCount + product.quantity);
  };

  const handleAddItem = (product) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === product.id && item.size === product.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
    setCartCount((prevCount) => prevCount + 1);
  };
  
  const handleRemoveItem = (product) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
  
      return updatedItems;
    });
    setCartCount((prevCount) => prevCount - 1);
  };
  

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutUs />
                <CoffeeSlider  handleAddToCart={handleAddToCart} />
                <Footer />
              </>
            }
          />
          <Route path="about" element={<About  />} />
          <Route path="contact" element={<Contact  />} />
          <Route path="menu" element={ <PickACoffee handleAddToCart={handleAddToCart} />
  } />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
          <Route
            path="/checkout"
            element={<Checkout
      cartItems={cartItems}
      handleAddItem={handleAddItem}
      handleRemoveItem={handleRemoveItem}
    />}
          />
          
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
