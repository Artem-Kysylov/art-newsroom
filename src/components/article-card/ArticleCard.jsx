import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { AdaptiveImage } from '@/components/adaptive-image/AdaptiveImage'

export const ArticleCard = ({ post }) => {
  const { title, slug, publishedAt, author, category, mainImage } = post
  
  // Create href
  const categorySlug = category?.slug?.current || ''
  const postSlug = slug?.current || ''
  const href = `/${categorySlug}/${postSlug}`
  
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.card__imageWrapper}>
        {mainImage && (
          <AdaptiveImage 
            image={mainImage}
            alt={title}
            rounded={true}
          />
        )}
      </div>
      <div className={styles.card__content}>
        <p className={styles.card__category}>{category?.title}</p>
        <h4 className={styles.card__title}>{title}</h4>
        <div className={styles.card__info}>
          <p><span>Posted:</span>{publishedAt ? publishedAt.split('T')[0] : 'Unknown date'}</p>
          <p><span>Author:</span>{author}</p>
        </div>
      </div>
    </Link>
  )
}
