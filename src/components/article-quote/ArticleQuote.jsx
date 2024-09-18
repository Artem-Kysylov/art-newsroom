// Imports 
import React from 'react'
import styles from './styles.module.scss'

export const ArticleQuote = () => {
  return (
    <div className={styles.quote__wrapper}>
      <p className={styles.quote__text}>“Lorem ipsum dolor sit amet consectetur. Praesent sed nec leo nulla tortor in. Ullamcorper risus scelerisque facilisis eget gravida fusce sodales lectus. Imperdiet ut sit elit ultrices facilisis tellus posuere. Adipiscing in suspendisse ipsum pellentesque elementum aliquet sit.”</p>
      <h4 className={styles.quote__title}>Author name will be here</h4>
    </div>
  )
}
