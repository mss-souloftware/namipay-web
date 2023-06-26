import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function About() {
  const { t } = useTranslation('about');

  return (
    <section>
      <p className="text-5xl mx-auto max-w-lg text-center font-bold">
        Test About
      </p>
    </section>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about','header']))
    }
  };
}
