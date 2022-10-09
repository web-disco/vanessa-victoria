interface TestimonailProps {
  testimonial: string;
  name: string;
}

const Testimonial = ({ name, testimonial }: TestimonailProps) => {
  return (
    <div>
      <p className="font-light italic text-offBlack mb-6 text-[14px] px-8 leading-7">
        {testimonial}
      </p>
      <p className="text-brown uppercase text-[12px]">{name}</p>
    </div>
  );
};

export default Testimonial;
