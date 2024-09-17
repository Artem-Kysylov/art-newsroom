// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { BigArticleCard } from '@/components/big-article-card/BigArticleCard'
import { ArticlesList } from '../articles-list/ArticlesList'

export const PopularArticles = () => {
  return (
    <section className={styles.popular__section}>
      <div className='container'>
        <div className={styles.big__cards}>
          <BigArticleCard/>
          <BigArticleCard/>
        </div>
        <ArticlesList/>
      </div>
    </section>
  )
}
