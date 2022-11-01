const homePageQuery = `
    *[_type == "home"] | order(_createdAt desc)[0] {
    ...
  } 
`;

const aboutPageQuery = `
*[_type == "about"][0] {
    ...
  } 
`;

const servicesQuery = `
    *[_type == "services"]{
    ...
  } 
`;

const websiteSettingsQuery = `
*[_type == "websiteSettings"][0] {
    ...
  } 
`;

const contactPageQuery = `
*[_type == "contact"][0] {
    ...
  } 
`;

const galleriesQuery = `
  *[_type == "galleries"]
`;

const galleryPageQuery = `
*[_type == "gallery"][0]
`;

export {
  homePageQuery,
  aboutPageQuery,
  contactPageQuery,
  servicesQuery,
  galleriesQuery,
  websiteSettingsQuery,
};
