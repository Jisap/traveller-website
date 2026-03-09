import React from 'react'
import Hero from './Hero/Hero'
import PageTransition from '../Transition/PageTransition'
import About from './About/About'
import BookingSteps from './BookingSteps/BookingSteps'
import TopDestination from './TopDestination/TopDestination'


const Index = () => {
  return (
    <PageTransition>
      <Hero />
      <About />
      <BookingSteps />
      <TopDestination />
    </PageTransition>
  )
}

export default Index