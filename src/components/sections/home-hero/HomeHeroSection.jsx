// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import homeHero1 from '/public/home-hero-1.png'
import homeHero2 from '/public/home-hero-2.png'
import homeHero3 from '/public/home-hero-3.png'
import homeHero4 from '/public/home-hero-4.png'
import homeHero5 from '/public/home-hero-5.png'

// Import components 
import { Headline } from '@/components/headline/Headline'

export const HomeHeroSection = () => {
  return (
    <section className={styles.hero__section}>
        <div className='container'>
            <div className={styles.hero__cta}>
                <div className={styles.images__wrapper1}>
                    <Image
                        src={homeHero1}
                        alt='home-hero-1'
                        layout='intrinsic'
                        width={400}
                        height={381}
                        placeholder='blur'
                        style={{objectFit: 'cover'}}
                    />
                    <Image
                        src={homeHero2}
                        alt='home-hero-2'
                        layout='intrinsic'
                        width={574}
                        height={311}
                        placeholder='blur'
                        style={{objectFit: 'cover'}}
                    />
                </div>
                <Headline
                    style={{ textAlign: 'center'}}
                    title='Welcome to Art Newsroom'
                    level={1}
                />
                <div className={styles.images__wrapper2}>
                    <Image
                        className={styles.image__1}
                        src={homeHero3}
                        alt='home-hero-3'
                        layout='intrinsic'
                        width={216}
                        height={280}
                        placeholder='blur'
                        style={{objectFit: 'cover'}}
                    />
                    <div className={styles.image__2}>
                        <Image                            
                            src={homeHero4}
                            layout='intrinsic'
                            alt='home-hero-4'
                            width={501}
                            height={313}
                            placeholder='blur'
                            style={{objectFit: 'cover'}}
                        />
                        <Image 
                            className={styles.text__circle}                           
                            src="/text circle.svg"
                            width={200}
                            height={200}
                            alt='text circle'
                        />
                    </div>
                    <Image
                        className={styles.image__3}
                        src={homeHero5}
                        alt='home-hero-5'
                        layout='intrinsic'
                        width={295}
                        height={414}
                        placeholder='blur'
                        style={{objectFit: 'cover'}}
                    />
                </div>
            </div>

            <div className={styles.descr__textWrapper}>
                <h3 className={styles.descr__text}>Art Newsroom is a space where literature, painting, music, and poetry meet. Here, Shakespeare and Akhmatova come to life, Baroque melodies echo, and Orwell’s ideas are explored. We delve into the past to better understand the present — and find inspiration in the timeless power of art.</h3>
            </div>            
        </div>
    </section>
  )
}