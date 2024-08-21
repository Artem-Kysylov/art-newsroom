// Imports 
import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

export const Button = ({ text, style, type }) => {

    const buttonClass = classNames(styles.button, {
        [styles.filled]: type === 'filled',
        [styles.outlined]: type === 'outlined',
      })

  return (
    <button style={style}className={buttonClass}>{text}</button>
  )
}
