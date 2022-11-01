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
      <div className="flex justify-between py-10 font-light">
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
            {servicesLinks &&
              servicesLinks.map((link: any) => (
                <li className="hover:text-brown transition-all" key={link.key}>
                  <Link href={`/services#${link.slug.current}`}>
                    <a title={link.title}>{link.serviceTitle}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="hidden sm:block">
          <ul className="font-fia flex space-x-4 text-[20px]">
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
        </div>
      </div>
      <div className="sm:flex text-center sm:text-left justify-between text-[12px] mb-5">
        <p className="mb-4 sm:mb-0">
          © {year} Copyright Vanessa Victoria Weddings & Events.
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
