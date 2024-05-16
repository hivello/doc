import { useConfig } from "nextra-theme-docs";

export function Head() {
  const { title } = useConfig();
  return (
    <>
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="theme-color" content="#fff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Welcome to Hivello App ! This is Hivello Documentation"
      />
      <meta
        name="og:description"
        content="Welcome to Hivello App ! This is Hivello Documentation"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/hivello-dark.svg" />
      <meta name="twitter:site:domain" content="Hivello" />
      <meta name="twitter:url" content="https://hivello.com/" />
      <meta
        name="og:title"
        content={title ? title + " – Hivello" : "Hivello"}
      />
      <meta name="og:image" content="/hivello-dark.svg" />
      <meta name="apple-mobile-web-app-title" content="Hivello" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.png" type="image/png" />
      <link
        rel="icon"
        href="/favicon.svg"
        type="image/svg+xml"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        href="/favicon.png"
        type="image/png"
        media="(prefers-color-scheme: dark)"
      />
    </>
  );
}
