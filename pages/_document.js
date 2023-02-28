import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scrollbar-none sm:scrollbar-thin">
      <Head>
        <title>Certification Tracker - Capgemini</title>
        <meta name="title" content="Certification Tracker - Capgemini" />
        <meta
          name="description"
          content="Certification Tracker tool built for Capgemini by Odisee students for the course Integration Project."
        />
        <meta name="keywords" content="capgemini, certificates, tracker" />
        <meta
          name="author"
          content="Charles Clotuche, Sylvian Dip, Yannic Fréson, Achraf Khacha, Nina Vermeiren"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://www." /> */}
        <meta property="og:title" content="Certification Tracker - Capgemini" />
        {/* <meta
          property="og:image"
          content="https://.png"
        /> */}
        <meta
          property="og:description"
          content="Certification Tracker tool built for Capgemini by Odisee students for the course Integration Project."
        />
        {/* <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        ></link> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Playball&family=Poiret+One&family=Rubik+Vinyl&display=swap"
          rel="stylesheet"
        ></link> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
