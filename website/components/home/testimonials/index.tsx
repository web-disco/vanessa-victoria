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
    <div className="max-w-[800px] mx-auto text-center relative my-40">
      <img
        src="/assets/testimonals-accent-1.svg"
        alt="accent"
        className="absolute left-3 lg:-left-4 -top-5 z-10"
      />
      <h3 className="text-5xl font-tangerine text-brown mb-4">
        {testimonialsTitle}
      </h3>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoHeight
        autoplay={{
          delay: 5500,
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
        className="absolute -bottom-4 right-3 lg:-right-4 z-10"
      />
    </div>
  );
};

export default Testimonials;
