import React from 'react';

const HomeHero = () => {
  return (
    <div className="flex justify-center items-center gap-5 py-5">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        
        {/* FIRST IMAGE */}
        <div className="relative group overflow-hidden rounded-lg">
          {/* White diagonal shine */}
          <div
            className="absolute w-[12%] h-[800%] bg-white/30 rotate-45 z-10
                       -top-[200%] -left-[200%]
                       transition-all duration-500 ease-in-out
                       group-hover:top-[200%] group-hover:left-[200%]"
          ></div>

          {/* Main Image */}
          <img
            src="https://nuranium-furniture.myshopify.com/cdn/shop/files/img-21-1_1920x.jpg?v=1613734945"
            alt="Hero 1"
            className="rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* SECOND IMAGE */}
        <div className="relative group overflow-hidden rounded-lg">
          <div
            className="absolute w-[12%] h-[600%] bg-white/50 rotate-45 z-10
                       -top-[200%] -left-[200%]
                       transition-all duration-500 ease-in-out
                       group-hover:top-[200%] group-hover:left-[200%]"
          ></div>

          <img
            src="https://nuranium-furniture.myshopify.com/cdn/shop/files/img-21-2_1920x.jpg?v=1613734945"
            alt="Hero 2"
            className="rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {[
          "https://nuranium-furniture.myshopify.com/cdn/shop/files/img-21-3_1920x.jpg?v=1613734945",
          "https://nuranium-furniture.myshopify.com/cdn/shop/files/img-21-4_1920x.jpg?v=1613734945",
          "https://nuranium-furniture.myshopify.com/cdn/shop/files/img-21-5_1920x.jpg?v=1613734945",
        ].map((src, i) => (
          <div key={i} className="relative group overflow-hidden rounded-lg">
            {/* White diagonal shine */}
            <div
              className="absolute w-[12%] h-[600%] bg-white/50 rotate-45 z-10
                         -top-[200%] -left-[200%]
                         transition-all duration-700 ease-in-out
                         group-hover:top-[200%] group-hover:left-[200%]"
            ></div>

            <img
              src={src}
              alt={`Hero ${i + 3}`}
              className="rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeHero;
