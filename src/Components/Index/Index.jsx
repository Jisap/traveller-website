import React from 'react'
import Hero from './Hero/Hero'
import PageTransition from '../Transition/PageTransition'
import About from './About/About'
import BookingSteps from './BookingSteps/BookingSteps'

const Index = () => {
  return (
    <PageTransition>
      <Hero />
      <About />
      <BookingSteps />
    </PageTransition>
  )
}

export default Index