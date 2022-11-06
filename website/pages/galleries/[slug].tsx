import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";

import { urlFor } from "../../utils/image-helper";

import client from "../../client";

const PageBanner = dynamic(() => import("../../components/global/page-banner"));

const SingleGallery = ({ gallery }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState("");
  const [images, setImages] = useState<any>([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const images = [] as any;
    gallery.imageBlocks.forEach((block: any) => {
      if (block.image1) {
        images.push(urlFor(block.image1).url());
      }
      if (block.image2) {
        images.push(urlFor(block.image2).url());
      }
      if (block.image3) {
        images.push(urlFor(block.image3).url());
      }
      if (block.image4) {
        images.push(urlFor(block.image4).url());
      }
      setImages(images);
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const renderImageBlock = (block: any) => {
    const setSrcAndOpen = (src: string) => {
      setSrc(src);
      setIsOpen(true);
      const index = images.findIndex((image: string) => image === src);
      setPhotoIndex(index);
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
            renderImageBlock(block)
          )}
        </div>
        {gallery.credits && (
          <p className="mb-8 font-light italic text-center">
            Credits: {gallery.credits}
          </p>
        )}
        {isOpen && (
          <div
            className="fixed w-full h-screen inset-0 flex justify-center items-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.88)",
            }}
          >
            <button
              className="absolute top-4 right-7"
              onClick={() => setIsOpen(false)}
            >
              <VscChromeClose className="text-white text-2xl" />
            </button>
            <div className="flex items-center text-white">
              {photoIndex > 0 && (
                <button
                  className="mr-8 text-2xl"
                  onClick={() => {
                    setPhotoIndex(photoIndex - 1);
                  }}
                >
                  <BsChevronLeft />
                </button>
              )}
              <div>
                <img
                  src={images[photoIndex]}
                  width="600"
                  height="600"
                  alt="Lightbot Image"
                />
                <p className="text-center mt-2 font-fira font-light">
                  {photoIndex + 1} / {images.length}
                </p>
              </div>
              <button
                className="ml-8 text-2xl"
                onClick={() => {
                  if (photoIndex === images.length - 1) {
                    setPhotoIndex(0);
                    console.log("done");
                  } else {
                    setPhotoIndex(photoIndex + 1);
                  }
                }}
              >
                <BsChevronRight />
              </button>
            </div>
          </div>
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
