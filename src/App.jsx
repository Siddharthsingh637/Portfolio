import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
// import Title from './Components/Title/Title'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
// import { Swiper, SwiperSlide } from "swiper";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
