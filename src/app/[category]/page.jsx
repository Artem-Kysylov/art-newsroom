// Imports 
import React from 'react'

// Import components 
import { CategoryHeroSection } from '@/components/sections/category-hero/CategoryHeroSection'
import { ArticlesList } from '@/components/sections/articles-list/ArticlesList'
import { NewsletterForm } from '@/components/newsletter-form/NewsletterForm'

const CategoryPage = () => {
  return (
    <main>
      <div className='sections__wrapper'>
        <CategoryHeroSection/>
        <ArticlesList/>
        <NewsletterForm/>
      </div>
    </main>
  )
}

export default CategoryPage