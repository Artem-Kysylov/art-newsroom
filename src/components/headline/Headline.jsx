// Imports 
import React from 'react'
import styles from './styles.module.scss'

export const Headline = ({ title, style }) => {
  return (
    <div className={styles.headline__wrapper} style={style}>
        <h1>{title}</h1>
        <div className={styles.headline__divider}></div>
    </div>
  )
}
