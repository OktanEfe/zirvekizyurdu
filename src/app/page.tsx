import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import WhyUs from "@/components/home/WhyUs";
import RoomTypesPreview from "@/components/home/RoomTypesPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import Slogan from "@/components/home/Slogan";
import GalleryPreview from "@/components/home/GalleryPreview";
import Faq from "@/components/home/Faq";
import { ogImage } from "@/lib/seo";

const title = "Zirve Kız Yurdu | Kocaeli Umuttepe Kız Öğrenci Yurdu";
const description =
  "Kocaeli Umuttepe'de Kocaeli Üniversitesi'ne 100 metre mesafede, 29 yıllık tecrübeyle güvenli, konforlu kız öğrenci yurdu arayışınızın adresi Zirve Kız Yurdu.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: { title, description, images: ogImage },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-cover.jpg"] },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <WhyUs />
      <RoomTypesPreview />
      <ServicesPreview />
      <Slogan />
      <GalleryPreview />
      <Faq />
    </>
  );
}
