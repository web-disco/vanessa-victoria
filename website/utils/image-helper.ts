import imageUrlBuilder from "@sanity/image-url";

import client from "../client";
import { Image } from "../interfaces/Image";

const builder = imageUrlBuilder(client);

export const urlFor = (source: Image) => {
  return builder.image(source);
};
