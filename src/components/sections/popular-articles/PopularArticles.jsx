// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { ArticleCard } from '@/components/article-card/ArticleCard'
import { ArticlesList } from '../articles-list/ArticlesList'

export const PopularArticles = () => {
  return ( 
    <section className={styles.popular__section}>
      <div className='container'>
        <div className={styles.big__cards}>
          <ArticleCard/>
          <ArticleCard/>
        </div>
        <ArticlesList/>
      </div>
    </section>
  )
}
