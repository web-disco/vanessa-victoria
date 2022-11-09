import dynamic from "next/dynamic";
import type { GetServerSideProps } from "next";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

import client from "../client";
import { servicesQuery } from "../utils/queries";
import { ServicesProps } from "../interfaces/ServicesProps";

const PageBanner = dynamic(() => import("../components/global/page-banner"));
const TextBlockWithImage = dynamic(
  () => import("../components/global/text-block-with-image")
);

const Services = ({ services }: ServicesProps) => {
  return (
    <>
      <DefaultSeo
        title="Services | Vanessa Victoria Wedding & Events"
        {...SEO}
      />
      <PageBanner type="services" />
      {services.map((service, index) => {
        let position: string;
        if (index % 2 === 0) {
          position = "left";
        } else {
          position = "right";
        }
        return (
          <TextBlockWithImage
            title={service.serviceTitle}
            image={service.serviceImage}
            description={service.serviceDescription}
            imgPosition={position}
            id={service.slug.current}
            key={service._id}
          />
        );
      })}
    </>
  );
};

export default Services;

export const getServerSideProps: GetServerSideProps = async () => {
  const services = await client.fetch(servicesQuery);

  return {
    props: {
      services,
    },
  };
};
