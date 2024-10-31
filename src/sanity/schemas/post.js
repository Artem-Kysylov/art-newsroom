export const post = {
    name: 'post',
    title: 'Post',
    type: 'document',

    fields: [
        {
            name: 'post',
            title: 'Post',
            type: 'string',
            validation: (rule) => rule.required().error('Required'),
        },
        {
            name: 'slug',
            title: 'Slug',
            type:'slug',
            options: { 
                source: 'title',
                maxLength: 96, 
            },
            validation: (rule) => rule.required().error('Required'),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: (rule) => rule.required().error('Category is required')
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                },
            ],
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
            validation: (rule) => rule.required().error('Required'),
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            validation: (rule) => rule.max(200).error('Max 200 characters'),
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                { 
                    type: 'block'
                },
                { 
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alt',
                        },
                    ],
                },
            ]
        },
    ],
}