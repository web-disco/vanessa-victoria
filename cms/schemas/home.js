export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    ___experimental_actions: ['update', 'publish'],
    groups: [
        {
            name: 'seo',
            title: 'SEO',
        },
        {
            name: 'slider',
            title: 'Slider',
        },
        {
            name: 'intro',
            title: 'Intro',
        },
        {
            name: 'quote',
            title: 'Quote',
        },
        {
          name: 'testimonial',
          title: 'Testimonial',
        },
      ],
    fields: [
        {
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
            group: 'seo'
        },
        {
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            group: 'seo'
        },
        {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{type: 'string'}],
            group: 'seo'
        },
        {
            name: 'slider',
            type: 'array',
            title: 'Slider',
            validation: Rule => Rule.required().min(3).max(5),
            group: 'slider',
            of: [
              {
                name: 'image',
                type: 'image',
                title: 'Image',
                options: {
                  hotspot: true,
                },
                fields: [
                  {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                  },
                ],
              },
            ],
          },
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'intro'
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            group: 'intro'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            group: 'intro'
        },
        {
            name: 'quote',
            title: 'Quote',
            type: 'text',
            group: 'quote'
        },
        {
            name: 'quoteImage',
            type: 'image',
            title: 'Quote Image',
            options: {
              hotspot: true,
            },
            group: 'quote'
        },
        {
            name: 'testimonialTitle',
            title: 'Testimonial Title',
            type: 'string',
            group: 'testimonial',
        },
        {
            name: 'testimonials',
            type: 'array',
            title: 'Testimonials',
            of: [{ type: "testimonial" }],
            group: 'testimonial',
          },
    ]
}