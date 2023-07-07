import AboutHero from "@/components/About/AboutHero";
import Leadreship from "@/components/About/Leadership/Leadreship";
import MissionVission from "@/components/About/MissionVission/MissionVission";
import OurValues from "@/components/About/Values/OurValues";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <>
      <AboutHero />
      <Leadreship />
      <MissionVission />
      <OurValues />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "header"])),
    },
  };
}
