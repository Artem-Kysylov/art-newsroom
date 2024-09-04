// Imports 
import React from 'react'

// Import components 
import { NewsletterForm } from '@/components/newsletter-form/NewsletterForm'
import { HomeHeroSection } from '@/components/sections/home-hero/HomeHeroSection'
import { NewsroomCategory } from '@/components/newsroom-category/NewsroomCategory'

export default function Home() {
  return (
  <main>
    <div className='sections__wrapper'>
      <HomeHeroSection/>
      <NewsroomCategory/>
      <NewsletterForm/>
    </div>
  </main>
  );
}
