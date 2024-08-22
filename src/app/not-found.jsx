// Imports 
import React from 'react'
import styles from '../style/not-found.module.scss'
import Link from 'next/link'

// Import components 
import { Button } from '@/components/button/Button'

const NotFound = () => {
  return (
    <section className={styles.page}>
        <div className={styles.content__wrapper}>
            <h1 className={styles.content__title}>404</h1>
            <h4>Sorry, page not found</h4>
            <Link href='/'>
                <Button
                    text='Home page'
                    type='filled'
                    style={{ width: '333px'}}
                />
            </Link>
        </div>
    </section>
  )
}

export default NotFound