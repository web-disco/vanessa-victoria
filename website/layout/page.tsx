import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useCookies } from "react-cookie";

import { LayoutProps } from "../interfaces/LayoutProps";

const Nav = dynamic(() => import("../components/global/nav"));
const Loader = dynamic(() => import("../components/loader"));

const Layout = ({ children }: LayoutProps) => {
  const [cookies, setCookie] = useCookies(["visited"]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (cookies.visited) {
  //     setLoading(false);
  //   }
  // }, [cookies]);

  // if (loading || !cookies.visited) {
  //   return (
  //     <Loader
  //       cookie={cookies.visited}
  //       setCookie={setCookie}
  //       setLoading={setLoading}
  //     />
  //   );
  // }

  return (
    <>
      <Nav />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
