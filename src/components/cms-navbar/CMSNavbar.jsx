// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export const CMSNavbar = () => {
  return (
    <section className={styles.navbar}>
        <Link href='/'>
            <Image
              src='/logo.svg'
              width={110}
              height={67}
              alt='logo'
            />
          </Link>
    </section>
  )
}
