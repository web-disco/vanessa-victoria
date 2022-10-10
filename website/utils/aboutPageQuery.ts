export const aboutPageQuery = `
    *[_type == "about"] | order(_updatedAt desc)[0] {
    ...
  } 
`