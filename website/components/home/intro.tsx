import Link from "next/link";

import { IntroProps } from "../../interfaces/IntroProps";

const Intro = ({ title, subtitle, description }: IntroProps) => {
  return (
    <div className="text-center">
      <div className="w-[1px] h-[80px] mx-auto bg-brown" />
      <div className="my-12">
        <h2 className="font-tangerine text-6xl mb-4 text-brown">{title}</h2>
        <p className="font-fira font-light text-lg text-sage">{subtitle}</p>
        <div className="w-[40px] h-[1px] mx-auto bg-brown mt-4" />
        <p className="max-w-2xl mx-auto text-offBlack my-8 font-light leading-7">
          {description}
        </p>
        <Link href="/about">
          <a className="inline-block bg-sage rounded-md py-3 px-8 text-offWhite border border-sage transition-all hover:bg-transparent hover:text-sage">
            Discover More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
