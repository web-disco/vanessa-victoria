export default {
  name: "about",
  title: "About",
  type: "document",
  ___experimental_actions: ["update", "publish"],
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "company",
      title: "Meet the Company",
    },
    {
      name: "vanessa",
      title: "Meet Vanessa",
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
      name: "companyTitle",
      title: "Company Title",
      type: "string",
      group: "company",
    },
    {
      name: "companyDescription",
      title: "Company Description",
      type: "array",
      of: [{ type: "block" }],
      group: "company",
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "company",
    },
    {
      name: "vanessaTitle",
      title: "Vanessa Title",
      type: "string",
      group: "vanessa",
    },
    {
      name: "vanessaDescription",
      title: "Vanessa Description",
      type: "array",
      of: [{ type: "block" }],
      group: "vanessa",
    },
    {
      name: "vanessaImage",
      title: "Vanessa Image",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "vanessa",
    },
  ],
};
