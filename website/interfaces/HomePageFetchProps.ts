import { PortableTextProps } from "./PortableTextProps"
import { Image } from "./Image"
import { Slider } from "./Slider"
import { TestimonialProps } from "./TestimonialProps"
import { FeaturedGalleryProps } from "./FeaturedGalleryProps"

export interface HomePageFetchProps {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    description: string
    featuredGallery: FeaturedGalleryProps
    quote: PortableTextProps
    quoteImage: Image
    slider: Slider[]
    subtitle: string
    testimonials: TestimonialProps[]
    testimonialsTitle: string
    title: string

  }
  
