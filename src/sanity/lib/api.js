import { client } from '@/sanity/lib/client'

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