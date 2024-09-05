// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

// Import components 
import { Headline } from '@/components/headline/Headline'

export const HomeHeroSection = () => {
  return (
    <section className={styles.hero__section}>
        <div className='container'>
            <div className={styles.hero__cta}>
                <div className={styles.images__wrapper1}>
                    <Image
                        src="/home-hero-1.png"
                        width={400}
                        height={381}
                        loading="lazy"
                        alt='home-hero-1'
                    />
                    <Image
                        src="/home-hero-2.png"
                        width={574}
                        height={311}
                        loading="lazy"
                        alt='home-hero-2'
                    />
                </div>
                <Headline
                    style={{ textAlign: 'center'}}
                    title='Welcome to Art Newsroom'
                    level={1}
                />
                <div className={styles.images__wrapper2}>
                    <Image
                        src="/home-hero-3.png"
                        width={216}
                        height={280}
                        loading="lazy"
                        alt='home-hero-3'
                    />
                    <div className={styles.image__2}>
                        <Image                            
                            src="/home-hero-4.png"
                            width={501}
                            height={313}
                            loading="lazy"
                            alt='home-hero-4'
                        />
                        <Image 
                            className={styles.text__circle}                           
                            src="/text circle.svg"
                            width={200}
                            height={200}
                            loading="lazy"
                            alt='text circle'
                        />
                    </div>
                    <Image
                        className={styles.image__3}
                        src="/home-hero-5.png"
                        width={295}
                        height={414}
                        loading="lazy"
                        alt='home-hero-5'
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
