'use client'
// Imports 
import React from 'react'
import styles from './styles.module.scss'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { sliderData } from '@/sliderData'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'

// Import components 
import { CategorySlide } from '@/components/category-slide/CategorySlide'

export const CategorySlider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3.5}
            loop={true}
            navigation
            style={{
              "--swiper-navigation-color": "#fff",
          }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
      >
        {
          sliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <CategorySlide              
                image={slide.image}
                width={slide.width}
                height={slide.height}
                title={slide.title}
                link={slide.link}
              />           
            </SwiperSlide>          
          ))
        }
      </Swiper>
    </div>
  )
}
