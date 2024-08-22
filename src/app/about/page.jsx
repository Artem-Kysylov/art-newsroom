// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import omponents 
import { AboutHeroSection } from '@/components/sections/about-hero/AboutHeroSection'

const AboutUsPage = () => {
  return (
    <main>
      <div className='wrapper'>
          <AboutHeroSection/>
      </div>
    </main>
  )
}

export default AboutUsPage