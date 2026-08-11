import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Intro from "@/components/hakkimizda/Intro";
import GeneralInfo from "@/components/hakkimizda/GeneralInfo";
import HighlightCards from "@/components/hakkimizda/HighlightCards";
import MissionVision from "@/components/hakkimizda/MissionVision";
import Team from "@/components/hakkimizda/Team";
import LogoStrip from "@/components/hakkimizda/LogoStrip";
import CtaBanner from "@/components/hakkimizda/CtaBanner";
import { ogImage } from "@/lib/seo";

const title = "Hakkımızda | Kocaeli Umuttepe Zirve Kız Yurdu";
const description =
  "Kocaeli Umuttepe Zirve Kız Yurdu'nun 29 yıllık tecrübesi, uzman eğitimci kadrosu ve güvenli kız öğrenci yurdu anlayışıyla oluşturduğu aile ortamını keşfedin.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: { title, description, images: ogImage },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-cover.jpg"] },
};

export default function HakkimizdaPage() {
  return (
    <>
      <Intro />
      <GeneralInfo />
      <HighlightCards />
      <MissionVision />
      <LogoStrip />
      <Team />
      <CtaBanner />
    </>
  );
}
