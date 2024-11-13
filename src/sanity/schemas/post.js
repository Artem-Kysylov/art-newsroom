export const post = {
    name: 'post',
    title: 'Post',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Title',
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
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                { 
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal'},
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'Quote', value: 'blockquote'},
                    ],
                    lists: [{ title: 'Bullet', value: 'bullet' }],
                    marks: {
                        decorators: [
                            { title: 'Bold', value: 'strong' },
                            { title: 'Italic', value: 'em' },
                        ],
                    }
                },
                {
                    name: 'quote',
                    title: 'Quote',
                    type: 'object',
                    fields: [
                        {
                            name: 'text',
                            title: 'Quote text',
                            type: 'text',
                            validation: (rule) => rule.required().error('Quote text is required'),
                        },
                        {
                            name: 'author',
                            title: 'Author',
                            type: 'string',
                        },
                    ],
                    preview: {
                        select: {
                            title: 'text',
                            subtitle: 'author',
                        },
                        prepare({ title, subtitle }) {
                            return {
                                title: `'${title}'`,
                                subtitle: subtitle ? `- ${subtitle}` : '',
                            }
                        },
                    },
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
            ],
        },
    ],
}