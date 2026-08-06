import PageHero from "@/components/shared/PageHero";
import Intro from "@/components/hizmetler/Intro";
import ServicesGrid from "@/components/hizmetler/ServicesGrid";
import ExtraServices from "@/components/hizmetler/ExtraServices";
import CtaBanner from "@/components/hizmetler/CtaBanner";

export default function HizmetlerPage() {
  return (
    <>
      <Intro />
      <ServicesGrid />
      <ExtraServices />
      <CtaBanner />
    </>
  );
}
