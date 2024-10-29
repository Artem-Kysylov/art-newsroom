// Imports 
import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

export const Button = ({ text, style, buttonType, type }) => {

    const buttonClass = classNames(styles.button, {
        [styles.filled]: buttonType === 'filled',
        [styles.outlined]: buttonType === 'outlined',
      })

  return (
    <button 
      style={style} 
      type={type} 
      className={buttonClass}>
        {text}
    </button>
  )
}
