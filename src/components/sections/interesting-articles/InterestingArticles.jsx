// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components
import { SmallArticleCard  } from '@/components/small-article-card/SmallArticleCard' 

export const InterestingArticles = () => {
  return (
    <section className={styles.interesting__section}>
        <div className='container'>
            <h2 className={styles.interesting__title}>Might be interesting for you</h2>
            <div className={styles.interesting__articles}>
                <SmallArticleCard/>
                <SmallArticleCard/>
                <SmallArticleCard/>
                <SmallArticleCard/>
            </div>
        </div>
    </section>
  )
}
