export default {
  name: "services",
  title: "Services",
  type: "document",
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      group: "seo",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      group: "seo",
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      group: "seo",
    },
    {
      name: "serviceTitle",
      title: "Service Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "serviceTitle",
        maxLength: 200,
      },
    },
    {
      name: "serviceDescription",
      title: "Service Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "serviceImage",
      title: "Service Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "serviceTitle",
      media: "serviceImage",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title,
        media,
      };
    },
  },
};
