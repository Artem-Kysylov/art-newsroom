// Imports 
import React from 'react'
import styles from './styles.module.scss'
import { navData } from '../../navData'
import Image from 'next/image'
import Link from 'next/link'


export const Navbar = () => {
  return (
    <header className={styles.header}>
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

          <nav>
            <ul className={styles.nav__list}>
              {
                navData.map((item) => (
                  <li key={item.id}>
                    <Link href={item.link}>
                      <p className={styles.nav__link}>{item.title}</p>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>

      </div>
    </header>
  )
}
