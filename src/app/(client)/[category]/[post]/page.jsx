// Imports 
import React from 'react'
import { client } from '@/sanity/lib/client'
import { Metadata } from "next";

// Repo link
// https://github.com/stefandjikic/next-cms-blog

// Import components
import { PostHeroSection } from '@/components/sections/post-hero/PostHeroSection' 
import { ArticleContent } from '@/components/sections/article-content/ArticleContent'
import { InterestingArticles } from '@/components/sections/interesting-articles/InterestingArticles'
import { NewsletterForm } from '@/components/newsletter-form/NewsletterForm'

// Get posts 
const getPost = async () => {
  const query = `
    *[_type == "post" && slug.current == "${slug}"][0] {
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
      }
      publishedAt,
      author,
      category -> {
        title,
        slug {
          current,
        }
      },
       _id,
       "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
       body,
    }
  `

  const post = await client.fetch(query)
  return post
}

// Generate Metadata 
export const generateMetadata = async ({ params }) => {
  const post = await getPost(params?.slug)
  if (!post) {
    return
  }

  return {
    title: post.title,
    description: post.title,
    openGraph: {
      title: post.title,
      description: post.title,
      type: "article",
      locale: "en_US",
      url: '',
      siteName: "Art Newsroom",
      images: [
        {
          url: post.image,
        },
        {
          url: urlForImage(post?.body?.find((b) => b._type === "image")).width(1200).height(630).url(),
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

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