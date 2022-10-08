import type { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import { LayoutGroup } from "framer-motion";
import dynamic from "next/dynamic";
import { CookiesProvider } from "react-cookie";
import { ReactNode } from "react";

import "../styles/globals.css";

const Page = dynamic(() => import("../layout/page"));

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout =
    Component.getLayout || ((page: ReactNode) => <Page>{page}</Page>);
  return (
    <LayoutGroup>
      <CookiesProvider>
        {getLayout(<Component {...pageProps} />)}
      </CookiesProvider>
    </LayoutGroup>
  );
};

export default MyApp;
