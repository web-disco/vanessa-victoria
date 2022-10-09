export default {
  name: "fourImageGalleryBlock",
  title: "Four Image Gallery Block",
  type: "object",
  fields: [
    {
      name: "image1",
      title: "Image 1",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image2",
      title: "Image 2",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image3",
      title: "Image 3",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image4",
      title: "Image 4",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      image1: "image1",
    },
    prepare(selection) {
      const { image1 } = selection;
      return {
        title: "Four Image Gallery Block",
        media: image1,
      };
    },
  },
};
