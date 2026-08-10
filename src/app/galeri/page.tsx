import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import GalleryWrapper from "@/components/galeri/GalleryWrapper";

export const metadata: Metadata = {
  title: "Galeri | Kocaeli Umuttepe Zirve Kız Yurdu",
  description:
    "Kocaeli Umuttepe Zirve Kız Yurdu'nun odalarını, ortak yaşam alanlarını, yemekhanesini ve sosyal tesislerini fotoğraflarla keşfedin.",
};

export default function GaleriPage() {
  return (
    <>
      <GalleryWrapper />
    </>
  );
}
