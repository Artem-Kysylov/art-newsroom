// Imports 
import React from 'react'
import { client } from '@/sanity/lib/client'

// Import components 
import { CategoryHeroSection } from '@/components/sections/category-hero/CategoryHeroSection'
import { CategoryArticlesList } from '@/components/category-articles-list/CategoryArticlesList'
import { NewsletterForm } from '@/components/newsletter-form/NewsletterForm'

export const generateStaticParams = async () => {
  const categories = await client.fetch(`
    *[_type == 'category] {
      title,
      slug {
        current
      }
    }
  `)
  return categories.map((category) => ({
    category: category.slug.current
  }))
}

export const CategoryPage = async ({ params }) => {
  const { category } = params

  const posts = await client.fetch(`
    *[_type == "post" && category->slug.current == $category] {
     title,
     slug {
       current
     },
     mainImage,
     publishedAt,
     author
   }
 `, { category })

  return (
    <main>
      <div className='sections__wrapper'>
        <CategoryHeroSection category={category}/>
        <CategoryArticlesList posts={posts}/>
        <NewsletterForm/>
      </div>
    </main>
  )
}

export default CategoryPage