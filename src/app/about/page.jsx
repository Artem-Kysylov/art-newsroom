// Imports 
import React from 'react'

// Import omponents 
import { AboutHeroSection } from '@/components/sections/about-hero/AboutHeroSection'
import { AboutResourceSection } from '@/components/sections/about-resource/AboutResourceSection'
import { AboutAuthorSection } from '@/components/sections/about-author/AboutAuthorSection'
import { NewsroomCategory } from '@/components/newsroom-category/NewsroomCategory'
import { NewsletterForm } from '@/components/newsletter-form/NewsletterForm'

const AboutUsPage = () => {
  return (
    <main>
      <div className='sections__wrapper'>
          <AboutHeroSection/>
          <AboutResourceSection/>
          <AboutAuthorSection/>
          <NewsroomCategory/>
          <NewsletterForm/>
      </div>
    </main>
  )
}

export default AboutUsPage