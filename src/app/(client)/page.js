// Imports 
import React from 'react'
import { client } from '@/sanity/lib/client'

// Import components 
import { NewsletterForm } from '@/components/newsletter-form/NewsletterForm'
import { HomeHeroSection } from '@/components/sections/home-hero/HomeHeroSection'
import { NewsroomCategory } from '@/components/newsroom-category/NewsroomCategory'
import { PopularArticles } from '@/components/sections/popular-articles/PopularArticles'


// Fetch all our posts 
const getPosts = async () => {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    mainImage {
      asset -> {
        url,
        metadata {
          dimensions {
            width,
            height,
          }
        }
      }
    },
    publishedAt,
    author,
    category -> {
      title,
      slug {
        current,
      }
    }
  }
`
  const data = await client.fetch(query)
  return data
}

export default async function Home() {
  const posts = await getPosts()

  return (
  <main>
    <div className='sections__wrapper'>
      <HomeHeroSection/>
      <PopularArticles posts={posts}/>
      <NewsroomCategory/>
      <NewsletterForm/>
    </div>
  </main>
  );
}
