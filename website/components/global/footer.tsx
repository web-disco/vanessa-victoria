import Image from "next/future/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsInstagram, BsPinterest } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

import client from "../../client";
import { WebsiteSettingsProps } from "../../interfaces/WebsiteSettingsProps";
import { servicesQuery, websiteSettingsQuery } from "../../utils/queries";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const [servicesLinks, setServicesLinks] = useState([]);
  const [websiteSettings, setWebsiteSettings] =
    useState<WebsiteSettingsProps>();
  useEffect(() => {
    const init = async () => {
      const serviceLinks = await client.fetch(servicesQuery);
      const websiteSettingsData = await client.fetch(websiteSettingsQuery);
      setServicesLinks(serviceLinks);
      setWebsiteSettings(websiteSettingsData);
    };
    init();
  }, []);

  return (
    <footer className="container border-t border-sage">
      <div className="flex justify-between py-10 font-light sm:min-h-[220px]">
        <div>
          <ul className="font-fia text-[14px] space-y-2">
            <li className="hover:text-brown transition-all">
              <Link href="/">
                <a title="Home">Home</a>
              </Link>
            </li>
            <li className="hover:text-brown transition-all">
              <Link href="/about">
                <a title="About">About</a>
              </Link>
            </li>
            <li className="hover:text-brown transition-all">
              <Link href="/galleries">
                <a title="Galleries">Galleries</a>
              </Link>
            </li>
            <li className="hover:text-brown transition-all">
              <Link href="/contact">
                <a title="Contact">Contact</a>
              </Link>
            </li>
            <li className="block sm:hidden mb-8">
              <ul className="font-fia flex justify-center space-x-4 text-[18px]">
                {websiteSettings?.instagram && (
                  <li className="text-black hover:text-brown transition-all">
                    <Link href={websiteSettings.instagram}>
                      <a
                        title="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsInstagram />
                      </a>
                    </Link>
                  </li>
                )}
                {websiteSettings?.tiktok && (
                  <li className="text-black hover:text-brown transition-all">
                    <Link href={websiteSettings.tiktok}>
                      <a
                        title="Tik Tok"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTiktok />
                      </a>
                    </Link>
                  </li>
                )}
                {websiteSettings?.pinterest && (
                  <li className="text-black hover:text-brown transition-all">
                    <Link href={websiteSettings.pinterest}>
                      <a
                        title="Pinterest"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsPinterest />
                      </a>
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul
            className="font-fia text-[14px] grid sm:grid-cols-2 gap-2"
            style={{
              columnGap: "2rem",
            }}
          >
            {/* {servicesLinks.length &&
              servicesLinks.map((link: any) => (
                <li className="hover:text-brown transition-all" key={link._id}>
                  <Link href={`/services#${link.slug.current}`}>
                    <a title={link.title}>{link.serviceTitle}</a>
                  </Link>
                </li>
              ))} */}
            <li className="hover:text-brown transition-all">
              <Link href={`/services#full-service-wedding-planning`}>
                <a>Full-Service Wedding Planning</a>
              </Link>
            </li>
            <li className="hover:text-brown transition-all">
              <Link href={`/services#day-of-coordination`}>
                <a>Day-Of-Coordination</a>
              </Link>
            </li>
            <li className="hover:text-brown transition-all">
              <Link href={`/services#wedding-and-event-design`}>
                <a>Wedding & Event Design</a>
              </Link>
            </li>
            <li className="hover:text-brown transition-all">
              <Link href={`/services#event-consulting`}>
                <a>Event Consulting</a>
              </Link>
            </li>
            <li className="hover:text-brown transition-all">
              <Link href={`/services#additional-events`}>
                <a>Additional Events</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex flex-col">
          <ul className="font-fia flex space-x-4 text-[20px] justify-end">
            {websiteSettings?.instagram && (
              <li className="text-black hover:text-brown transition-all">
                <Link href={websiteSettings.instagram}>
                  <a
                    title="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsInstagram />
                  </a>
                </Link>
              </li>
            )}
            {websiteSettings?.tiktok && (
              <li className="text-black hover:text-brown transition-all">
                <Link href={websiteSettings.tiktok}>
                  <a title="Tik Tok" target="_blank" rel="noopener noreferrer">
                    <FaTiktok />
                  </a>
                </Link>
              </li>
            )}
            {websiteSettings?.pinterest && (
              <li className="text-black hover:text-brown transition-all">
                <Link href={websiteSettings.pinterest}>
                  <a
                    title="Pinterest"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsPinterest />
                  </a>
                </Link>
              </li>
            )}
          </ul>
          <div className="flex space-x-5">
            <a
              href="https://wedluxe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-6"
            >
              <Image
                src="/assets/wed-lux.png"
                width={90}
                height={90}
                alt="Wed Lux"
              />
            </a>
            <a
              href="https://wpic.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-6"
            >
              <Image
                src="/assets/footer-pin.png"
                width={90}
                height={90}
                alt="WPIOC"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden justify-center space-x-5 text-center pb-10">
        <a
          href="https://wedluxe.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/wed-lux.png"
            width={100}
            height={100}
            alt="WED LUX"
            className="mx-auto"
          />
        </a>
        <a href="https://wpic.ca/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/footer-pin.png"
            width={100}
            height={100}
            alt="WPIOC"
            className="mx-auto"
          />
        </a>
      </div>
      <div className="sm:flex text-center sm:text-left justify-between text-[12px] mb-5">
        <p className="mb-4 sm:mb-0">
          ?? {year} Copyright Vanessa Victoria Weddings & Events Inc.
        </p>
        <p>
          Website by{" "}
          <Link
            href="https://www.webdisco.digital"
            title="Web Disco"
            rel="noopener noreferrer"
          >
            <a
              title="Web Disco"
              target="_blank"
              className="hover:text-brown transition-all"
            >
              Web Disco
            </a>
          </Link>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
