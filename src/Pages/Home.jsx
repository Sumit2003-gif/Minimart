import React from 'react'
import HomeHero from '../Components/HomeHero'
import BestSeller from '../Components/BestSeller'
import HomePart3 from '../Components/HomePart3'
import ProductCard from '../Components/ProductCard'
import { CardsDetail } from '../Components/CardsData'
import LatestNews from '../Components/LatestNews'
import NewArrivals from '../Components/NewArrival'

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

      <NewArrivals/>
      <section className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-8 px-4 py-8 max-w-6xl mx-auto">
  {/* First Image */}
  <div className="relative group overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
    <img 
      src='https://nuranium-furniture.myshopify.com/cdn/shop/files/img-21-7_1920x1920.jpg?v=1613734945'
      alt="Furniture showcase"
      className="w-full h-auto max-w-md md:max-w-lg object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
      <div className="text-white">
        <h3 className="text-xl font-bold mb-1">Premium Collection</h3>
        <p className="text-sm opacity-90">Elegant designs for modern living</p>
      </div>
    </div>
  </div>
  
  {/* Second Image */}
  <div className="relative group overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
    <img 
      src='https://nuranium-furniture.myshopify.com/cdn/shop/files/img-21-8_1920x1920.jpg?v=1613734945'
      alt="Furniture showcase"
      className="w-full h-auto max-w-md md:max-w-lg object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
      <div className="text-white">
        <h3 className="text-xl font-bold mb-1">Comfort Series</h3>
        <p className="text-sm opacity-90">Relaxation meets sophistication</p>
      </div>
    </div>
  </div>
</section>
          <section>
            <LatestNews/>
          </section>
    </div>
  )
}

export default Home
