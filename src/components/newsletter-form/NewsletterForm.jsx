// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { Button } from '@/components/button/Button'
import { Input } from '@/components/input/Input'
import { Headline } from '@/components/headline/Headline'

export const NewsletterForm = () => {
  return (
    <section className={styles.newsletter__section}>
        <div className='container'>
            <div className={styles.wrapper}>
                <Headline
                    style={{ textAlign: 'center'}}
                    title='Subscribe to Our Latest News'
                    level={2}
                />
                <form className={styles.form}>
                    <Input/>
                    <Button
                        text='Send'
                        type='filled'
                    />
                </form>
            </div>
        </div>
    </section>
  )
}
