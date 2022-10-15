export default {
  name: "websiteSettings",
  title: "Website Settings",
  type: "document",
  ___experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "menuImage",
      title: "Menu Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "url",
    },
    {
      name: "pinterest",
      title: "Pinterest",
      type: "url",
    },
    {
      name: "tiktok",
      title: "TikTok",
      type: "url",
    },
  ],
};
