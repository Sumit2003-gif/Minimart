// ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, price, defaultImage, hoverImage }) => {
  return (
    <div className="w-full max-w-sm mx-auto text-center font-sans group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image container with aspect ratio and overlay */}
      <div className="relative w-full pt-[100%] overflow-hidden bg-gray-50">
        {/* Default image */}
        <img
          src={defaultImage}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
        />

        {/* Hover image */}
        <img
          src={hoverImage}
          alt={`${title} hover`}
          className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        />

        {/* Quick add button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/70 w-full h-full flex items-center justify-center">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <button className="bg-white text-black px-6 py-3 text-sm font-medium uppercase tracking-wider transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100">
                Quick View
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="text-gray-800 text-base font-medium mb-1 truncate">{title}</h4>
        <p className="text-lg font-bold text-gray-900 mb-3">{price}</p>
        
        {/* Add to cart button */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <button className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:from-gray-800 hover:to-gray-900 transform hover:scale-[1.02]">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;