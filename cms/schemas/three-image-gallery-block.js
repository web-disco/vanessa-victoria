export default {
  name: "threeImageGalleryBlock",
  title: "Three Image Gallery Block",
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
      name: "option",
      title: "Option",
      type: "string",
      description:
        "Select wether to display the large image (Image 1) on the left or right of the smaller images (Images 2 and 3)",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      option: "option",
      image1: "image1",
    },
    prepare(selection) {
      const { option, image1 } = selection;
      return {
        title: `Three Image Gallery Block - ${
          option.charAt(0).toUpperCase() + option.slice(1)
        }`,
        media: image1,
      };
    },
  },
};
