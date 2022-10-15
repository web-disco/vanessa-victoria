export const getVideo = (ref: string) => {
    const [_file, id, extension] = ref.split("-");
    return `https://cdn.sanity.io/files/${process.env.SANITY_PROJECT_ID}/${process.env.SANITY_DATASET}/${id}.${extension}`;
  };