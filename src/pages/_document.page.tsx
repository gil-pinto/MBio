import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://assets.oneweb.mercedes-benz.com" />
        <link
          href="https://assets.oneweb.mercedes-benz.com/plugin/workbench/core/7.70.0/css/globals.css"
          rel="stylesheet"
        />
        <link
          href="https://assets.oneweb.mercedes-benz.com/plugin/workbench/core/7.70.0/css/extensions/components.css"
          rel="stylesheet"
        />

        <Script
          src="https://assets.oneweb.mercedes-benz.com/plugin/workbench/core/7.70.0/workbench/workbench.esm.js"
          strategy="beforeInteractive"
          type="module"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
