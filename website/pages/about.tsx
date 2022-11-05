import type { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import slufify from "slugify";

import client from "../client";

import { AboutPageProps } from "../interfaces/AboutPageProps";
import { aboutPageQuery } from "../utils/queries";

const PageBanner = dynamic(() => import("../components/global/page-banner"));
const TextBlockWithImage = dynamic(
  () => import("../components/global/text-block-with-image")
);
const CallToAction = dynamic(
  () => import("../components/global/call-to-action")
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
        linkText="Lets Connect!"
        imgPosition="left"
        id={vanessaId}
      />
      {/* <CallToAction link="/contact" linkText="Let's Connect!" /> */}
    </>
  );
};

export default About;

export const getServerSideProps: GetServerSideProps = async () => {
  const page = await client.fetch(aboutPageQuery);

  return {
    props: {
      page,
    },
  };
};
