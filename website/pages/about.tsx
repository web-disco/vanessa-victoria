import type { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import slufify from "slugify";

import client from "../client";
import CallToAction from "../components/call-to-action";

import { AboutPageFetchProps } from "../interfaces/AboutPageFetchProps";
import { AboutPageProps } from "../interfaces/AboutPageProps";
import { aboutPageQuery } from "../utils/aboutPageQuery";

const PageBanner = dynamic(() => import("../components/global/page-banner"));
const TextBlockWithImage = dynamic(
  () => import("../components/global/text-block-with-image")
);

const About = ({ page }: AboutPageProps) => {
  const {
    companyTitle,
    companyDescription,
    companyImage,
    vanessaTitle,
    vanessaDescription,
    vanessaImage,
  } = page;

  const companyId = slufify(companyTitle, { lower: true });
  const vanessaId = slufify(vanessaTitle, { lower: true });

  return (
    <>
      <PageBanner type={page._type} />
      <TextBlockWithImage
        title={companyTitle}
        description={companyDescription}
        image={companyImage}
        link="/galleries"
        linkText="View Events"
        imgPosition="right"
        id={companyId}
      />
      <TextBlockWithImage
        title={vanessaTitle}
        description={vanessaDescription}
        image={vanessaImage}
        link="/contact"
        linkText="Contact Us"
        imgPosition="left"
        id={vanessaId}
      />
      <CallToAction
        title="Let's create the most memorable event together."
        link="/contact"
        linkText="Connect"
      />
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const page = await client.fetch(aboutPageQuery);

  return {
    props: {
      page,
    },
    revalidate: 10,
  };
};
