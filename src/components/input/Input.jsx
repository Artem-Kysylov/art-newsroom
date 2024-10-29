// Imports 
import React from 'react'
import styles from './styles.module.scss'

export const Input = ({ value, onChange }) => {
  return (
    <input 
      className={styles.input} 
      value={value} 
      onChange={onChange}
      placeholder='Type your email here...'
    />
  )
}
