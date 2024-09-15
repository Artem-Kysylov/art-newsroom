// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

// Import components 
import { Button } from '@/components/button/Button'

export const PostContent = () => {
  return (
    <section className={styles.postContent__section}>
        <div className={styles.postContent__container}>
                <Image
                    src='/article-content-img-1.png'
                    alt='image'
                    width={800}
                    height={500}
                    layout='responsive'
                    style={{
                        objectFit: 'cover', 
                        borderTopLeftRadius: '20px', 
                        borderTopRightRadius: '20px', 
                    }}
                />

                <div className={styles.postContent__wrapper}>
                    <h3>Title will be here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <ul className={styles.postContent__list}>
                        <li className={styles.postContent__listItem}>Lorem ipsum dolor sit amet consectetur. </li>
                        <li className={styles.postContent__listItem}>Lorem ipsum dolor sit amet consectetur. </li>
                        <li className={styles.postContent__listItem}>Lorem ipsum dolor sit amet consectetur. </li>
                        <li className={styles.postContent__listItem}>Lorem ipsum dolor sit amet consectetur. </li>
                    </ul>
                </div>

                <Image
                    src='/article-content-img-2.png'
                    alt='image'
                    width={800}
                    height={500}
                    layout='responsive'
                    style={{
                        objectFit: 'cover', 
                        borderTopLeftRadius: '20px', 
                        borderTopRightRadius: '20px', 
                    }}
                />

                <div className={styles.postContent__wrapper}>
                    <h3>Title will be here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <div className={styles.postContent__quoteBlock}>
                        <p>“Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit.”</p>
                        <h4>Author name will be here</h4>
                    </div>
                </div>

                <div className={styles.postContent__wrapper}>
                    <h3>Title will be here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <div className={styles.postContent__divider}></div>

                    <Button
                        text='Share this article'
                        type='outlined'
                    />
                </div>
        </div>
    </section>
  )
}
