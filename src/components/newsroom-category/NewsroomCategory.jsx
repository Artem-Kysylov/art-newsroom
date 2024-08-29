// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { Headline } from '@/components/headline/Headline'
import { CategorySlider } from '@/components/category-slider/CategorySlider'

export const NewsroomCategory = () => {
  return (
    <section>
        <div className={styles.wrapper}>
            <Headline
              style={{ textAlign: 'center', width: 800}}
              title='Explore our Newsroom'
              level={2}
            />
            <CategorySlider/>           
        </div>
    </section>
  )
}
