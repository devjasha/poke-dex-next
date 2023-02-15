"use client";

import "../styles/globals.css";
import { AnalyticsWrapper } from "./analytics";
import Navigation from "./Navigation";
import { useRouter } from "next/router";
import Script from "next/script";
import * as gtag from "./config/gtag";

export default function RootLayout({ children, ...props }) {
  const router = useRouter();

  useEffect(() => {
    // function to get the current page url and pass it to gtag pageView() function
    const handleRouteChange = (url) => {
      gtag.pageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname
          });`,
        }}
      />
      <html>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Explore the world of Pokemon with the new Pokedex"
          />
          <meta
            name="keywords"
            content="Pokedex, Pokemon, pokewiki, pokemon, pokedex, Pokewiki"
          />
          <meta name="robots" content="max-image-preview:[large]" />
          <meta property="og:image" content="/images/pokedex-preview.png" />
          <title>Pokedex</title>
        </head>
        <body>
          <header>
            <Navigation />
          </header>
          {children}
          <AnalyticsWrapper />
        </body>
      </html>
    </>
  );
}
