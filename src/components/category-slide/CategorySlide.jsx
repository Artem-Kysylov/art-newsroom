// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export const CategorySlide = ({ image, title, height, width, link }) => {
  
  return (
    <Link href={`/${link}`}>
        <div className={styles.category__slide}>
            <Image
                src={image}
                alt={title}
                layout='intrinsic'
                width={width}
                height={height}
                loading="lazy"
            />
            <h4>{title}</h4>
        </div>
    </Link>
  )
}
