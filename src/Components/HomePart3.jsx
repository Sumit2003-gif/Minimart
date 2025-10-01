import React from 'react';
import { Link } from 'react-router-dom';

const HomePart3 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-8 md:py-12 bg-white border-[2px] shadow-xl border-gray-100 mx-4 md:mx-8 lg:mx-16 rounded-lg">
      {/* Left Side Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-4 text-gray-900">
          Diamond Halo Stud Donec
        </h1>

        {/* Price */}
        <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-5">
          <p className="text-xl md:text-2xl font-semibold text-black">$412.00</p>
          <p className="text-lg md:text-xl text-gray-400 line-through">$775.00</p>
          <span className="bg-red-100 text-red-700 text-xs md:text-sm font-medium px-2 py-1 rounded-full">Save 47%</span>
        </div>

        {/* Countdown */}
        <div className="flex justify-center lg:justify-start gap-2 md:gap-3 mb-6">
          {['Days', 'Hours', 'Mins', 'Secs'].map((label, index) => (
            <div
              key={index}
              className="bg-gray-50 px-2 md:px-3 py-2 shadow rounded text-center border border-gray-100"
            >
              <p className="text-lg md:text-xl font-bold text-black">00</p>
              <span className="text-xs text-gray-500 border-t-2 border-orange-400 mt-1 block pt-1">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base max-w-lg mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridicu lus mus. Donec
          quam...
        </p>

        {/* Button */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <button className="bg-black cursor-pointer text-white px-6 md:px-8 py-3 text-sm font-semibold uppercase hover:bg-gray-800 transition duration-300 transform hover:scale-105 rounded-md shadow-md">
            Buy Now
          </button>
        </Link>
      </div>

      {/* Right Side Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 z-0"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-100 rounded-full opacity-50 z-0"></div>
          
          {/* Product image */}
          <img
            src="https://nuranium-furniture.myshopify.com/cdn/shop/files/img-21-6_360x.png?v=1613734946"
            alt="Product Chair"
            className="w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] relative z-10 transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePart3;   