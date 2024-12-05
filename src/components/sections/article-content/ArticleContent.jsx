// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

// Import components 
import { Button } from '@/components/button/Button'
import { ArticleQuote } from '@/components/article-quote/ArticleQuote'

export const ArticleContent = ({ title, mainImage }) => {
    const imageUrl = mainImage ? urlFor(mainImage).url() : null
    
  return (
    <section className={styles.articleContent__section}>
        <div className={styles.articleContent__container}>
                <Image
                    src={imageUrl}
                    alt={title}
                    width={800}
                    height={500}
                    layout='responsive'
                    style={{
                        objectFit: 'cover', 
                        borderTopLeftRadius: '20px', 
                        borderTopRightRadius: '20px', 
                    }}
                />

                <div className={styles.articleContent__wrapper}>
                    <h3>Title will be here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <ul className={styles.postContent__list}>
                        <li className={styles.articleContent__listItem}>Lorem ipsum dolor sit amet consectetur. </li>
                        <li className={styles.articleContent__listItem}>Lorem ipsum dolor sit amet consectetur. </li>
                        <li className={styles.articleContent__listItem}>Lorem ipsum dolor sit amet consectetur. </li>
                        <li className={styles.articleContent__listItem}>Lorem ipsum dolor sit amet consectetur. </li>
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

                <div className={styles.articleContent__wrapper}>
                    <h3>Title will be here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <ArticleQuote/>
                </div>

                <div className={styles.articleContent__wrapper}>
                    <h3>Title will be here</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit. Nam ut semper enim quam sodales fringilla in diam. Elit nec a blandit donec platea. Rhoncus eget quam volutpat sed id nisl.</p>
                    <div className={styles.articleContent__divider}></div>

                    <Button
                        text='Share this article'
                        buttonType='outlined'
                    />
                </div>
        </div>
    </section>
  )
}
