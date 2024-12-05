import { client } from '@/sanity/lib/client'
import { localSliderData } from '../../localSliderData'

export const getCategories = async () => {
    const query = `
        *[_type == "category"] {
            _id,
            title,
            "link": slug.current
        }
    `
    try {
        const categories = await client.fetch(query)
        return categories
    } catch (error) {
        console.error('Error fetching categories', error)
        throw new Error('Failde to fetch categories')
    }
}



export const getSliderCategories = async () => {
    const query = `
        *[_type == "category"] {
            _id,
            title,
            "slug": slug.current
        }
    `
    try {
        const categories = await client.fetch(query)
    
        const categoriesWithLocalData = categories.map((category) => {
            const localData = localSliderData[category.slug]
    
            return {
                id: category._id,
                title: category.title,
                link: category.slug,
                image: localData.image,
                width: localData.width || 400,
                height: localData.height || 400,
            }
        })
    
        return categoriesWithLocalData        
    } catch (error) {
        console.error('Error fetching categories', error)
        throw new Error('Failde to fetch categories')
    }
}