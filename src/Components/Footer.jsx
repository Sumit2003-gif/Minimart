import React from 'react';
import { Link } from 'react-router-dom';
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
  // Social media links
  const socialLinks = [
    { icon: <FaFacebookF />, label: 'Facebook', url: '#' },
    { icon: <FaTwitter />, label: 'Twitter', url: '#' },
    { icon: <FaPinterestP />, label: 'Pinterest', url: '#' },
    { icon: <FaVimeoV />, label: 'Vimeo', url: '#' },
    { icon: <FaInstagram />, label: 'Instagram', url: '#' },
  ];

  // Company links - updated to match available pages
  const companyLinks = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about' },
    { text: 'Contact', path: '/contact' },
    { text: 'Blog', path: '/blogs' },
  ];

  // Information links - updated to match available pages
  const informationLinks = [
    { text: 'Our Story', path: '/about' },
    { text: 'Contact Info', path: '/contact' },
    { text: 'Latest News', path: '/blogs' },
    { text: 'Privacy Policy', path: '/about' },
  ];

  // Contact information
  const contactInfo = [
    { icon: <FaPhoneAlt className="text-gray-400" />, text: '(+612) 2531 5600', bold: true },
    { icon: <FaEnvelope className="text-gray-400" />, text: 'sonata@domain.com' },
    { icon: <FaMapMarkerAlt className="text-gray-400" />, text: 'PO Box 1622 Vissaosang Street West' },
    { icon: <FaClock className="text-gray-400" />, text: 'Opening Hours : 8.00AM - 21.00AM' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <img
              src="https://nuranium-furniture.myshopify.com/cdn/shop/files/logo-21_172x@2x.png?v=1613734920"
              alt="Logo"
              className="mb-6 h-10"
            />
            <p className="mb-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
            <p className="mb-6 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="bg-gray-800 text-white p-2 rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="uppercase font-bold text-white mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="border-b border-transparent hover:border-orange-500 pb-1 transition-all duration-300 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="uppercase font-bold text-white mb-6 text-lg">Information</h3>
            <ul className="space-y-3 text-sm">
              {informationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="border-b border-transparent hover:border-orange-500 pb-1 transition-all duration-300 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="uppercase font-bold text-white mb-6 text-lg">Contact Us</h3>
            <p className="text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Cras convallis, eros non finibus imperdiet ipsum mi posuere diame
            </p>
            <ul className="space-y-4 text-sm">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1">{contact.icon}</div>
                  <span className={contact.bold ? "font-bold text-white text-lg" : ""}>
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
            
            {/* Contact Button */}
            <div className="mt-6">
              <Link to="/contact">
                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors duration-300">
                  Contact Form
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright and Payment */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            Copyright © {new Date().getFullYear()} Vinovathemes. All rights reserved.
          </div>

          <div>
            <img
              src="https://nuranium-furniture.myshopify.com/cdn/shop/files/payment_240x25.png?v=1613734947"
              alt="Payment Methods"
              className="h-6"
            />
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-110"
        aria-label="Back to Top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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