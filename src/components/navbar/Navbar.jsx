'use client'
// Imports 
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { getCategories } from '@/sanity/lib/api'

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [navData, setNavData] = useState([])

  const handleNav = () => setNav(!nav)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategories()
        const navItems = [
          ...categories.map((category) => ({
              id: category._id,
              title: category.title,
              link: `/${category.link}`,
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
              {(
                navData.map((item) => (
                    <li key={item.id}>
                      <Link href={item.link}>
                        <p className={styles.nav__link}>{item.title}</p>
                      </Link>
                    </li>
                ))
              )}
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
