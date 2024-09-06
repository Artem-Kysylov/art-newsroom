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
                    style={{maxWidth: '560px', maxHeight: '485px', objectFit: 'cover'}}
                />

                <div className={styles.content__wrapper}>
                    <h2 className={styles.content__title}>Title of this section will be here</h2>
                        <p className={styles.content__text}>
                            Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.
                        </p>
                        <ul className={styles.content__list}>
                            <li  className={styles.content__listItem}>
                                Lorem ipsum dolor sit amet consectetur.
                            </li>
                            <li className={styles.content__listItem}>
                                Lorem ipsum dolor sit amet consectetur.
                            </li>
                            <li className={styles.content__listItem}>
                                Lorem ipsum dolor sit amet consectetur.
                            </li>
                            <li className={styles.content__listItem}>
                                Lorem ipsum dolor sit amet consectetur.
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
