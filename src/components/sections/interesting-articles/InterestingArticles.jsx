// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components
import { ArticlesList } from '../articles-list/ArticlesList'

export const InterestingArticles = () => {
  return (
    <section className={styles.interesting__section}>
        <div className='container'>
            <h2 className={styles.interesting__title}>Might be interesting for you</h2>
            <ArticlesList/>
        </div>
    </section>
  )
}
