// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import authorImage from '/public/author.png'


export const AboutAuthorSection = () => {
  return (
    <section className={styles.author__section}>
        <div className='container'>
            <div className={styles.content__wrapper}>
                <div className={styles.info__wrapper}>
                    <h2>About Author Artem</h2>
                    <p>Hi, I’m Artem — the creator behind Art Newsroom. I started this blog as a personal project and a way to build my portfolio, choosing a topic that has always fascinated me: the history of world art. From ancient poetry to modern literature, from classical music to baroque painting — I wanted to explore it all in one place.
I hope you enjoy the content and discover something new and inspiring along the way.</p>
                </div>

                <Image
                    src={authorImage}
                    alt="author-artem"
                    layout='intrinsic'
                    width={530}
                    height={750}
                    style={{objectFit: 'cover'}}
                />
            </div>
        </div>
    </section>
  )
}
