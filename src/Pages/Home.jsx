import React from 'react'
import HomeHero from '../Components/HomeHero'
import BestSeller from '../Components/BestSeller'
import HomePart3 from '../Components/HomePart3'
import ProductCard from '../Components/ProductCard'
import { CardsDetail } from '../Components/CardsData'
import LatestNews from '../Components/LatestNews'

const Home = () => {
  // Shuffle and get 4 random cards
  const randomFour = [...CardsDetail]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)

  return (
    <div>
      <HomeHero />

      <section>
        <BestSeller />
      </section>

      <section>
        <HomePart3 />
      </section>

      <section className="px-4 py-8 max-w-screen-xl mx-auto">
        <h1 className='uppercase text-xl font-bold mb-2 text-center'>New Arrivals</h1>
        <p className='uppercase text-gray-600 text-center mb-6'>
          Minimart is a Modern Fully Responsive Retina Ready Shopify theme.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {randomFour.map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              price={item.price}
              defaultImage={item.defaultImage}
              hoverImage={item.hoverImage}
            />
          ))}
        </div>
      </section>
      <section className='flex justify-center items-center gap-5'>
        <img src='https://nuranium-furniture.myshopify.com/cdn/shop/files/img-21-7_1920x1920.jpg?v=1613734945'/>
        <img src='https://nuranium-furniture.myshopify.com/cdn/shop/files/img-21-8_1920x1920.jpg?v=1613734945'/>
      </section>
          <section>
            <LatestNews/>
          </section>
    </div>
  )
}

export default Home
