// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import aboutResourceImage from '/public/about-resource.png'

export const AboutResourceSection = () => {
  return (
    <section className={styles.resource__section}>
        <div className='container'>
            <div className={styles.wrapper}>
                <Image
                    src={aboutResourceImage}
                    alt="about-resource"
                    width={560}
                    height={485}
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        objectFit: 'cover'
                    }}
                />

                <div className={styles.content__wrapper}>
                    <h2 className={styles.content__title}>Why Art Matters</h2>
                        <p className={styles.content__text}>
                           Art has always been more than just decoration — it’s a way humanity tells its story. From cave paintings to symphonies, from Shakespeare’s plays to modern poetry, art reflects who we are, what we value, and how we see the world.
                        </p>
                        <p className={styles.content__text}>
                            At Art Newsroom, we dive into the rich tapestry of art history, exploring literature, painting, music, and poetry from different cultures and eras. Whether you're a student, a casual reader, or simply curious, this blog is a place to learn, reflect, and connect with the timeless language of art.
                        </p>
                </div>
            </div>
        </div>
    </section>
  )
}
