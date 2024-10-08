// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { ArticleCard } from '@/components/article-card/ArticleCard'

export const ArticlesList = () => {
  return (
    <>
        <div className={styles.articles__wrapper}>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
        </div>
    </>
  )
}
