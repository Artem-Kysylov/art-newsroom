'use client'
// Imports 
import React from 'react'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import components 
import { CategorySlide } from '@/components/category-slide/CategorySlide'

export const CategorySlider = () => {
  return (
    <Swiper
        spaceBetween={30}
        slidesPerView={3.5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>
            <CategorySlide/>
        </SwiperSlide>

  </Swiper>
  )
}
