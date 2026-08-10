import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import StandardFeatures from "@/components/odalarimiz/StandardFeatures";
import RoomGrid from "@/components/odalarimiz/RoomGrid";
import ReserveCta from "@/components/odalarimiz/ReserveCta";

export const metadata: Metadata = {
  title: "Odalarımız | Kocaeli Umuttepe Zirve Kız Yurdu",
  description:
    "Kocaeli Umuttepe Zirve Kız Yurdu'nda 1, 2, 3, 4 ve 5 kişilik oda seçenekleriyle bütçenize ve konfor beklentinize uygun yaşam alanını keşfedin.",
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
