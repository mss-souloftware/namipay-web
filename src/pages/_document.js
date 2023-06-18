// import { useRouter } from 'next/router';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  /*
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  */
  return (
    <Html lang="" className="bg-[#17171F] font-lato tracking-wide text-white">
      <Head />
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
