import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaVimeoV,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactForm', JSON.stringify(formData));
    alert('Message saved to local storage!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link to='/' className='cursor-pointer hover:text-orange-500'><p>HOME</p></Link>
        <div className="w-2 h-2 bg-gray-400 rotate-45" />
        <p className="text-black font-semibold">CONTACT</p>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-10">Contact Us</h1>

      {/* Info + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">Call Customer Service:</h2>
            <p className="text-gray-700">84-0123-456-789</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Address:</h2>
            <p className="text-gray-700">PO Box 1622 Vissaosang Street West</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Email:</h2>
            <p className="text-gray-700">Support@domain.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <a href="#" className="text-gray-600 hover:text-black text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-black text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-black text-xl">
              <FaPinterestP />
            </a>
            <a href="#" className="text-gray-600 hover:text-black text-xl">
              <FaVimeoV />
            </a>
            <a href="#" className="text-gray-600 hover:text-black text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-100 px-4 py-3 placeholder-gray-400 text-sm outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-100 px-4 py-3 placeholder-gray-400 text-sm outline-none"
                required
              />
            </div>

            <input
              type="text"
              name="phone"
              placeholder="PHONE NUMBER"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-100 px-4 py-3 placeholder-gray-400 text-sm outline-none"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-100 px-4 py-3 placeholder-gray-400 text-sm outline-none resize-none"
              required
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black text-white cursor-pointer px-6 py-3 flex items-center gap-2 text-sm font-semibold hover:bg-gray-900 transition"
              >
                <FaEnvelope />
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Location Map */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <div className="w-full h-[400px] rounded overflow-hidden shadow-md">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.446297143996!2d106.7004233153347!3d10.77653089232205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f504a8db3%3A0xa8bcd6cb01f4e9e5!2sVinova%20Software!5e0!3m2!1sen!2s!4v1639999999999"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
