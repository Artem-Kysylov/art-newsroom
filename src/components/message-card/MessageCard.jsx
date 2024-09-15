// Imports 
import React from 'react'
import styles from './styles.module.scss'
import { CircleCheck } from 'lucide-react'


export const MessageCard = () => {
  return (
    <div className={styles.message__cardWrapper}>
        <div className={styles.card__wrapper}>
            <CircleCheck 
                color="#1D1D1D"
            />
            <p className={styles.cardWrapper__text}>You are successfully subscribed to our news</p>
        </div>
    </div>
  )
}
