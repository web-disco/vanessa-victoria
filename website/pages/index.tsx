import type { GetStaticProps } from "next";
import dynamic from "next/dynamic";

import client from "../client";

import { HomePageFetchProps } from "../interfaces/HomePageFetchProps";
import { HomePageProps } from "../interfaces/HomePageProps";
import { homePageQuery } from "../utils/homePageQuery";

const Slider = dynamic(() => import("../components/home/slider"));
const Intro = dynamic(() => import("../components/home/intro"));

const Home = ({ page }: HomePageProps) => {
  console.log(page);

  const { slider, title, subtitle, description } = page;

  return (
    <>
      <Slider slider={slider} />
      <Intro title={title} subtitle={subtitle} description={description} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const page: HomePageFetchProps = await client.fetch(homePageQuery);
  return {
    props: {
      page,
    },
  };
};
