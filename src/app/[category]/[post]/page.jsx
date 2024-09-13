// Imports 
import React from 'react'

// Import components
import { PostHeroSection } from '@/components/sections/post-hero/PostHeroSection' 
import { PostContent } from '@/components/sections/post-content/PostContent'
import { InterestingArticles } from '@/components/sections/interesting-articles/InterestingArticles'
import { NewsletterForm } from '@/components/newsletter-form/NewsletterForm'

const PostPage = () => {
  return (
    <main>
      <div className='sections__wrapper'>
        <PostHeroSection/>
        <PostContent/>
        <InterestingArticles/>
        <NewsletterForm/>
      </div>
    </main>
  )
}

export default PostPage