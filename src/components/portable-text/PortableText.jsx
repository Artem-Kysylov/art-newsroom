import React from 'react'
import { PortableText as SanityPortableText } from '@portabletext/react'
import { ArticleQuote } from '@/components/article-quote/ArticleQuote'
import { AdaptiveImage } from '@/components/adaptive-image/AdaptiveImage'
import styles from '@/components/sections/article-content/styles.module.scss'

export const PortableText = ({ value }) => {
  const components = {
    types: {
      image: ({ value }) => {
        return (
          <AdaptiveImage 
            image={value}
            alt={value.alt || 'Article image'}
            rounded={true}
          />
        )
      },
      quote: ({ value }) => {
        return (
          <ArticleQuote 
            text={value.text} 
            author={value.author} 
          />
        )
      },
    },
    block: {
      h1: ({ children }) => <h1>{children}</h1>,
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      normal: ({ children }) => <p>{children}</p>,
      blockquote: ({ children }) => (
        <div className={styles.quote__wrapper}>
          <p className={styles.quote__text}>"{children}"</p>
        </div>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className={styles.articleContent__list}>{children}</ul>,
    },
    listItem: {
      bullet: ({ children }) => <li className={styles.articleContent__listItem}>{children}</li>,
    },
  }

  return <SanityPortableText value={value} components={components} />
}