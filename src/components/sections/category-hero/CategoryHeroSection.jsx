// Imports 
import React from 'react'

// Import components 
import { Headline } from '@/components/headline/Headline'

export const CategoryHeroSection = ({ category }) => {
  return (
    <section>
      <div className='container'>
        <Headline
          style={{ textAlign: 'center'}}
          title={category}
          level={1}
        />
      </div>
    </section>
  )
}
