import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, price, defaultImage, hoverImage }) => {
  return (
    <div className="w-72 text-center font-sans group hover:border-[4px]  hover:border-gray-100 transition-transform duration-300 hover:p-4 hover:shadow-xl hover:pt-4 group:hover:-scale-105">
      {/* Image container */}
      <div className="relative w-full pt-[100%] overflow-hidden rounded-md">
        {/* Default image */}
        <img
  src={defaultImage}
  alt={title}
  className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 opacity-100 group-hover:opacity-0"
/>

{/* Hover image */}
<img
  src={hoverImage}
  alt={`${title} hover`}
  className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 opacity-0 group-hover:opacity-100"
/>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h4 className="text-gray-800 text-base font-medium">{title}</h4>
        <p className="text-lg font-semibold text-black mt-1">{price}</p>

        {/* Button only visible on hover */}
        <Link to="/"
        onClick={() =>{window.scrollTo({ top: 0, behavior: 'smooth' });} }>
        <button className="mt-3 bg-black cursor-pointer text-white px-4 py-2 text-sm uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ADD TO CART
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
