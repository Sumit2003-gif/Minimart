import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiPhoneCall, FiSearch, FiShoppingBag } from 'react-icons/fi';

const Navbar = () => {
  const menu = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'BLOGS', path: '/blogs' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="bg-[#0b162c] text-white px-4 md:px-8 py-4 shadow-md">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center  py-2 justify-between gap-4">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img
              src="https://nuranium-furniture.myshopify.com/cdn/shop/files/logo-21_172x@2x.png?v=1613734920"
              alt="Logo"
              className="w-32 md:w-40"
            />
          </NavLink>
        </div>

        {/* Center: Search Bar */}
        <div className="w-full max-w-xl flex items-center">
          <input
            type="text"
            placeholder="WHAT ARE YOU LOOKING FOR ?"
            className="w-full px-4 py-2 rounded-l-md bg-white text-black focus:outline-none text-sm"
          />
          <button className="bg-[#1a2b4c] px-4 py-2 rounded-r-md">
            <FiSearch />
          </button>
        </div>

        {/* Right: Support + Cart */}
        <div className="flex items-center gap-6">
          
          {/* Support */}
          <div className="flex items-center gap-2">
            <FiPhoneCall className="text-xl" />
            <div className="text-sm leading-tight">
              <p className="text-gray-400 text-xs">CUSTOMER SUPPORT</p>
              <a href="tel:084-2525-6868" className="font-bold text-white hover:underline text-sm">
                084-2525-6868
              </a>
            </div>
          </div>

          {/* Cart */}
          <div className="relative">
            <FiShoppingBag className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-xs text-white rounded-full px-1.5">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Nav Menu (Buttons) */}
      <nav className="mt-4 flex justify-end gap-4 flex-wrap">
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
    </header>
  );
};

export default Navbar;
