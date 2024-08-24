// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

export const AboutResourceSection = () => {
  return (
    <section className={styles.resource__section}>
        <div className='container'>
            <div className={styles.wrapper}>
                <Image
                    src="/about-resource.png"
                    width={560}
                    height={485}
                    alt="about-resource"
                />

                <div className={styles.content__wrapper}>
                    <h2>Title of this section will be here</h2>
                    <div className={styles.text__wrapper}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.
                        </p>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet consectetur.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
