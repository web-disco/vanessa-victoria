export const homePageQuery = `
    *[_type == "home"] | order(_createdAt desc)[0] {
    ...
  } 
`