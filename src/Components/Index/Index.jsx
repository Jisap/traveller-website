import React from 'react'
import Hero from './Hero/Hero'
import PageTransition from '../Transition/PageTransition'
import About from './About/About'
import BookingSteps from './BookingSteps/BookingSteps'
import TopDestination from './TopDestination/TopDestination'
import TourGuide from './TourGuide/TourGuide'
import TourCategories from './TourCategories/TourCategories'
import Testimonials from './Testimonials/Testimonials'
import Banner from './Banner/Banner'
import Counter from './Counter/Counter'
import Tours from './Tours/Tours'
import Blogs from './Blogs/Blogs'



const Index = () => {
  return (
    <PageTransition>
      <Hero />
      <About />
      <BookingSteps />
      <TopDestination />
      <TourGuide />
      <TourCategories />
      <Testimonials />
      <Banner />
      <Counter />
      <Tours />
      <Blogs />
    </PageTransition>
  )
}

export default Index