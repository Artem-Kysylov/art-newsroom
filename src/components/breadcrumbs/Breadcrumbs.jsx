// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

export const Breadcrumbs = ({ category, slug }) => {
  return (
    <div className={styles.breadcrumbs__wrapper}> 
      <Link href='/'>
        <p className={styles.breadcrumbs__link}>Home</p>
      </Link>
      <span>/</span>
      <Link href={`/${category?.slug?.current}`}>
        <p className={styles.breadcrumbs__link}>{category?.title}</p>
      </Link>
      <span>/</span>
        <p className={styles.breadcrumbs__linkActive}>{`${slug?.current}`}</p>
    </div>
  )
}
