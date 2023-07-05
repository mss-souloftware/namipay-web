import Hero from '@/components/Home/Hero';
import OurServices from '@/components/Home/OurServices/OurServices';
import OurSolutions from '@/components/Home/OurSolutions/OurSolutions';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Hero />
      <OurServices />
      <OurSolutions />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header']))
    }
  };
}
