import Link from "next/link";

import { urlFor } from "../../utils/image-helper";

const FeaturedGallery = ({ gallery }: any) => {
  const imageBlock = gallery.imageBlocks[0];
  const image1 = imageBlock.image1;
  const image2 = imageBlock.image2;
  return (
    <div className="container grid grid-cols-2 grid-rows-4 gap-10 min-h-[600px] my-40">
      <div className="col-span-1 row-span-1">
        <h3 className="font-tangerine text-4xl text-brown mb-2">
          {gallery.title}
        </h3>
        <Link href={`/galleries/${gallery.slug.current}`}>
          <a className="inline-block bg-sage rounded-md py-3 px-8 mt-8 text-offWhite border border-sage transition-all hover:bg-transparent hover:text-sage">
            View Gallery
          </a>
        </Link>
      </div>
      <div
        style={{
          backgroundImage: `url(${urlFor(image1).url()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
        className="col-span-1 row-span-4"
      />
      <div
        style={{
          backgroundImage: `url(${urlFor(image2).url()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
        className="col-span-1 row-span-3"
      />
    </div>
  );
};

export default FeaturedGallery;
