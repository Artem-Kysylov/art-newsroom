// Imports 
import React from 'react'
import { client } from '@/sanity/lib/client'
import NotFound from '../../not-found'
import { urlFor } from '@/sanity/lib/image' 

// Import components
import { PostHeroSection } from '@/components/sections/post-hero/PostHeroSection' 
import { ArticleContent } from '@/components/sections/article-content/ArticleContent'
import { NewsletterForm } from '@/components/newsletter-form/NewsletterForm'

// Get posts 
const getPost = async (slug) => {
  try {
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
                height
              }
            }
          },
          alt
        },
        publishedAt,
        author,
        category -> {
          title,
          slug {
            current
          }
        },
        _id,
        "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
        body,
        "quotes": body[_type == "quote"],
        "images": body[_type == "image"]
      }
    `;

    const postData = await client.fetch(query);
    return postData;
  } catch (error) {
    console.error("Error fetching post data:", error)
    return null
  }
};

// Generate Metadata 
export const generateMetadata = async ({ params }) => {
  const resolvedParams = await params
  const post = await getPost(resolvedParams?.post)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.'
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const pageUrl = `${baseUrl}/${resolvedParams?.category}/${resolvedParams?.post}`

  return {
    title: post.title,
    description: post.title,
    openGraph: {
      title: post.title,
      description: post.title,
      type: "article",
      locale: "en_US",
      url: pageUrl,
      siteName: "Art Newsroom",
      images: [
        {
          url: post.mainImage?.asset.url,
        },
        {
          url: post.body?.find((b) => b._type === 'image') 
          ? urlFor(post?.body?.find((b) => b._type === "image")).width(1200).height(630).url()
          : '',
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

const PostPage = async ({ params }) => {
  const resolvedParams = await params
  const post = await getPost(resolvedParams?.post) 

  if(!post) {
    return <NotFound/>
  }

  return (
    <main>
      <div className='sections__wrapper'>
        <PostHeroSection post={post}/>
        <ArticleContent post={post}/>
        <NewsletterForm/>
      </div>
    </main>
  )
}

export default PostPage