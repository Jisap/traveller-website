import React from 'react'
import Hero from './Hero/Hero'
import PageTransition from '../Transition/PageTransition'
import About from './About/About'

const Index = () => {
  return (
    <PageTransition>
      <Hero />
      <About />
    </PageTransition>
  )
}

export default Index