'use client'

import "../styles/globals.css";
import { AnalyticsWrapper } from "./analytics";
import Navigation from "./Navigation";
import { SessionProvider } from 'next-auth/react'
export default function RootLayout({ children, ...props }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <SessionProvider session={props.session}>
          <header>
            <Navigation />
          </header>
          {children}
          <AnalyticsWrapper />
        </SessionProvider>
      </body>
    </html>
  );
}
