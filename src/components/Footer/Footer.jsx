import Link from 'next/link';
import { useRouter } from 'next/router';

import Container from '../Container/Container';

export default function Footer() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const otherLocales = locales.filter(locale => locale !== activeLocale);

  const convertLocaleText = (locale) => {
    const conversionMappings = {
      ar: 'ع',
      // Add other locale conversions as needed
    };

    return conversionMappings[locale] || locale;
  };

  const changeLocale = locale => {
    document.cookie = `NEXT_LOCALE=${locale}`;
  };

  return (
    <footer>
      <Container className="flex items-center justify-center gap-4">
        {/* <span className="bg-[#AC6DDE] px-4 py-2 rounded-xl uppercase text-sm">
          {convertLocaleText(activeLocale)}
        </span> */}
        {otherLocales.map((locale, localeIndex) => {
          const { pathname, query } = router;

          return (
            <Link
              key={localeIndex}
              href={{ pathname, query }}
              locale={locale}
              onClick={() => changeLocale(locale)}
              className="bg-[#414052] hover:bg-[#414052]/80 active:bg-[#414052] px-4 py-2 rounded-xl uppercase text-sm transition-colors"
            >
              {convertLocaleText(locale)}
            </Link>
          );
        })}
      </Container>
    </footer>
  );
}
