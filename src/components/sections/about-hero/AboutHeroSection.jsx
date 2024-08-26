// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

// Import components 
import { Headline } from '@/components/headline/Headline'

export const AboutHeroSection = () => {
  return (
    <section className={styles.hero__section}>
        <div className='container'>
          <div className={styles.hero__wrapper}>
            <Headline
              style={{ textAlign: 'center'}}
              title='About Art Newsroom'
            />

            <div className={styles.images__wrapper}>
              <Image
                src="/about-hero-1.png"
                width={320}
                height={376}
                loading="lazy"
                alt="hero-image-1"
              />
              <Image
                className={styles.image__2}
                src="/about-hero-2.png"
                width={494}
                height={376}
                loading="lazy"
                alt="hero-image-2"
              />
              <Image
                src="/about-hero-3.png"
                width={223}
                height={524}
                loading="lazy"
                alt="hero-image-3"
              />
            </div>
          </div>
        </div>
      </section>
  )
}
