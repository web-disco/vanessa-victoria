import { useState, useEffect } from "react";
import Img from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { BsPinterest, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import client from "../../client";
import { websiteSettingsQuery } from "../../utils/websiteSettingsQuery";

import { WebsiteSettingsProps } from "../../interfaces/WebsiteSettingsProps";
import { servicesQuery } from "../../utils/servicesQuery";

const Nav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [websiteSettings, setWebsiteSettings] =
    useState<WebsiteSettingsProps>();
  const [serviceLinks, setServicesLinks] = useState([]);

  console.log(serviceLinks);

  const [links, setLinks] = useState([
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Gallery",
      link: "/galleries",
    },
    {
      text: "Contact",
      link: "/contact",
    },
    {
      text: "Services",
      link: "/services",
    },
  ]);

  const serviceLink = links.filter((l) => l.text === "Services")[0];

  useEffect(() => {
    const body = document.querySelector("body") as HTMLElement;
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        body.style.overflow = "auto";
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    const init = async () => {
      const websiteSettingsData = await client.fetch(websiteSettingsQuery);
      const serviceLinks = await client.fetch(servicesQuery);
      setWebsiteSettings(websiteSettingsData);
      setServicesLinks(serviceLinks);
    };
    init();
  }, []);

  useEffect(() => {
    const nav = document.querySelector("nav") as HTMLElement;
    window.addEventListener("scroll", (e: any) => {
      if (scrollY > 500) {
        nav.classList.add("sticky-nav");
      } else {
        nav.classList.remove("sticky-nav");
      }
    });
  }, []);

  return (
    <AnimatePresence initial={false} mode="wait">
      <nav className="fixed w-full z-20 text-brown px-[25px] py-4">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <a title="Home">
              <div className="max-w-[140px] md:max-w-[180px]">
                <Img
                  src="/assets/logo.svg"
                  width="180"
                  height="150"
                  alt="Vanessa Victoria"
                />
              </div>
            </a>
          </Link>
          <div className="flex items-center">
            <Link href="/contact">
              <a className="hidden md:inline-block font-fira font-light tracking-wide bg-brown rounded-md py-2 px-4 text-offWhite border border-brown transition-all hover:bg-transparent hover:border-brown hover:text-brown">
                Contact Us
              </a>
            </Link>
            <button onClick={() => setIsOpen(true)}>
              <AiOutlineMenu className="text-3xl ml-4 text-brown" />
            </button>
          </div>
        </div>
      </nav>

      <motion.div
        key="nav-bg"
        className="fixed inset-0 bg-menuBrown z-30"
        initial={{
          width: 0,
        }}
        animate={{
          width: isOpen ? "100%" : 0,
        }}
        exit={{
          width: 0,
        }}
        transition={{ duration: 0.5, delay: isOpen ? 0 : 0.5 }}
      >
        <motion.div
          key="test"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: isOpen ? 0.5 : 0 }}
          className="w-full h-full grid grid-cols-2 grid-rows-6"
        >
          <div className="bg-menuBrown col-span-2 lg:col-span-1 row-span-6 flex flex-col justify-center">
            <div className="absolute right-4 top-4 z-[1]">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-brown lg:hidden text-sage p-2 rounded-full text-xl"
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="flex items-start justify-center space-x-8 px-4 sm:px-8">
              <motion.ul key="nav" className="">
                {links
                  .filter((l) => l.text !== "Services")
                  .map((link, i) => (
                    <motion.li
                      key={`nav-link-${i}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isOpen ? 1 : 0 }}
                      exit={{ opacity: 1 }}
                      transition={{ delay: isOpen ? 1 + i * 0.1 : 0 }}
                    >
                      <button
                        className="text-2xl sm:text-6xl font-fira font-bold tracking-wider text-offWhite mb-6  sm:mb-14 hover:text-brown transition-all"
                        onClick={() => {
                          router.push(link.link);
                          setIsOpen(false);
                        }}
                      >
                        {link.text}
                      </button>
                    </motion.li>
                  ))}
              </motion.ul>
              <motion.div
                key="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                exit={{ opacity: 1 }}
                transition={{ delay: isOpen ? 1 + 0.3 : 0 }}
              >
                <button className="text-2xl sm:text-6xl font-fira font-bold tracking-wider text-offWhite mb-6 hover:text-brown transition-all">
                  {serviceLink.text}
                </button>
                {serviceLinks.map((link: any, i) => (
                  <button
                    key={link._id}
                    className="text-sm block font-fira font-light tracking-wider text-offWhite mb-2 hover:text-brown transition-all"
                    onClick={() => {
                      router.push(`/services#${link.slug.current}`);
                      setIsOpen(false);
                    }}
                  >
                    {link.serviceTitle}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="hidden lg:block col-span-1 row-span-5 relative">
            <div
              style={{
                backgroundImage: `url(/assets/nav-img.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <div className="absolute right-4 top-4 z-[1]">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-brown text-sage p-2 rounded-full text-xl"
                >
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex col-span-1 row-span-1 bg-sage items-center justify-center space-x-20 text-4xl text-offWhite">
            {websiteSettings?.pinterest && (
              <div className="hover:text-brown transition-all">
                <Link
                  href={websiteSettings.pinterest}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <a title="Pinterest">
                    <BsPinterest />
                  </a>
                </Link>
              </div>
            )}
            {websiteSettings?.instagram && (
              <div className="hover:text-brown transition-all">
                <Link
                  href={websiteSettings.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <a title="Instagram">
                    <BsInstagram />
                  </a>
                </Link>
              </div>
            )}
            {websiteSettings?.tiktok && (
              <div className="hover:text-brown transition-all">
                <Link
                  href={websiteSettings.tiktok}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <a title="TikTok">
                    <FaTiktok />
                  </a>
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Nav;
