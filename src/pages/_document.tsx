import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <meta property="og:title" content="알파케어" />
      <meta
        property="og:description"
        content="알츠하이머와 파킨슨 환자를 위한 지원과 공유의 플랫폼"
      />
      <title>ALZPA CARE</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
