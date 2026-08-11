import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import StandardFeatures from "@/components/odalarimiz/StandardFeatures";
import RoomGrid from "@/components/odalarimiz/RoomGrid";
import ReserveCta from "@/components/odalarimiz/ReserveCta";
import { ogImage } from "@/lib/seo";

const title = "Odalarımız | Kocaeli Umuttepe Zirve Kız Yurdu";
const description =
  "Kocaeli Umuttepe Zirve Kız Yurdu'nda 1, 2, 3, 4 ve 5 kişilik oda seçenekleriyle bütçenize ve konfor beklentinize uygun kız öğrenci yurdu odasını keşfedin.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: { title, description, images: ogImage },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-cover.jpg"] },
};

export default function OdalarimizPage() {
  return (
    <>
      <StandardFeatures />
      <RoomGrid />
      <ReserveCta />
    </>
  );
}
