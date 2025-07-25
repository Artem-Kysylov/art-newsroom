// Imports 
import React from 'react'
import styles from './not-found.module.scss'
import Link from 'next/link'

// Import components 
import { Button } from '@/components/button/Button'

export const NotFound = () => {
  return (
    <section className={styles.page}>
        <div className={styles.content__wrapper}>
            <h1 className={styles.content__title}>404</h1>
            <h4>Sorry, page not found</h4>
            <Link href='/'>
                <Button
                    text='Home page'
                    buttonType='filled'
                    style={{ width: '333px'}}
                />
            </Link>
        </div>
    </section>
  )
}

export default NotFound