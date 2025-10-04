import React from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  const BlogCardsData = [
    {
      url: "https://images.pexels.com/photos/128611/pexels-photo-128611.jpeg",
      text: "Portable orangetooth Speaker with Light up Logo",
      date: "17",
      month: "Nov",
      year: "2020",
      name: "Vinova Theme",
      texter:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni...",
    },
    {
      url: "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg",
      text: "Stylish Home Decor Ideas in Budget",
      date: "10",
      month: "Oct",
      year: "2020",
      name: "Vinova Theme",
      texter:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    },
    {
      url: "https://images.pexels.com/photos/4194713/pexels-photo-4194713.jpeg",
      text: "Modern Interior Tips to Brighten Your Home",
      date: "28",
      month: "Sep",
      year: "2020",
      name: "Vinova Theme",
      texter:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
    },
    {
      url: "https://nuranium-furniture.myshopify.com/cdn/shop/articles/blog4_870x.jpg?v=1613704432",
      text: "How to Choose the Perfect Coffee Table",
      date: "15",
      month: "Aug",
      year: "2020",
      name: "Vinova Theme",
      texter:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
    },
    {
      url: "https://nuranium-furniture.myshopify.com/cdn/shop/articles/blog3_870x.jpg?v=1613704409",
      text: "Top 10 Must-Have Living Room Accessories",
      date: "03",
      month: "Jul",
      year: "2020",
      name: "Vinova Theme",
      texter:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    },
    {
      url: "https://nuranium-furniture.myshopify.com/cdn/shop/articles/blog2_870x.jpg?v=1613704385",
      text: "How to Style Your Home with Indoor Plants",
      date: "25",
      month: "Jun",
      year: "2020",
      name: "Vinova Theme",
      texter:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos...",
    },
  ];

const Card = ({ url, text, date, month, year, name, texter }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto h-full flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
      {/* Image with overlay effect */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={url} 
          alt={text} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Date badge */}
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-2 text-center">
          <div className="text-xl font-bold text-gray-900">{date}</div>
          <div className="text-xs text-gray-600 uppercase">{month}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
          {text}
        </h2>

        {/* Author */}
        <div className="text-sm text-gray-500 flex items-center gap-1 mb-4">
          <FaUser className="text-gray-400" />
          <span>BY {name}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
          {texter}
        </p>

        {/* Button */}
        <div className="mt-auto">
          <Link to="/blogs">
            <button className="w-full bg-gradient-to-r from-gray-900 to-black text-white cursor-pointer px-6 py-3 uppercase text-sm font-semibold transition-all duration-300 hover:from-gray-800 hover:to-gray-900 rounded-lg shadow-md">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

  return (
    <section className="px-4 py-16 max-w-screen-2xl mx-auto bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold uppercase text-gray-900 mb-4 relative inline-block">
          Latest News
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-2"></span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover the latest trends and tips in home decor and furniture design.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="relative group">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          slidesPerGroup={1}
         
          // modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="overflow-visible pb-16"
        >
          {BlogCardsData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

          </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <Link to="/blogs">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-medium rounded-lg shadow-lg hover:from-orange-700 hover:to-orange-800 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
            View All Articles
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LatestNews;