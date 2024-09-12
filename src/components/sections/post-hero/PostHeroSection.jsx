// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs'

export const PostHeroSection = () => {
  return (
    <section className={styles.postHero__section}>
        <div className='container'>
            <div className={styles.items__wrapper}>
                <Breadcrumbs/>
                <div className={styles.content__wrapper}>
                  <p className={styles.content__categoryName}>category name</p>
                  <h2 className={styles.content__title}>Article name will be here maybe in two lines</h2>
                  <div className={styles.content__info}>
                      <p><span>Posted:</span>22 July</p>
                      <p><span>Author:</span>Art</p>
                  </div>
                  <div className={styles.content__divider}></div>
                </div>
            </div>
        </div>
    </section>
  )
}
