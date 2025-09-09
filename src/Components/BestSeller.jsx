import React, { useRef, useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import  {CardsDetail}  from './CardsData';

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
    
    <div className="px-4 py-8 max-w-screen-xl mx-auto">
      <h1 className="text-xl font-bold uppercase text-center mb-2">Best Seller</h1>
      <p className="text-gray-600 uppercase text-center mb-6">
        Minimart is a Modern Fully Responsive Retina Ready Shopify theme.
      </p>

      <div className="relative">
        {swiperReady && (
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            slidesPerGroup={1}
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // Assign refs once they are available
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="overflow-visible"
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

        {/* Custom Buttons */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 hover:bg-black hover:text-white transition-all duration-300 p-2 rounded-full shadow"
        >
          &#8592;
        </button>

        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 hover:bg-black hover:text-white transition-all duration-300 p-2 rounded-full shadow"
        >
          &#8594;
        </button>
      </div>
    </div>  )
}

export default BestSeller
