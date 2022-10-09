export default {
  name: "twoImageGalleryBlock",
  title: "Two Image Gallery Block",
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
      name: "option",
      title: "Option",
      type: "string",
      description:
        "Select wether to display the images side by side or one above the other",
      options: {
        list: [
          { title: "Vertical", value: "vertical" },
          { title: "Horizontal", value: "horizontal" },
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
        title: `Two Image Gallery Block - ${
          option.charAt(0).toUpperCase() + option.slice(1)
        }`,
        media: image1,
      };
    },
  },
};
