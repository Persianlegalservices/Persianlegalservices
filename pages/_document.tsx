import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Persian Legal Services</title>
        <meta name="description" content="Persian Legal Services" />
        <link rel="icon" href="/images/Pls.ico" />
      </Head>{" "}
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
