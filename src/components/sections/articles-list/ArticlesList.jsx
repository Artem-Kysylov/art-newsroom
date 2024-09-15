// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { SmallArticleCard } from '@/components/small-article-card/SmallArticleCard'

export const ArticlesList = () => {
  return (
    <>
        <div className={styles.articles__wrapper}>
            <SmallArticleCard/>
            <SmallArticleCard/>
            <SmallArticleCard/>
            <SmallArticleCard/>
            <SmallArticleCard/>
            <SmallArticleCard/>
            <SmallArticleCard/>
            <SmallArticleCard/>
            <SmallArticleCard/>
        </div>

    </>
  )
}
