import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import WhyUs from "@/components/home/WhyUs";
import RoomTypesPreview from "@/components/home/RoomTypesPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import Slogan from "@/components/home/Slogan";
import GalleryPreview from "@/components/home/GalleryPreview";
import Faq from "@/components/home/Faq";

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
