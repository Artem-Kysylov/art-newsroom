'use client'
// Imports 
import React from 'react'
import styles from './styles.module.scss'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { sliderData } from '@/sliderData'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination';

// Import components 
import { CategorySlide } from '@/components/category-slide/CategorySlide'

export const CategorySlider = () => {
  return (
    <div className={styles.slider__container}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3.5}
        breakpoints={{
          1000: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
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
