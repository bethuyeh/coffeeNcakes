import React from "react";
import leftImage from "../Images/flying-cookie.png"; // Replace with actual image path
import rightImage from "../Images/spilled-coffee-removebg-preview.png";

const Hero = () => {
  return (
    <div className="relative bg-white h-[75vh] flex items-center justify-center overflow-hidden"> {/* Adjusted height */}
      {/* Left Image */}
      <div className="flex-shrink-0 w-1/3 flex items-center justify-center">
        <img src={leftImage} alt="LeftImage" className="h-48 md:h-64" />
      </div>

      {/* Main Text Content */}
      <div className="flex-1 text-center relative z-10">
        {/* Upper Text */}
        <p className="text-gray-500 tracking-wide mb-2">
          life happens, coffee helps!
        </p>

        {/* Coffee Text with Splash */}
        <div className="relative inline-block">
          <h1 className="text-6xl md:text-8xl font-bold font-serif">Coffee</h1>
          {/* Coffee Splash */}
          <img
            src={rightImage}
            alt="Coffee Splash"
            className="absolute top-[-20px] h-48 w-64 md:w-80 md:h-64 transform translate-x-[60%] right-[-5%] -z-10"
          />
        </div>
      </div>

      {/* Right Side Placeholder to Maintain Layout */}
      <div className="flex-shrink-0 w-1/3"></div>
    </div>
  );
};

export default Hero;
