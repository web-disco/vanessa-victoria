import dynamic from "next/dynamic";
import type { GetServerSideProps } from "next";

import client from "../client";
import { servicesQuery } from "../utils/servicesQuery";
import { ServicesProps } from "../interfaces/ServicesProps";
import TextBlockWithImage from "../components/global/text-block-with-image";

const PageBanner = dynamic(() => import("../components/global/page-banner"));

const Services = ({ services }: ServicesProps) => {
  console.log(services);
  return (
    <>
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
