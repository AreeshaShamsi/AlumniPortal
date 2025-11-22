import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'

import AlumniStories from '../pages/Stories'
import HowToGetStarted from '../pages/StartedSection'
import GallerySection from '../pages/Gallery'
import Footer from '../pages/Footer'

import MentorshipHero from './Mentorship'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Carousel/>
   
        <AlumniStories/>
        <HowToGetStarted/>
         <MentorshipHero/>
      
    
          <GallerySection/>
          <Footer/>
       
       
 
    </div>
  )
}

export default Home
