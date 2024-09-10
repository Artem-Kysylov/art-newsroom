// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { SmallArticleCard } from '@/components/small-article-card/SmallArticleCard'
import { BigArticleCard } from '@/components/big-article-card/BigArticleCard'

export const PopularArticles = () => {
  return (
    <section className={styles.popular__section}>
      <div className='container'>
        <div className={styles.big__cards}>
          <BigArticleCard/>
          <BigArticleCard/>
        </div>

        <div className={styles.small__cards}>
          <SmallArticleCard/>
          <SmallArticleCard/>
          <SmallArticleCard/>
          <SmallArticleCard/>
          <SmallArticleCard/>
          <SmallArticleCard/>
        </div>
      </div>
    </section>
  )
}
