import { QuoteImage } from "./QuoteImage"
import { Slider } from "./Slider"
import { Testimonial } from "./Testimonial"

export interface HomePageFetchProps {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    description: string
    quote: string
    quoteImage: QuoteImage
    slider: Slider[]
    subtitle: string
    testimonials: Testimonial[]
    testimonialsTitle: string
    title: string
  }
  
