// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { ArticlesList } from '../sections/articles-list/ArticlesList'


export const CategoryArticlesList = ({ posts }) => {
  return (
    <section>
        <div className='container'>
            <div className={styles.items__wrapper}>
                <ArticlesList posts={posts}/>
            </div>
        </div>
    </section>
  )
}
