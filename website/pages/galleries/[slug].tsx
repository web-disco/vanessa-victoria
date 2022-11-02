import { useState } from "react";
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Image from "next/future/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import { urlFor } from "../../utils/image-helper";

import client from "../../client";

const PageBanner = dynamic(() => import("../../components/global/page-banner"));

const SingleGallery = ({ gallery }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState("");

  const renderImageBlock = (block: any, index: number) => {
    const setSrcAndOpen = (src: string) => {
      setSrc(src);
      setIsOpen(true);
    };
    switch (block._type) {
      case "twoImageGalleryBlock": {
        if (block.option === "horizontal")
          return (
            <>
              <div
                style={{
                  backgroundImage: `url(${urlFor(block.image1).url()})`,
                }}
                className="w-full col-span-2 h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] bg-cover bg-center cursor-pointer transition-all"
                onClick={() => setSrcAndOpen(urlFor(block.image1).url())}
              />
              <div
                style={{
                  backgroundImage: `url(${urlFor(block.image2).url()})`,
                }}
                className="w-full col-span-2 h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] bg-cover bg-center cursor-pointer transition-all"
                onClick={() => setSrcAndOpen(urlFor(block.image2).url())}
              />
            </>
          );
        else if (block.option === "vertical")
          return (
            <>
              <div
                style={{
                  backgroundImage: `url(${urlFor(block.image1).url()})`,
                }}
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] bg-cover bg-center cursor-pointer transition-all"
                onClick={() => setSrcAndOpen(urlFor(block.image1).url())}
              />
              <div
                style={{
                  backgroundImage: `url(${urlFor(block.image2).url()})`,
                }}
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] bg-cover bg-center cursor-pointer transition-all"
                onClick={() => setSrcAndOpen(urlFor(block.image2).url())}
              />
            </>
          );
      }
      case "threeImageGalleryBlock": {
        if (block.option === "left")
          return (
            <>
              <div className="col-span-1">
                <div
                  style={{
                    backgroundImage: `url(${urlFor(block.image1).url()})`,
                  }}
                  className="w-full h-[400px] lg:h-[700px] col-span-2 bg-cover bg-center cursor-pointer transition-all"
                  onClick={() => setSrcAndOpen(urlFor(block.image1).url())}
                />
              </div>
              <div className="col-span-1 grid grid-rows-6 gap-8">
                <div
                  className="col-span-1 row-span-3 bg-cover bg-center cursor-pointer"
                  style={{
                    backgroundImage: `url(${urlFor(block.image2).url()})`,
                  }}
                  onClick={() => setSrcAndOpen(urlFor(block.image2).url())}
                />
                <div
                  className="col-span-1 row-span-3 bg-cover bg-center cursor-pointer"
                  style={{
                    backgroundImage: `url(${urlFor(block.image3).url()})`,
                  }}
                  onClick={() => setSrcAndOpen(urlFor(block.image3).url())}
                />
              </div>
            </>
          );
        else if (block.option === "right") {
          return (
            <>
              <div className="col-span-1 grid grid-rows-6 gap-8">
                <div
                  className="col-span-1 row-span-3 bg-cover bg-center cursor-pointer"
                  style={{
                    backgroundImage: `url(${urlFor(block.image2).url()})`,
                  }}
                  onClick={() => setSrcAndOpen(urlFor(block.image2).url())}
                />
                <div
                  className="col-span-1 row-span-3 bg-cover bg-center cursor-pointer"
                  style={{
                    backgroundImage: `url(${urlFor(block.image3).url()})`,
                  }}
                  onClick={() => setSrcAndOpen(urlFor(block.image3).url())}
                />
              </div>
              <div className="col-span-1">
                <div
                  style={{
                    backgroundImage: `url(${urlFor(block.image1).url()})`,
                  }}
                  className="w-full h-[400px] lg:h-[700px] col-span-2 bg-cover bg-center cursor-pointer transition-all"
                  onClick={() => setSrcAndOpen(urlFor(block.image1).url())}
                />
              </div>
            </>
          );
        }
      }
      case "fourImageGalleryBlock": {
        return (
          <>
            <div
              style={{
                backgroundImage: `url(${urlFor(block.image1).url()})`,
              }}
              className="w-full h-[200px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center cursor-pointer transition-all"
              onClick={() => setSrcAndOpen(urlFor(block.image1).url())}
            />
            <div
              style={{
                backgroundImage: `url(${urlFor(block.image2).url()})`,
              }}
              className="w-full h-[200px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center cursor-pointer transition-all"
              onClick={() => setSrcAndOpen(urlFor(block.image2).url())}
            />
            <div
              style={{
                backgroundImage: `url(${urlFor(block.image3).url()})`,
              }}
              className="w-full h-[200px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center cursor-pointer transition-all"
              onClick={() => setSrcAndOpen(urlFor(block.image3).url())}
            />
            <div
              style={{
                backgroundImage: `url(${urlFor(block.image4).url()})`,
              }}
              className="w-full h-[200px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center cursor-pointer transition-all"
              onClick={() => setSrcAndOpen(urlFor(block.image4).url())}
            />
          </>
        );
      }
    }
  };
  return (
    <>
      <PageBanner type={gallery && gallery.title} />
      <div className="container">
        <div className="grid grid-cols-2 gap-4 lg:gap-8 my-8">
          {gallery?.imageBlocks?.map((block: any, index: number) =>
            renderImageBlock(block, index)
          )}
        </div>
        {gallery.credits && (
          <p className="mb-8 font-light italic text-center">
            Credits: {gallery.credits}
          </p>
        )}
        {isOpen && (
          <Lightbox mainSrc={src} onCloseRequest={() => setIsOpen(false)} />
        )}
      </div>
    </>
  );
};

export default SingleGallery;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const gallery = await client.fetch(
    `*[_type == "galleries" && slug.current == $ref][0]{
        ...
      }`,
    { ref: context.params?.slug }
  );
  return {
    props: {
      gallery,
    },
  };
};
