// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs'

export const PostHeroSection = ({ post }) => {
  if (!post) return null
  
  const { title, slug, publishedAt, author, category } = post
  
  return (
    <section className={styles.postHero__section}>
        <div className='container'>
            <div className={styles.items__wrapper}>
                <Breadcrumbs 
                  category={category}
                  slug={slug}
                />
                <div className={styles.content__wrapper}>
                  <p className={styles.content__categoryName}>{category?.title}</p>
                  <h2 className={styles.content__title}>{title}</h2>
                  <div className={styles.content__info}>
                      <p><span>Posted:</span>{publishedAt ? publishedAt.split('T')[0] : 'Unknown date'}</p>
                      <p><span>Author:</span>{author}</p>
                  </div>
                  <div className={styles.content__divider}></div>
                </div>
            </div>
        </div>
    </section>
  )
}
