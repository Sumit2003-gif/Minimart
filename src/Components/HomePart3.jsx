import React from 'react';
import { Link } from 'react-router-dom';

const HomePart3 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10 bg-white border-[2px] shadow-xl border-gray-100 mx-16">
      {/* Left Side Content */}
      <div className="max-w-xl text-center lg:text-left">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold uppercase mb-4">
          Diamond Halo Stud Donec
        </h1>

        {/* Price */}
        <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
          <p className="text-2xl font-semibold text-black">$412.00</p>
          <p className="text-xl text-gray-400 line-through">$775.00</p>
        </div>

        {/* Countdown */}
        <div className="flex justify-center lg:justify-start gap-3 mb-6">
          {['Days', 'Hours', 'Mins', 'Secs'].map((label, index) => (
            <div
              key={index}
              className="bg-white px-3 py-2 shadow rounded text-center"
            >
              <p className="text-lg font-bold text-black">00</p>
              <span className="text-xs text-gray-500 border-t-2 border-orange-400 mt-1 block pt-1">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridicu lus mus. Donec
          quam...
        </p>

        {/* Button */}
        <Link
        to="/"
        onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>
        <button className="bg-black cursor-pointer text-white px-8 py-3 text-sm font-semibold uppercase hover:bg-gray-800 transition">
          Buy Now
        </button>
        </Link>
      </div>

      {/* Right Side Image */}
      <div className="mt-10 lg:mt-0 lg:ml-10">
        <img
          src="https://nuranium-furniture.myshopify.com/cdn/shop/files/img-21-6_360x.png?v=1613734946"
          alt="Product Chair"
          className="w-[270px] md:w-[350px] lg:w-[400px]"
        />
      </div>
    </div>
  );
};

export default HomePart3;
