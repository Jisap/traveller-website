import React from 'react'
import Hero from './Hero/Hero'
import PageTransition from '../Transition/PageTransition'
import About from './About/About'
import BookingSteps from './BookingSteps/BookingSteps'
import TopDestination from './TopDestination/TopDestination'
import TourGuide from './TourGuide/TourGuide'



const Index = () => {
  return (
    <PageTransition>
      <Hero />
      <About />
      <BookingSteps />
      <TopDestination />
      <TourGuide />
    </PageTransition>
  )
}

export default Index