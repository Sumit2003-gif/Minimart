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

        
      </div>

      
    </section>
  );
};

export default BestSeller;