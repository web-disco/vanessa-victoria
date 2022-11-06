export default {
  name: "contact",
  title: "Contact Page",
  type: "document",
  ___experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "blurb",
      title: "Blurb",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
