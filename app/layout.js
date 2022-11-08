import "../styles/globals.css";
import Navigation from "../components/navigation";
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <title>Pokedex</title>
      </head>
      <body>
        <header>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
