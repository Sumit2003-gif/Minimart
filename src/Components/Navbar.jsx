import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiPhoneCall, FiSearch, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const menu = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'BLOGS', path: '/blogs' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="bg-[#0b162c] text-white px-4 sm:px-6 py-3 sm:py-4 shadow-md">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0 flex items-center justify-between w-full lg:w-auto">
          <NavLink to="/">
            <img
              src="https://nuranium-furniture.myshopify.com/cdn/shop/files/logo-21_172x@2x.png?v=1613734920"
              alt="Logo"
              className="w-24 sm:w-32 md:w-40"
            />
          </NavLink>
          
          {/* Mobile menu button and cart icon container */}
          <div className="lg:hidden flex flex-col items-end">
            {/* Mobile menu button */}
            <button 
              className="text-white focus:outline-none mb-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
            
            {/* Cart icon for mobile - positioned below menu button */}
            <div className="relative">
              <div className="relative border-2 p-2 rounded-full transition-all duration-300">
                <FiShoppingBag className="text-xl sm:text-2xl" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-xs text-white rounded-full px-1.5 py-0.5 min-w-[18px] text-center font-bold">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Search Bar - Hidden on mobile */}
        <div className="hidden sm:flex w-full max-w-xl items-center">
          <input
            type="text"
            placeholder="WHAT ARE YOU LOOKING FOR ?"
            className="w-full px-4 py-2 rounded-l-md bg-white text-black focus:outline-none text-sm"
          />
          <button className="bg-[#1a2b4c] px-4 py-2 rounded-r-md">
            <FiSearch />
          </button>
        </div>

        {/* Right: Icons - Only visible on desktop */}
        <div className="hidden sm:flex items-center gap-4 sm:gap-6">
          
          {/* Support - Hidden on mobile */}
          <div className="hidden sm:flex items-center gap-2">
            <FiPhoneCall className="text-xl" />
            <div className="text-sm leading-tight">
              <p className="text-gray-400 text-xs">CUSTOMER SUPPORT</p>
              <a href="tel:084-2525-6868" className="font-bold text-white hover:underline text-sm">
                084-2525-6868
              </a>
            </div>
          </div>

          {/* Cart - Desktop only with hover effect */}
          <div className="relative group">
            <div className="relative border-2 p-2 rounded-full transition-all duration-300 group-hover:bg-[#1a2b4c]">
              <FiShoppingBag className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-xs text-white rounded-full px-1.5 py-0.5 min-w-[18px] text-center font-bold transition-all duration-300 group-hover:bg-orange-400 group-hover:scale-110">
                0
              </span>
            </div>
            
            {/* Cart dropdown on hover - Desktop only */}
            <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="px-4 py-2 border-b">
                <p className="text-sm font-medium">Your cart is empty</p>
              </div>
              <div className="px-4 py-3">
                <p className="text-xs text-gray-500">Add items to your cart to see them here</p>
              </div>
              <div className="px-4 py-2 bg-gray-50 rounded-b-md">
                <button className="w-full bg-orange-500 text-white py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors">
                  View Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar - Only visible on mobile */}
      <div className="sm:hidden mt-4 flex items-center">
        <input
          type="text"
          placeholder="WHAT ARE YOU LOOKING FOR ?"
          className="w-full px-4 py-2 rounded-l-md bg-white text-black focus:outline-none text-sm"
        />
        <button className="bg-[#1a2b4c] px-4 py-2 rounded-r-md">
          <FiSearch />
        </button>
      </div>

      {/* Shipping Returns Section - Hidden on mobile */}
      <div className="hidden sm:flex mt-4 items-center gap-2 text-gray-300 text-sm">
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <span>Free Shipping</span>
        </div>
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
          </svg>
          <span>Easy Returns</span>
        </div>
      </div>

      {/* Bottom Nav Menu (Buttons) - Desktop */}
      <nav className="hidden lg:flex mt-4 justify-end gap-4 flex-wrap">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
               ${
                 isActive
                   ? 'bg-orange-500 text-white'
                   : 'bg-[#1a2b4c] text-white hover:bg-orange-400 hover:text-white'
               }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu - Only visible when open */}
      {mobileMenuOpen && (
        <nav className="lg:hidden mt-4 flex flex-col gap-2">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-md text-sm font-medium transition-all duration-200
                 ${
                   isActive
                     ? 'bg-orange-500 text-white'
                     : 'bg-[#1a2b4c] text-white hover:bg-orange-400 hover:text-white'
                 }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;