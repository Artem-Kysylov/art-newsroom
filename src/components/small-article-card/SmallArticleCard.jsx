// Imports 
import React from 'react'
import styles from './styles.module.scss'

export const SmallArticleCard = () => {
  return (
    <article>
        <div className={styles.card__image}>

        </div>

        <div className={styles.card__content}>
            <p className={styles.card__contentTag}>category name</p>
            <h4 className={styles.card__contentTitle}>Article title will be here maybe in two lines</h4>
            <div className={styles.card__contentInfo}>
                <div>
                    <span>Posted:</span><p>22 July</p>
                </div>
                <div>
                    <span>Author:</span><p>Art</p>
                </div>
            </div>
        </div>
    </article>
  )
}
