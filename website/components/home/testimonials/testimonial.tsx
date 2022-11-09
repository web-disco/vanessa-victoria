import { useRef } from "react";

interface TestimonailProps {
  testimonial: string;
  name: string;
}

const Testimonial = ({ name, testimonial }: TestimonailProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  return (
    <div className="px-5">
      <p className="font-light italic text-offBlack mb-6 text-[14px] leading-7">
        {testimonial}
      </p>
      <p className="text-brown uppercase text-[12px]">{name}</p>
      <div ref={boxRef} className="bg-brown" />
      <button
        onClick={() => {
          if (boxRef.current) {
            boxRef.current.style.height = "400px";
          }
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Testimonial;
