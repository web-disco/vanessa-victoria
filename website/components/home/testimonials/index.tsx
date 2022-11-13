import dynamic from "next/dynamic";
import { Fragment, useEffect, useState } from "react";
import { gsap } from "gsap";

import { TestimonialsProps } from "../../../interfaces/TestimonialsProps";

const Testimonial = dynamic(() => import("./testimonial"));

const Testimonials = ({
  testimonialsTitle,
  testimonials,
}: TestimonialsProps) => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const testimonials: HTMLDivElement[] = gsap.utils.toArray(".testimonial");
    gsap.set(testimonials, { autoAlpha: 0, display: "none" });
    testimonials.forEach((el, i) => {
      if (i === testimonialIndex) {
        gsap.to(el, {
          autoAlpha: 1,
          display: "block",
        });
      }
    });
  }, []);

  useEffect(() => {
    const testimonials: HTMLDivElement[] = gsap.utils.toArray(".testimonial");
    gsap.set(testimonials, { autoAlpha: 0, display: "none" });
    testimonials.forEach((el, i) => {
      if (i === testimonialIndex) {
        gsap.to(el, {
          autoAlpha: 1,
          display: "block",
        });
      }
    });
  }, [testimonialIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonialIndex === testimonials.length - 1) {
        setTestimonialIndex(0);
      } else {
        setTestimonialIndex(testimonialIndex + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonialIndex]);

  return (
    <>
      <div className="max-w-[800px] mx-auto text-center relative mb-20 lg:mb-40">
        <img
          src="/assets/testimonals-accent-1.svg"
          alt="accent"
          className="absolute left-3 lg:-left-4 -top-5 z-10"
        />
        <h3 className="text-5xl font-tangerine text-brown mb-4">
          {testimonialsTitle}
        </h3>
        {testimonials.map((testimonial) => {
          const { testimonial: text, name } = testimonial;
          return (
            <Fragment key={testimonial._key}>
              <Testimonial testimonial={text} name={name} />
            </Fragment>
          );
        })}
        <img
          src="/assets/testimonials-accent-2.svg"
          alt="accent"
          className="absolute -bottom-4 right-3 lg:-right-4 z-10"
        />
        <div className="flex items-center justify-center mt-5 space-x-3">
          {testimonials.map((_, i) => (
            <button
              onClick={() => {
                setTestimonialIndex(i);
              }}
              key={_._key}
              className={`w-[10px] h-[10px] rounded-full transition-all ${
                i === testimonialIndex
                  ? "bg-brown"
                  : "bg-gray-300 hover:bg-brown"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
