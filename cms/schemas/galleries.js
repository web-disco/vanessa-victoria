export default {
    name: 'galleries',
    type: 'document',
    title: 'Galleries',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
            },
        },
        {
            name: 'credits',
            type: 'string',
            title: 'Credits',
        },
        {
            name: 'featuredImage',
            type: 'image',
            title: 'Featured Image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [{
                type: 'image',
                options: {
                    hotspot: true,
                },
                fields: [
                    {
                        name: 'alt',
                        type: 'string',
                        title: 'Alternative text',
                        validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
                    },
                ]
            }],
        }
    ],
    preview: {
        select: {
          title: 'title',
          media: 'featuredImage',
        },
        prepare(selection) {
            const {title, media} = selection
            return {
                title,
                media,
            }
        },
      },
}