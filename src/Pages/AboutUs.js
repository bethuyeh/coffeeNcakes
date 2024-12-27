import React from 'react';
import AboutImg from '../Images/cakes_n_berries-removebg-preview.png'

const AboutUs = () => {
  return (
    <section className="relative w-full bg-neutral-100 py-16 px-4">
        <h1 className="relative py-5 text-lg md:text-4xl font-bold text-center text-gray-800">
            WHY CHOOSE US?
        </h1>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left: Single Image Section */}
        <div className="md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
          {/* Coffee Cup Image */}
          <img
            src={AboutImg}
            alt="Coffee cup"
            className="w-48 md:w-60 lg:w-72 h-auto object-cover"
          />
        </div>

        {/* Right: Text Section */}
        <div className="md:w-1/2 relative md:pl-8 lg:pl-12">
           
          {/* Number and Title */}
          <div className="relative">
            <h1 className="text-7xl font-extrabold text-zinc-300 absolute  top-0 z-0">
              0102
            </h1>
            <h1 className="relative py-5 -right-16 text-lg md:text-4xl font-bold text-amber-800 z-10">
              WE'VE GOT YOU!
            </h1>
          </div>
          <h2 className="text-lg md:text-xl top-0 font-semibold text-gray-600 mt-2">
            one of the best coffeehouses out there
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-500 mt-4 leading-relaxed">
            Coffee is the best way to start the endless list of tasks you have. A sip of excellent,
            fragrant flavor can ignite any dull morning. Whether you're looking for a quiet space 
            to work or a warm spot to connect with others, we have just what you need. Join us 
            for an unforgettable experience where the aroma brings comfort, and the coffee 
            rejuvenates.
          </p>
          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-amber-700 text-white rounded shadow-md hover:bg-gray-400 transition duration-300">
            ABOUT US
          </button>
        </div>
      </div>
      {/* <div className="relative">
          <img
            src="/path/to/cart-icon.png"
            alt="Cart"
            className="w-6 h-6"
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
            {cartCount}
          </span>
        </div> */}
    </section>
    
  );
};

export default AboutUs;
