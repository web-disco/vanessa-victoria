import { GalleriesPage } from "./GalleriesPage"
import { Video } from "./Video"

interface GalleryProps {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: string
    metaTitle: string
    metaDescription: string
    keywords: string[]
    video: Video
}

export interface GalleriesPageProps {
    galleries: GalleriesPage[]
    gallery: GalleryProps
}