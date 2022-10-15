import { useState, useEffect } from "react";
import Img from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { BsPinterest, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import client from "../../client";
import { websiteSettingsQuery } from "../../utils/websiteSettingsQuery";

import { WebsiteSettingsProps } from "../../interfaces/WebsiteSettingsProps";

const Nav = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [websiteSettings, setWebsiteSettings] =
    useState<WebsiteSettingsProps>();
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

  useEffect(() => {
    const body = document.querySelector("body") as HTMLElement;
    if (showMenu) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [showMenu]);

  useEffect(() => {
    const init = async () => {
      const data: WebsiteSettingsProps = await client.fetch(
        websiteSettingsQuery
      );
      setWebsiteSettings(data);
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
              <Img
                src="/assets/logo.svg"
                width="180"
                height="150"
                alt="Vanessa Victoria"
              />
            </a>
          </Link>
          <div className="flex items-center">
            <Link href="/contact">
              <a className="font-fira font-light tracking-wide inline-block bg-brown rounded-md py-2 px-4 text-offWhite border border-brown transition-all">
                Contact Us
              </a>
            </Link>
            <button onClick={() => setShowMenu(true)}>
              <AiOutlineMenu className="text-3xl ml-4 text-brown" />
            </button>
          </div>
        </div>
      </nav>

      <motion.div
        key="nav-bg"
        className="fixed w-full h-screen z-30 grid grid-cols-2 grid-rows-6"
        initial={{
          x: 0,
        }}
        animate={{
          x: showMenu ? 0 : 2500,
        }}
        exit={{
          x: 0,
        }}
        transition={{ duration: 1.3 }}
      >
        <div className="bg-menuBrown col-span-1 row-span-6 flex flex-col justify-center">
          <div className="flex items-start">
            <motion.ul
              key="nav"
              className=""
              style={{
                columns: 2,
              }}
            >
              {links.map((link, i) => (
                <motion.li
                  key={`nav-link-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showMenu ? 1 : 0 }}
                  exit={{ opacity: 1 }}
                  transition={{ delay: showMenu ? 1 + i * 0.1 : 0 }}
                >
                  <button
                    className="text-6xl font-fira font-bold tracking-wider text-offWhite mb-14 hover:text-brown transition-all"
                    onClick={() => {
                      router.push(link.link);
                      setShowMenu(false);
                    }}
                  >
                    {link.text}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
        <div className="col-span-1 row-span-5">
          <div
            style={{
              backgroundImage: `url(/assets/nav-img.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="absolute right-4 top-4">
              <button onClick={() => setShowMenu(false)}>close</button>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-sage flex items-center justify-center space-x-20 text-4xl text-offWhite">
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
    </AnimatePresence>
  );
};

export default Nav;
