import { useState } from "react";
import Img from "next/future/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

import { urlFor } from "../../utils/image-helper";

import { TextBlockWithImageProps } from "../../interfaces/TextBlockWithImageProps";

const TextBlockWithImage = ({
  title,
  description,
  image,
  link,
  linkText,
  imgPosition,
  id,
}: TextBlockWithImageProps) => {
  const textLength = 360;
  const [showLess, setShowLess] = useState(true);
  if (imgPosition === "left") {
    return (
      <div
        className="container lg:text-left flex flex-col lg:flex-row justify-between h-full my-40 lg:space-x-20"
        id={id}
      >
        <div>
          <Img
            src={urlFor(image).width(1000).height(1000).url()}
            alt={image.alt || ""}
            width="1000"
            height="1000"
            className="mb-8 lg:mb-0"
          />
        </div>
        <div className="w-full">
          <h2 className="font-tangerine text-5xl lg:text-4xl mb-4 text-brown">
            {title}
          </h2>
          <div className="font-fira font-light leading-7 prose">
            <PortableText value={description} />
          </div>
          {link && linkText && (
            <Link href={link}>
              <a className="mt-8 font-fira font-light tracking-wide inline-block bg-sage rounded-md py-3 px-8 text-offWhite border border-sage transition-all hover:bg-transparent hover:text-sage">
                {linkText}
              </a>
            </Link>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="container lg:text-left flex flex-col-reverse lg:flex-row justify-between h-full my-40 lg:space-x-20"
        id={id}
      >
        <div className="w-full">
          <h2 className="font-tangerine text-5xl lg:text-4xl mb-4 text-brown">
            {title}
          </h2>
          <div className="font-fira font-light leading-7 prose">
            <PortableText value={description} />
          </div>
          {link && linkText && (
            <Link href={link}>
              <a className="mt-8 font-fira font-light tracking-wide inline-block bg-sage rounded-md py-3 px-8 text-offWhite border border-sage transition-all hover:bg-transparent hover:text-sage">
                {linkText}
              </a>
            </Link>
          )}
        </div>
        <div>
          {" "}
          <Img
            src={urlFor(image).width(1000).height(1000).url()}
            alt={image.alt || ""}
            width="1000"
            height="1000"
            className="mb-8 lg:mb-0"
          />
        </div>
      </div>
    );
  }
  return <></>;
};

export default TextBlockWithImage;
