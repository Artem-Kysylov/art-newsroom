// Imports 
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

// Import components 
import { Button } from '@/components/button/Button'

export const PostContent = () => {
  return (
    <section className={styles.postContent__section}>
        <div className={styles.postContent__container}>
                <Image
                    src='/article-content-img-1.png'
                    alt='image'
                    width={800}
                    height={500}
                    layout='responsive'
                    style={{
                        objectFit: 'cover', 
                        borderTopLeftRadius: '20px', 
                        borderTopRightRadius: '20px', 
                    }}
                />
            <Button
                text='Share this article'
                type='outlined'
            />
        </div>
    </section>
  )
}
