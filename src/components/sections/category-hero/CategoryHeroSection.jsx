// Imports 
import React from 'react'

// Import components 
import { Headline } from '@/components/headline/Headline'

export const CategoryHeroSection = () => {
  return (
    <section>
      <div className='container'>
        <Headline
          style={{ textAlign: 'center'}}
          title='Title of Category Will be here'
          level={1}
        />
      </div>
    </section>
  )
}
