import type { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import Script from "next/script";
import { LayoutGroup } from "framer-motion";
import dynamic from "next/dynamic";
import { CookiesProvider } from "react-cookie";
import { ReactNode } from "react";

import "../styles/globals.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Page = dynamic(() => import("../layout/page"));

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout =
    Component.getLayout || ((page: ReactNode) => <Page>{page}</Page>);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
          `}
      </Script>
      <LayoutGroup>
        <CookiesProvider>
          {getLayout(<Component {...pageProps} />)}
        </CookiesProvider>
      </LayoutGroup>
    </>
  );
};

export default MyApp;
