// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

// Import components 
import { Headline } from '@/components/headline/Headline'

export const AboutAuthorSection = () => {
  return (
    <section className={styles.author__section}>
        <div className='container'>
            <div className={styles.content__wrapper}>
                <div className={styles.info__wrapper}>
                    <Headline
                        title='About Author Artem'
                    />
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere.</p>
                </div>

                <Image
                    src="/author.png"
                    width={530}
                    height={750}
                    loading="lazy"
                    alt="author-artem"
                />
            </div>
        </div>
    </section>
  )
}
