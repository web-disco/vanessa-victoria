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
    <div className="container flex justify-between h-full items-center my-40">
      <div className="max-w-sm">
        <div className="font-light italic leading-7">
          <PortableText value={quote} />
        </div>
        <Link href="/about">
          <a className="inline-block bg-sage rounded-md py-3 px-8 mt-8 text-offWhite border border-sage transition-all hover:bg-transparent hover:text-sage">
            Meet Vanessa
          </a>
        </Link>
      </div>
      <div>
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
