import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import dynamic from "next/dynamic";

import { TestimonialsProps } from "../../../interfaces/TestimonialsProps";

const Testimonial = dynamic(() => import("./testimonial"));

const Testimonials = ({
  testimonialsTitle,
  testimonials,
}: TestimonialsProps) => {
  return (
    <div className="container text-center relative my-20">
      <img
        src="/assets/testimonals-accent-1.svg"
        alt="accent"
        className="absolute -top-4 -left-2 z-10"
      />
      <h3 className="text-5xl font-tangerine text-brown mb-4">
        {testimonialsTitle}
      </h3>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoHeight
        autoplay={{
          delay: 4500,
        }}
        onSwiper={(swiper) => {
          swiper.slideNext();
          swiper.autoplay.start();
        }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial) => {
          const { testimonial: text, name } = testimonial;
          return (
            <SwiperSlide key={testimonial._key}>
              <Testimonial testimonial={text} name={name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <img
        src="/assets/testimonials-accent-2.svg"
        alt="accent"
        className="absolute -bottom-4 -right-2 z-10"
      />
    </div>
  );
};

export default Testimonials;
