import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import WhyUs from "@/components/home/WhyUs";
import RoomTypesPreview from "@/components/home/RoomTypesPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import Slogan from "@/components/home/Slogan";
import GalleryPreview from "@/components/home/GalleryPreview";
import Faq from "@/components/home/Faq";

export const metadata: Metadata = {
  title: "Zirve Kız Yurdu | Kocaeli Umuttepe Kız Öğrenci Yurdu",
  description:
    "Kocaeli Umuttepe'de Kocaeli Üniversitesi'ne yürüme mesafesinde, güvenli, konforlu ve aile sıcaklığında bir yaşam sunan Zirve Kız Yurdu ile tanışın.",
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
