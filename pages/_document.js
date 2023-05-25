import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Meta tags */}
        <meta
          name="title"
          content="Revolutionize Your Business with Our Custom SaaS Solution"
        />
        <meta
          name="description"
          content="Transform the way you do business with our cutting-edge custom SaaS solution. Our team of experts will work with you to create a personalized software that meets the unique needs of your organization, helping you streamline processes and improve efficiency. Say goodbye to outdated technology and hello to a more modern, efficient future. Revolutionize your business today!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meetmandaviya.com/" />
        <meta
          property="og:title"
          content="Revolutionize Your Business with Our Custom SaaS Solution"
        />
        <meta
          property="og:description"
          content="Transform the way you do business with our cutting-edge custom SaaS solution. Our team of experts will work with you to create a personalized software that meets the unique needs of your organization, helping you streamline processes and improve efficiency. Say goodbye to outdated technology and hello to a more modern, efficient future. Revolutionize your business today!"
        />

        <meta
          property="twitter:title"
          content="Revolutionize Your Business with Our Custom SaaS Solution"
        />
        <meta
          property="twitter:description"
          content="Transform the way you do business with our cutting-edge custom SaaS solution. Our team of experts will work with you to create a personalized software that meets the unique needs of your organization, helping you streamline processes and improve efficiency. Say goodbye to outdated technology and hello to a more modern, efficient future. Revolutionize your business today!"
        />

        {/* Meta tags  */}

        <title>Revolutionize Your Business with Our Custom SaaS Solution</title>
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
