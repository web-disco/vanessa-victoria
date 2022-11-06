import Link from "next/link";

import { IntroProps } from "../../interfaces/IntroProps";

const Intro = ({ title, subtitle, description }: IntroProps) => {
  return (
    <div className="text-center px-[25px]">
      <div className="w-[1px] h-[80px] mx-auto bg-brown" />
      <div className="my-12">
        <h2 className="font-tangerine text-6xl mb-4 text-brown">{title}</h2>
        <p className="font-fira font-light text-md md:text-lg text-sage max-w-[250px] mx-auto md:max-w-max">
          {subtitle}
        </p>
        <div className="w-[40px] h-[1px] mx-auto bg-brown mt-4" />
        <p className="max-w-2xl mx-auto text-offBlack my-8 font-light leading-7">
          {description}
        </p>
        <Link href="/about">
          <a className="font-fira font-light tracking-wide inline-block bg-sage py-3 px-8 text-offWhite border border-sage transition-all hover:bg-transparent hover:text-sage">
            Discover More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
