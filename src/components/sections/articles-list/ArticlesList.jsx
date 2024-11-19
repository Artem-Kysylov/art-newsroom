// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { ArticleCard } from '@/components/article-card/ArticleCard'

export const ArticlesList = ({ posts }) => {
  return (
    <>
        <div className={styles.articles__wrapper}>
          {posts?.length > 0 && posts?.map((post) => (
            <ArticleCard
              key={post?.slug.current}
              {...post}
            />
          ))}
        </div>
    </>
  )
}
