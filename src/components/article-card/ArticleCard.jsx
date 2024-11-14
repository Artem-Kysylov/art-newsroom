// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export const ArticleCard = ({ title, slug, publishedAt, author, category, mainImage }) => {
  return (
    <Link href='/' className={styles.article__linkContainer}>
        <article className={styles.article__card}>
            {mainImage?.asset?.url && 
                <Image
                    src={mainImage.asset.url}
                    alt={title}
                    layout='responsive'
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                        objectFit: 'cover', 
                        borderTopLeftRadius: '15px', 
                        borderTopRightRadius: '15px', 
                        marginBottom: '20px'
                    }}
                />
            }
            <div className={styles.card__content}>
                <p className={styles.card__contentTag}>{category?.title}</p>
                <h4 className={styles.card__contentTitle}>{title}</h4>
                <span className={styles.card__contentDivider}></span>
                <div className={styles.card__contentInfo}>
                    <p><span>Posted:</span>{publishedAt}</p>
                    <p><span>Author:</span>{author}</p>
                </div>
            </div>
        </article>
    </Link>
  )
}
