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
                        placeholder='blur'
                        style={{maxWidth: '400px', maxHeight: '381px', objectFit: 'cover'}}
                    />
                    <Image
                        src={homeHero2}
                        alt='home-hero-2'
                        placeholder='blur'
                        style={{maxWidth: '574px', maxHeight: '311px', objectFit: 'cover'}}
                    />
                </div>
                <Headline
                    style={{ textAlign: 'center'}}
                    title='Welcome to Art Newsroom'
                    level={1}
                />
                <div className={styles.images__wrapper2}>
                    <Image
                        src={homeHero3}
                        width={216}
                        height={280}
                        alt='home-hero-3'
                        placeholder='blur'
                        style={{maxWidth: '216px', maxHeight: '280px', objectFit: 'cover'}}
                    />
                    <div className={styles.image__2}>
                        <Image                            
                            src={homeHero4}
                            width={501}
                            height={313}
                            alt='home-hero-4'
                            placeholder='blur'
                            style={{maxWidth: '501px', maxHeight: '313px', objectFit: 'cover'}}
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
                        width={295}
                        height={414}
                        alt='home-hero-5'
                        placeholder='blur'
                        style={{maxWidth: '295px', maxHeight: '414px', objectFit: 'cover'}}
                    />
                </div>
            </div>

            <div className={styles.descr__textWrapper}>
                <h3 className={styles.descr__text}>Lorem ipsum dolor sit amet consectetur. Arcu sit nulla consequat purus mauris accumsan ultricies praesent interdum. Ut non donec sagittis at et porta sit non. Turpis eget ornare massa lectus interdum non. Pellentesque sed at id ullamcorper vitae quam diam tristique etiam.</h3>
            </div>            
        </div>
    </section>
  )
}
