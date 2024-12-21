import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#f5ebe0] py-12">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold text-[#6f4e37]">Coffee & Cakes</h1>
          <p className="mt-2 text-sm text-[#8b5e3c]">
            Your daily dose of coffee and treats
          </p>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#6f4e37]"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#6f4e37]"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#6f4e37]"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#6f4e37] text-center mt-8 py-4">
        <p className="text-sm text-[#f5ebe0]">© 2024 Coffee & Cakes. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
