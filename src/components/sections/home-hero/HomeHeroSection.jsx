// Imports 
import React from 'react'
import styles from './styles.module.scss'

// Import components 
import { Headline } from '@/components/headline/Headline'

export const HomeHeroSection = () => {
  return (
    <section className={styles.hero__section}>
        <div className='container'>
            <div className={styles.hero__cta}>
                <div className={styles.images__wrapper1}>

                </div>
                <Headline
                    style={{ textAlign: 'center'}}
                    title='Welcome to Art Newsroom'
                    level={1}
                />
                <div className={styles.images__wrapper2}>

                </div>
            </div>

            <div className={styles.descr__textWrapper}>
                <h3 className={styles.descr__text}>Lorem ipsum dolor sit amet consectetur. Arcu sit nulla consequat purus mauris accumsan ultricies praesent interdum. Ut non donec sagittis at et porta sit non. Turpis eget ornare massa lectus interdum non. Pellentesque sed at id ullamcorper vitae quam diam tristique etiam.</h3>
            </div>            
        </div>
    </section>
  )
}
