import { useState } from "react";

interface TestimonailProps {
  testimonial: string;
  name: string;
}

const Testimonial = ({ name, testimonial }: TestimonailProps) => {
  // set text length
  const textLength = 300;

  // set up show state
  const [showLess, setShowLess] = useState(true);
  return (
    <div className="px-5 testimonial">
      <p className="font-light italic text-offBlack mb-6 text-[14px] leading-7">
        {showLess ? testimonial.slice(0, textLength) + "..." : testimonial}{" "}
        <span
          onClick={() => setShowLess(!showLess)}
          className="font-normal cursor-pointer"
        >
          {" "}
          Read {showLess ? "More" : "Less"}
        </span>
      </p>
      <p className="text-brown uppercase text-[12px]">{name}</p>
    </div>
  );
};

export default Testimonial;
