// Imports 
import React from 'react'
import styles from './styles.module.scss'

export const Headline = ({ title, style, level }) => {
  const HeadingTag = `h${level}`

  return (
    <div className={styles.headline__wrapper} style={style}>
        <HeadingTag>{title}</HeadingTag>
        <div className={styles.headline__divider}></div>
    </div>
  )
}
