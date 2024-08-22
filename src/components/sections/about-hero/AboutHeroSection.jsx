// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { Headline } from '@/components/headline/Headline'

export const AboutHeroSection = () => {
  return (
    <section>
        <div className='container'>
          <div className={styles.hero__wrapper}>
            <Headline
              title='About Art Newsroom'
            />

            <div className={styles.images__wrapper}>

            </div>
          </div>
        </div>
      </section>
  )
}
