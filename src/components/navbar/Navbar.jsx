'use client'
// Imports 
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { navData } from '../../navData'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => setNav(!nav)

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
            <ul className={nav ? `${styles.nav__list} ${styles.active}` : styles.nav__list}>
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

          <div className={styles.menu__button} onClick={handleNav}>
              {nav ? (<X fill="#D9D9D9"/>) : (<Menu fill="#D9D9D9"/>)}          
          </div>
        </div>
      </div>
    </header>
  )
}
