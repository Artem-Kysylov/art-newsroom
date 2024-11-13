// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import articleImage from '/public/article-image.png'

export const ArticleCard = ({ title, slug, publishedAt, author, category, mainImage }) => {
  return (
    <Link href={'/'} className={styles.article__linkContainer}>
        <article className={styles.article__card}>
                <Image
                    src={articleImage}
                    alt='article-title'
                    layout='responsive'
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <span className={styles.card__contentDivider}></span>
                <div className={styles.card__contentInfo}>
                    <p><span>Posted:</span>22 July</p>
                    <p><span>Author:</span>Art</p>
                </div>
            </div>
        </article>
    </Link>
  )
}
