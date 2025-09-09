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
      url: "https://nuranium-furniture.myshopify.com/cdn/shop/articles/blog7_870x.jpg?v=1613704509",
      text: "Portable Bluetooth Speaker with Light up Logo",
      date: "17",
      month: "Nov",
      year: "2020",
      name: "Vinova Theme",
      texter:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni...",
    },
    {
      url: "https://nuranium-furniture.myshopify.com/cdn/shop/articles/blog6_870x.jpg?v=1613704486",
      text: "Stylish Home Decor Ideas in Budget",
      date: "10",
      month: "Oct",
      year: "2020",
      name: "Vinova Theme",
      texter:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    },
    {
      url: "https://nuranium-furniture.myshopify.com/cdn/shop/articles/blog5_870x.jpg?v=1613704462",
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto h-[500px] flex flex-col">
      {/* Image */}
      <img src={url} alt={text} className="w-full h-56 object-cover" />

      {/* Content */}
      <div className="p-6 text-center flex flex-col flex-1">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 mb-2">{text}</h2>

        {/* Date & Author */}
        <div className="text-sm text-gray-500 flex justify-center items-center gap-4 mb-4">
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-gray-400" />
            {`${date} ${month} ${year}`}
          </span>
          <span className="flex items-center gap-1">
            <FaUser className="text-gray-400" />
            BY {name}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
          {texter}
        </p>

        {/* Button */}
        <div className="mt-auto">
          <Link to="/blogs">
            <button className="bg-black text-white cursor-pointer px-6 py-2 uppercase text-sm font-semibold hover:bg-gray-800 transition">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


  return (
    <div className="px-4 py-12 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold uppercase text-center mb-2">Latest News</h1>
      <p className="text-gray-600 uppercase text-center mb-6">
        Minimart is a Modern Fully Responsive Retina Ready Shopify theme.
      </p>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={1}
        navigation
        modules={[Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="overflow-visible"
      >
        {BlogCardsData.map((item, index) => (
          <SwiperSlide key={index}>
            <Card {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestNews;
