// Imports 
import React from 'react'

// Import components 
import { ArticlesList } from '../articles-list/ArticlesList'

export const PopularArticles = ({ posts }) => {
  return ( 
    <section>
      <div className='container'>
        <ArticlesList posts={posts}/>
      </div>
    </section>
  )
}
