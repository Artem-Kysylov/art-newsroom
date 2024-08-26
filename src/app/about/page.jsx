// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import omponents 
import { AboutHeroSection } from '@/components/sections/about-hero/AboutHeroSection'
import { AboutResourceSection } from '@/components/sections/about-resource/AboutResourceSection'
import { AboutAuthorSection } from '@/components/sections/about-author/AboutAuthorSection'

const AboutUsPage = () => {
  return (
    <main>
      <div className='wrapper'>
          <AboutHeroSection/>
          <AboutResourceSection/>
          <AboutAuthorSection/>
      </div>
    </main>
  )
}

export default AboutUsPage