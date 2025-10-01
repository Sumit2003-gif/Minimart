// BestSeller.jsx
import React, { useRef, useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CardsDetail } from './CardsData';

const BestSeller = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSwiperReady(true);
    }
  }, []);

  return (
    <section className="px-4 py-16 max-w-screen-2xl mx-auto bg-gradient-to-b from-white to-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold uppercase text-gray-900 mb-4 relative inline-block">
          Best Sellers
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-2"></span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover our most popular products loved by thousands of customers worldwide.
        </p>
      </div>

      <div className="relative group">
        {swiperReady && (
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            slidesPerGroup={1}
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="overflow-visible pb-16"
          >
            {CardsDetail.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <ProductCard
                  title={item.title}
                  price={item.price}
                  defaultImage={item.defaultImage}
                  hoverImage={item.hoverImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Previous products"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Next products"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      
    </section>
  );
};

export default BestSeller;