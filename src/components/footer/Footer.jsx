// Imports 
import React from 'react'
import styles from './styles.module.scss'
import { navData } from '../../navData'
import Image from 'next/image'
import Link from 'next/link'


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <Link href='/'>
              <Image
                src='/logo.svg'
                width={110}
                height={67}
                alt='logo'
              />
            </Link>

            <nav>
            <ul className={styles.footer__navList}>
              {
                navData.map((item) => (
                  <li key={item.id}>
                    <Link href={item.link}>
                      <p className={styles.footer__navLink}>{item.title}</p>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>

          <span className={styles.footer__copy}>Copyright. All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}
