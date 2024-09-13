// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

export const Breadcrumbs = () => {
  return (
    <div className={styles.breadcrumbs__wrapper}> 
      <Link href='/'>
        <p className={styles.breadcrumbs__link}>Home</p>
      </Link>
      <span>/</span>
      <Link href='/'>
        <p className={styles.breadcrumbs__link}>Category name</p>
      </Link>
      <span>/</span>
        <p className={styles.breadcrumbs__linkActive}>Article name will be here</p>
    </div>
  )
}
