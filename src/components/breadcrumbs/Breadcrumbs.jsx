// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

export const Breadcrumbs = ({ category, slug }) => {
  const categoryTitle = category?.title || 'Uncategorized'
  const categorySlug = category?.slug?.current || ''
  const postSlug = slug?.current || 'Untitled'

  return (
    <nav className={styles.breadcrumbs__wrapper} aria-label='Breadcrumbs'> 
      <Link href='/'>
        <p className={styles.breadcrumbs__link}>Home</p>
      </Link>
      <span>/</span>
      <Link href={`/${categorySlug}`}>
        <p className={styles.breadcrumbs__link}>{categoryTitle}</p>
      </Link>
      <span>/</span>
        <p className={styles.breadcrumbs__linkActive}>{postSlug}</p>
    </nav>
  )
}
