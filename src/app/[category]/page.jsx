// Imports 
import React from 'react'

// Import components 
import { CategoryHeroSection } from '@/components/sections/category-hero/CategoryHeroSection'
import { CategoryArticlesList } from '@/components/category-articles-list/CategoryArticlesList'
import { NewsletterForm } from '@/components/newsletter-form/NewsletterForm'

const CategoryPage = () => {
  return (
    <main>
      <div className='sections__wrapper'>
        <CategoryHeroSection/>
        <CategoryArticlesList/>
        <NewsletterForm/>
      </div>
    </main>
  )
}

export default CategoryPage