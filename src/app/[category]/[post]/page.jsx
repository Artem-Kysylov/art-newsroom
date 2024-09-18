// Imports 
import React from 'react'

// Import components
import { PostHeroSection } from '@/components/sections/post-hero/PostHeroSection' 
import { ArticleContent } from '@/components/sections/article-content/ArticleContent'
import { InterestingArticles } from '@/components/sections/interesting-articles/InterestingArticles'
import { NewsletterForm } from '@/components/newsletter-form/NewsletterForm'

const PostPage = () => {
  return (
    <main>
      <div className='sections__wrapper'>
        <PostHeroSection/>
        <ArticleContent/>
        <InterestingArticles/>
        <NewsletterForm/>
      </div>
    </main>
  )
}

export default PostPage