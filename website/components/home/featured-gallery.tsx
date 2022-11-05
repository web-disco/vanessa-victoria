import Link from "next/link";

import { urlFor } from "../../utils/image-helper";

const FeaturedGallery = ({ gallery }: any) => {
  const imageBlock = gallery.imageBlocks[0];
  const image1 = imageBlock.image1;
  const image2 = imageBlock.image2;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 container mb-10">
      <div className="col-span-1">
        <div className="mb-8 md:mb-0 md:h-[200px]">
          <h3 className="font-tangerine text-4xl text-brown mb-2">
            {gallery.title}
          </h3>
          <Link href={`/galleries/${gallery.slug.current}`}>
            <a
              className="font-fira font-light tracking-wide inline-block bg-sage py-3 px-8 mt-8 text-offWhite border border-sage transition-all hover:bg-transparent hover:text-sage"
              title="View Gallery"
            >
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
          }}
          className="h-[300px] sm:h-[350px] mb-8 md:h-[400px]"
        />
      </div>
      <div className="col-span-1">
        <div
          style={{
            backgroundImage: `url(${urlFor(image2).url()})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
          className="h-[300px] sm:h-[350px] md:h-[600px]"
        />
      </div>
    </div>
  );
};

export default FeaturedGallery;
