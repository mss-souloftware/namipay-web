import PartnersForm from '@/components/Partners/PartnersForm/PartnersForm';
import PartnersHero from '@/components/Partners/PartnersHero';
import PartnerLogo from '@/components/Partners/PartnersLogo/PartnerLogo';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Partners() {
  const { t } = useTranslation('common');

  return (
    <>
      <PartnersHero />
      <PartnerLogo />
      <PartnersForm />
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
