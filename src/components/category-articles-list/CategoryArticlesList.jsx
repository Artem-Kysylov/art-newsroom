// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { ArticlesList } from '../sections/articles-list/ArticlesList'
import { Button } from '@/components/button/Button'


export const CategoryArticlesList = () => {
  return (
    <section>
        <div className='container'>
            <div className={styles.items__wrapper}>
                <ArticlesList/>
                <Button
                    text='Load More'
                    type='outlined'
                />
            </div>
        </div>
    </section>
  )
}
