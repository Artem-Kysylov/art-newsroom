// Imports 
import React from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

export const Button = ({ text, style, buttonType, type, onClick }) => {
    const buttonClass = classNames(styles.button, {
        [styles.filled]: buttonType === 'filled',
        [styles.outlined]: buttonType === 'outlined',
      })

  return (
    <button 
      style={style} 
      type={type} 
      onClick={onClick}
      className={buttonClass}>
        {text}
    </button>
  )
}
