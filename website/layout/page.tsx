import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import { LayoutProps } from "../interfaces/LayoutProps";

const Nav = dynamic(() => import("../components/global/nav"));
const Footer = dynamic(() => import("../components/global/footer"));
const Loader = dynamic(() => import("../components/loader"));

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
