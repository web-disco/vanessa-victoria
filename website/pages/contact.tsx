import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Image from "next/future/image";
import { PortableText } from "@portabletext/react";

import client from "../client";
import { contactPageQuery } from "../utils/queries";

import { urlFor } from "../utils/image-helper";

const PageBanner = dynamic(() => import("../components/global/page-banner"));
const ContactForm = dynamic(() => import("../components/contact/contact-form"));

const Contact = () => {
  const router = useRouter();

  const [contactPage, setContactPage] = useState<any>();

  useEffect(() => {
    const init = async () => {
      const data = await client.fetch(contactPageQuery);
      setContactPage(data);
    };
    init();
  }, []);

  const success = router.query.success === "true";

  return (
    <>
      <PageBanner type="Contact Us" />
      <div className="max-w-[800px] mx-auto my-20 px-[25px]">
        {contactPage && (
          <>
            <Image
              src={urlFor(contactPage.image)
                .width(800)
                .height(400)
                .quality(100)
                .url()}
              alt="Contact Us"
              width={800}
              height={400}
              className="mb-10"
            />
            <div className="text-center mt-10 mb-20 leading-[28px] font-fira font-light">
              <PortableText value={contactPage.blurb} />
            </div>
          </>
        )}
        <div className="mb-20 font-fira font-light">
          {!success ? (
            <ContactForm />
          ) : (
            <div className="text-center">
              <h3 className="font-tangerine text-4xl text-brown mb-2">
                Thank You
              </h3>
              <p>We will get back to you within 48 hours.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
