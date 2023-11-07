import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>TenMs Project</title>
        <meta property='og:title' content='TenMs Project' key='title' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
