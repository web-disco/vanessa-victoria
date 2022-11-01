import type { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

import client from "../client";

import { HomePageProps } from "../interfaces/HomePageProps";
import { homePageQuery } from "../utils/queries";

const Slider = dynamic(() => import("../components/home/slider"));
const Intro = dynamic(() => import("../components/home/intro"));
const Quote = dynamic(() => import("../components/home/quote"));
const Testimonials = dynamic(() => import("../components/home/testimonials"));
const FeaturedGallery = dynamic(
  () => import("../components/home/featured-gallery")
);

const Home = ({ page }: HomePageProps) => {
  const {
    slider,
    title,
    subtitle,
    description,
    quote,
    quoteImage,
    testimonialsTitle,
    testimonials,
    featuredGallery,
  } = page;

  return (
    <>
      <Slider slider={slider} />
      <Intro title={title} subtitle={subtitle} description={description} />
      <Quote quote={quote} quoteImage={quoteImage} />
      <Testimonials
        testimonialsTitle={testimonialsTitle}
        testimonials={testimonials}
      />
      <FeaturedGallery gallery={featuredGallery} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const page = await client.fetch(homePageQuery);

  const featuredGallery = await client.fetch(
    `*[_type == "galleries" && _id == $ref] {
    ...
    }`,
    { ref: page.featuredGallery?._ref }
  );

  page.featuredGallery = featuredGallery[0];

  return {
    props: {
      page,
    },
  };
};
