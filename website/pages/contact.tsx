import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Image from "next/future/image";
import { PortableText } from "@portabletext/react";

import client from "../client";
import { contactPageQuery } from "../utils/queries";

import { ContactPageProps } from "../interfaces/ContactPageProps";
import { urlFor } from "../utils/image-helper";

const PageBanner = dynamic(() => import("../components/global/page-banner"));
const ContactForm = dynamic(() => import("../components/contact/contact-form"));

const Contact = ({ page }: ContactPageProps) => {
  return (
    <>
      <PageBanner type="Contact Us" />
      <div className="max-w-[800px] mx-auto my-20 px-[25px]">
        <div className="text-center my-20 leading-[28px] font-fira font-light">
          <PortableText value={page.blurb} />
        </div>
        <div className="mb-20 font-fira font-light">
          <ContactForm />
        </div>
        <Image
          src={urlFor(page.image).width(800).height(400).quality(100).url()}
          alt="Contact Us"
          width={800}
          height={400}
          className="mb-20"
        />
      </div>
    </>
  );
};

export default Contact;

export const getServerSideProps: GetServerSideProps = async () => {
  const page = await client.fetch(contactPageQuery);

  return {
    props: {
      page,
    },
  };
};
