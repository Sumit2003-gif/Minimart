import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Product Card Component
const ProductCard = ({ title, price, defaultImage, hoverImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={isHovered ? hoverImage : defaultImage} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Quick View Button */}
        <div
        onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
        className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="bg-white text-gray-900 px-4 cursor-pointer py-2 rounded-md text-sm font-medium transform transition-transform duration-300 hover:scale-105">
            Quick View
          </button>
        </div>
        
        {/* Sale Badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          NEW
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-gray-900 mb-1 truncate">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">${price.toFixed(2)}</p>
          <button className="text-gray-500 hover:text-orange-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// New Arrivals Section
const NewArrivals = () => {
  // Sample data - replace with your actual data
  const randomFour = [
    {
      id: 1,
      title: "Modern Minimalist Chair",
      price: 299.99,
      defaultImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      hoverImage: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Luxury Sofa Set",
      price: 1299.99,
      defaultImage: "https://images.pexels.com/photos/34086242/pexels-photo-34086242.jpeg",
      hoverImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Elegant Dining Table",
      price: 899.99,
      defaultImage: "https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      hoverImage: "https://images.pexels.com/photos/34108091/pexels-photo-34108091.jpeg"
    },
    {
      id: 4,
      title: "Contemporary Bookshelf",
      price: 449.99,
      defaultImage: "https://images.pexels.com/photos/34149049/pexels-photo-34149049.jpeg",
      hoverImage: "https://images.pexels.com/photos/34144827/pexels-photo-34144827.jpeg"
    }
  ];

  return (
    <section className="px-4 py-10 md:py-16 max-w-screen-xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-14">
        <h1 className="uppercase text-2xl md:text-3xl font-bold mb-3 text-gray-900 relative inline-block">
          New Arrivals
          <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-orange-500 mx-auto"></span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our latest collection of premium furniture pieces designed to transform your living space.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {randomFour.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            defaultImage={item.defaultImage}
            hoverImage={item.hoverImage}
          />
        ))}
      </div>

      
    </section>
  );
};

export default NewArrivals;