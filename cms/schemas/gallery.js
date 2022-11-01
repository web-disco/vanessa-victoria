export default {
  name: "gallery",
  title: "Gallery",
  type: "document",
  ___experimental_actions: ["update", "publish"],
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "video",
      title: "Video",
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
      name: "video",
      title: "Video",
      type: "file",
      group: "video",
    },
  ],
};
