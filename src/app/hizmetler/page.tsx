import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Intro from "@/components/hizmetler/Intro";
import ServicesGrid from "@/components/hizmetler/ServicesGrid";
import ExtraServices from "@/components/hizmetler/ExtraServices";
import CtaBanner from "@/components/hizmetler/CtaBanner";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Kocaeli Umuttepe Zirve Kız Yurdu",
  description:
    "Kocaeli Umuttepe Zirve Kız Yurdu'nda 24 saat güvenlik, çamaşırhane, çalışma salonları, spor merkezi ve beslenme hizmetleriyle eksiksiz bir kampüs yaşamı.",
};

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
