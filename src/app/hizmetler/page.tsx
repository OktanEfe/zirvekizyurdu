import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Intro from "@/components/hizmetler/Intro";
import ServicesGrid from "@/components/hizmetler/ServicesGrid";
import ExtraServices from "@/components/hizmetler/ExtraServices";
import CtaBanner from "@/components/hizmetler/CtaBanner";
import { ogImage } from "@/lib/seo";

const title = "Hizmetlerimiz | Kocaeli Umuttepe Zirve Kız Yurdu";
const description =
  "Kocaeli Umuttepe Zirve Kız Yurdu'nda 24 saat güvenlik, çamaşırhane, etüt salonları, fitness center ve açık büfe beslenme hizmetleriyle eksiksiz bir kampüs yaşamı.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: { title, description, images: ogImage },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-cover.jpg"] },
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
