import { PortableText } from "@portabletext/react";
import Img from "next/future/image";
import Link from "next/link";

import { Image } from "../../interfaces/Image";
import { PortableTextProps } from "../../interfaces/PortableTextProps";
import { urlFor } from "../../utils/image-helper";

interface QuoteProps {
  quote: PortableTextProps;
  quoteImage: Image;
}

const Quote = ({ quote, quoteImage }: QuoteProps) => {
  return (
    <div className="container text-center lg:text-left flex flex-col-reverse lg:flex-row justify-between h-full items-center mb-20 lg:space-x-8">
      <div className="max-w-4xl lg:max-w-lg">
        <div className="font-light italic leading-7">
          <PortableText value={quote} />
        </div>
        <div className="lg:text-center">
          <Link href="/about#meet-vanessa">
            <a className="font-fira font-light tracking-wide inline-block bg-sage py-3 px-8 mt-8 text-offWhite border border-sage transition-all hover:bg-transparent hover:text-sage">
              Meet Vanessa
            </a>
          </Link>
        </div>
      </div>
      <div className="mb-8">
        <Img
          src={urlFor(quoteImage).url()}
          alt={quoteImage.alt || ""}
          width="500"
          height="700"
        />
      </div>
    </div>
  );
};

export default Quote;
