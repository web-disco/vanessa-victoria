export default {
  name: "galleries",
  type: "document",
  title: "Galleries",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
    },
    {
      name: "credits",
      type: "string",
      title: "Credits",
    },
    {
      name: "featuredImage",
      type: "image",
      title: "Featured Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageBlocks",
      type: "array",
      title: "Image Blocks",
      of: [
        { type: "twoImageGalleryBlock" },
        { type: "threeImageGalleryBlock" },
        { type: "fourImageGalleryBlock" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "featuredImage",
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
