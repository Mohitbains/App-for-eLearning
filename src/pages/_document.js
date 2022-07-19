import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"
          integrity="sha384-/frq1SRXYH/bSyou/HUp/hib7RVN1TawQYja658FEOodR/FQBKVqT9Ol+Oz3Olq5"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}