import { GetServerSideProps, NextPage } from "next";
import Image from "next/future/image";
import Link from "next/link";

import client from "../../client";

import { GalleriesPageProps } from "../../interfaces/GalleriesPageProps";
import { urlFor } from "../../utils/image-helper";
import { getVideo } from "../../utils/getVideo";

const Galleries: NextPage<GalleriesPageProps> = ({ galleries, gallery }) => {
  return (
    <div>
      <div className="h-screen w-full">
        <video
          src={getVideo(gallery.video.asset._ref)}
          autoPlay
          loop
          muted
          className="w-full h-full inset-0 object-cover"
        />
      </div>
      <div className="container grid md:grid-cols-2 gap-8 my-8">
        {galleries.map((gallery) => (
          <div className="relative group" key={gallery._id}>
            <Image
              src={urlFor(gallery.featuredImage).width(1000).height(1000).url()}
              alt={gallery.title}
              width={1000}
              height={1000}
            />
            <Link href={`/galleries/${gallery.slug.current}`}>
              <a title={gallery.title}>
                <div className="cursor-pointer absolute w-full h-full bg-brown inset-0 bg-transparent group-hover:bg-sage z-10 transition-all flex justify-center items-center">
                  <p className="opacity-0 group-hover:opacity-100 transition-all text-white font-tangerine text-5xl">
                    {gallery.title}
                  </p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galleries;

export const getServerSideProps: GetServerSideProps = async () => {
  const galleries = await client.fetch(`*[_type == "galleries"]`);
  const gallery = await client.fetch(`*[_type == "gallery"][0]`);

  return {
    props: {
      galleries,
      gallery,
    },
  };
};
