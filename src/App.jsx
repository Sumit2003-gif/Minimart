import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import BlogCards from './Components/BlogCards'
import SingleBlog from './Components/SingleBlog'
import ScrollToTop from './Components/ScrollTop'
function App() {
  const [count, setCount] = useState(0)
    const Icons = [
    {
      url: "https://nuranium-furniture.myshopify.com/cdn/shop/files/p-h-1_120x.png?v=1613734920",
      name: "FREE SHIPPING",
      text: "All orders of $49 or more of eligible items across any product.",
    },
    {
      url: "https://nuranium-furniture.myshopify.com/cdn/shop/files/p-h-2_120x.png?v=1613734920",
      name: "CREDIT CARDS",
      text: "We accept Visa, American Express, Mastercard, and Discover",
    },
    {
      url: "https://nuranium-furniture.myshopify.com/cdn/shop/files/p-h-3_120x.png?v=1613734920",
      name: "RETURN POLICY",
      text: "You can return your online order within 30 days of receiving your order.",
    },
    // Add more items here
  ];


  return (
    <>
      <div>
        <ScrollToTop/>
        <Navbar/>
         <div className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Icons.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <img src={item.url} alt={item.name} className="w-10 h-10 object-contain" />
            <div>
              <p className="font-semibold text-sm text-gray-800">{item.name}:</p>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    
    </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blogs' element={<Blog/>}/>
          <Route path='/blogs/:id' element={<SingleBlog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
