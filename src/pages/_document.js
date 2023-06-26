import SmoothScroll from '@/components/SmoothScroll';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  /*
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  */
  return (
    <Html lang="" className="bg-white font-lato tracking-wide text-white">
      <Head />
      <body >
        <Main />
        <SmoothScroll />
        <NextScript />
      </body>
    </Html>
  );
}
