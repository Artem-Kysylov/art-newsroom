// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { SmallArticleCard } from '@/components/small-article-card/SmallArticleCard'
import { Button } from '@/components/button/Button'

export const ArticlesList = () => {
  return (
    <section>
        <div className='container'>
            <div className={styles.content__wrapper}>
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
                <Button
                    text='Load More'
                    type='outlined'
                />
            </div>
        </div>
    </section>
  )
}
