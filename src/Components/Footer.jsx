import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaVimeoV,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img
            src="https://nuranium-furniture.myshopify.com/cdn/shop/files/logo_968f7331-5a5e-4d0a-b96c-66a7aad2c3b8_190x.png?v=1613734947"
            alt="Logo"
            className="mb-6"
          />
          <p className="mb-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
          <p className="mb-6 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi
          </p>
          <div className="flex space-x-3">
            <a href="#" aria-label="Facebook" className="bg-black text-white p-2 rounded-sm hover:bg-orange-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="bg-black text-white p-2 rounded-sm hover:bg-orange-500 transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Pinterest" className="bg-black text-white p-2 rounded-sm hover:bg-orange-500 transition">
              <FaPinterestP />
            </a>
            <a href="#" aria-label="Vimeo" className="bg-black text-white p-2 rounded-sm hover:bg-orange-500 transition">
              <FaVimeoV />
            </a>
            <a href="#" aria-label="Instagram" className="bg-black text-white p-2 rounded-sm hover:bg-orange-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="uppercase font-bold mb-6">Customer Service</h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="border-b border-gray-300 pb-2 cursor-pointer hover:text-black transition">Contact us</li>
            <li className="border-b border-gray-300 pb-2 cursor-pointer hover:text-black transition">Help and advice</li>
            <li className="border-b border-gray-300 pb-2 cursor-pointer hover:text-black transition">Shipping & Returns</li>
            <li className="border-b border-gray-300 pb-2 cursor-pointer hover:text-black transition">Terms and conditions</li>
            <li className="border-b border-gray-300 pb-2 cursor-pointer hover:text-black transition">Refund Policy</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="uppercase font-bold mb-6">Information</h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="border-b border-gray-300 pb-2 cursor-pointer hover:text-black transition">Who We Are ?</li>
            <li className="border-b border-gray-300 pb-2 cursor-pointer hover:text-black transition">Corporate Responsibility</li>
            <li className="border-b border-gray-300 pb-2 cursor-pointer hover:text-black transition">California Laws</li>
            <li className="border-b border-gray-300 pb-2 cursor-pointer hover:text-black transition">Careers</li>
            <li className="border-b border-gray-300 pb-2 cursor-pointer hover:text-black transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="uppercase font-bold mb-6">Contact Us</h3>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Cras convallis, eros non finibus imperdiet ipsum mi posuere diame
          </p>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-gray-400" />
              <span className="font-extrabold text-lg">(+612) 2531 5600</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-gray-400" />
              <span>sonata@domain.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-gray-400" />
              <span>PO Box 1622 Vissaosang Street West</span>
            </li>
            <li className="flex items-center gap-3">
              <FaClock className="text-gray-400" />
              <span>Opening Hours : 8.00AM - 21.00AM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-6 text-xs text-gray-500 flex justify-around items-center">
        <div>
          Copyright © 2020 Vinovathemes. All rights reserved.
        </div>

        <div>
          <img
            src="https://nuranium-furniture.myshopify.com/cdn/shop/files/payment_240x25.png?v=1613734947"
            alt="Payment Methods"
            className="h-6"
          />
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition"
        aria-label="Back to Top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
