// Imports 
import React from 'react'
import styles from './styles.module.scss'
import { navData } from '../../navData'
import Image from 'next/image'
import Link from 'next/link'


export const Navbar = () => {
  return (
    <header>
      <div className='container'>
        <div className={styles.navbar__wrapper}>
          <Link href='/'>
            <Image
              src='/logo.svg'
              width={110}
              height={67}
              alt='logo'
            />
          </Link>

          <nav></nav>
        </div>

      </div>
    </header>
  )
}
