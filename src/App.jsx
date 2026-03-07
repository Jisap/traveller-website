import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Components/Navbar/Navbar'
import Index from './Components/Index/Index'
import Contact from './Components/Contact/Contact'
import ScrollToTop from './Components/ScrollToTop'

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Index />} />
        {/* Agrega aquí más rutas conforme las crees, por ejemplo: */}
        <Route path='/contact' element={<Contact />} />
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
      </BrowserRouter>
    </>
  )
}

export default App