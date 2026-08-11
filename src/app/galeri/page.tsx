import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import GalleryWrapper from "@/components/galeri/GalleryWrapper";
import { ogImage } from "@/lib/seo";

const title = "Galeri | Kocaeli Umuttepe Zirve Kız Yurdu";
const description =
  "Kocaeli Umuttepe Zirve Kız Yurdu'nun odalarını, etüt salonlarını, yemekhanesini ve sosyal tesislerini fotoğraflarla keşfedin, güvenli yurt yaşamını görün.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: { title, description, images: ogImage },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-cover.jpg"] },
};

export default function GaleriPage() {
  return (
    <>
      <GalleryWrapper />
    </>
  );
}
