'use client'

// Imports 
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'
import Image from 'next/image'

export const CategorySlide = ({ id, image, title, height, width, link }) => {
  const router = useRouter()
  
  return (
    <div className={styles.category__slide}
      onClick={() => router.push(`/${link}`)}
    >
        <Image
            src={image}
            width={width}
            height={height}
            loading="lazy"
            alt={title}
        />
        <h4>{title}</h4>
    </div>
  )
}
