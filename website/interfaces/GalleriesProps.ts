import { Image } from "./Image"
import { ImageBlock } from "./ImageBlock"
import { Slug } from "./Slug"

export interface GalleriesProps {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    credits: string
    featuredImage: Image
    imageBlocks: ImageBlock[]
    slug: Slug
    title: string
  }
  
