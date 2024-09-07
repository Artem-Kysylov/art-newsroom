// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import bigArticleImg from '/public/big-article-img.png'

export const BigArticleCard = () => {
    return (
        <Link href={'/'}>
            <article className={styles.article__card}>
                    <Image
                        src={bigArticleImg}
                        alt='article-title'
                        width={583}
                        height={400}
                        style={{
                            objectFit: 'cover', 
                            borderTopLeftRadius: '15px', 
                            borderTopRightRadius: '15px', 
                            marginBottom: '20px'
                        }}
                    />
    
                <div className={styles.card__content}>
                    <p className={styles.card__contentTag}>category name</p>
                    <h4 className={styles.card__contentTitle}>Article title will be here maybe in two lines</h4>
                    <div className={styles.card__contentInfo}>
                        <p><span>Posted:</span>22 July</p>
                        <p><span>Author:</span>Art</p>
                    </div>
                </div>
            </article>
        </Link>
    )
}
