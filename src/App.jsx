import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Components/Navbar/Navbar'
import Index from './Components/Index/Index'
import Contact from './Components/Contact/Contact'
import ScrollToTop from './Components/ScrollToTop'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import ServicesDetails from './Pages/Services/ServicesDetails'
import TestimonialsPage from './Pages/Testimonials/TestimonialPage'
import TourGuide from './Pages/TourGuide/TourGuide'
import TourGuideDetails from './Pages/TourGuide/TourGuideDetails'
import Faqs from './Pages/Faqs/Faqs'



const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id' element={<ServicesDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/testimonials' element={<TestimonialsPage />} />
        <Route path='/tourguide' element={<TourGuide />} />
        <Route path='/tourguide/:id' element={<TourGuideDetails />} />
        <Route path='/faqs' element={<Faqs />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App