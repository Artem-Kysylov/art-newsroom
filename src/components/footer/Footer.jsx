'use client'
// Imports 
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { getCategories } from '@/sanity/lib/api'


export const Footer = () => {
  const [navData, setNavData] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategories()
        const navItems = [
          ...categories.map((category) => ({
            id: category._id,
            title: category.title,
            link:`/${category.link}`,
          })),
          {
            id: 'about',
            title: 'About us',
            link: '/about',
          },
        ]
        setNavData(navItems)
      } catch (error) {
        console.error('Error fetching categories', error)
      }
    }
    fetchCategories()
  }, [])

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
              {(
                navData.map((item) => (
                    <li key={item.id}>
                      <Link href={item.link}>
                        <p className={styles.footer__navLink}>{item.title}</p>
                      </Link>
                    </li>
                ))
              )}
            </ul>
          </nav>

          <span className={styles.footer__copy}>Copyright. All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}
