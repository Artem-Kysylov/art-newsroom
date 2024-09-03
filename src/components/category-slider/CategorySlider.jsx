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
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3.5}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: false,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: false,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: false,
            navigation: true,
          },
        }}
        loop={true}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
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
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  )
}
