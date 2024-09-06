// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import aboutHero1 from '/public/about-hero-1.png'
import aboutHero2 from '/public/about-hero-2.png'
import aboutHero3 from '/public/about-hero-3.png'

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
              level={1}
            />

            <div className={styles.images__wrapper}>
              <Image
                src={aboutHero1}
                alt="hero-image-1"
                placeholder='blur'
                style={{maxWidth: '320px', maxHeight: '376px', objectFit: 'cover'}}
              />
              <Image
              className={styles.image__2}
                src={aboutHero2}
                alt="hero-image-2"
                placeholder='blur'
                style={{maxWidth: '494px', maxHeight: '376px', objectFit: 'cover'}}
              />
              <Image
                src={aboutHero3}
                alt="hero-image-3"
                placeholder='blur'
                style={{maxWidth: '223px', maxHeight: '524px', objectFit: 'cover'}}
              />
            </div>
          </div>
        </div>
      </section>
  )
}
