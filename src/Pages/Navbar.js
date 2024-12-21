import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Ring-coffee-liquid-removebg-preview.png";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold text-amber-950 flex items-center">
            <img src={Logo} alt="Coffee & Cakes" className="h-10 w-auto mr-2" />
            Coffee&Cakes
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center text-gray-800"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link to="/menu" className="text-gray-600 hover:text-gray-800">
            Menu
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="relative cursor-pointer">
          <Link to="/cart">
            <FaShoppingCart size={24} className="text-gray-800" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">
          <Link to="/" className="block py-2 text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/about" className="block py-2 text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link to="/menu" className="block py-2 text-gray-600 hover:text-gray-800">
            Menu
          </Link>
          <Link to="/contact" className="block py-2 text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
