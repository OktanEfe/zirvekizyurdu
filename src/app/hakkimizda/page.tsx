import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Intro from "@/components/hakkimizda/Intro";
import GeneralInfo from "@/components/hakkimizda/GeneralInfo";
import HighlightCards from "@/components/hakkimizda/HighlightCards";
import MissionVision from "@/components/hakkimizda/MissionVision";
import Team from "@/components/hakkimizda/Team";
import LogoStrip from "@/components/hakkimizda/LogoStrip";
import CtaBanner from "@/components/hakkimizda/CtaBanner";

export const metadata: Metadata = {
  title: "Hakkımızda | Kocaeli Umuttepe Zirve Kız Yurdu",
  description:
    "Kocaeli Umuttepe Zirve Kız Yurdu'nun 29 yıllık deneyimi, uzman yönetim kadrosu ve öğrenci güvenliğini önceliğine alan aile ortamı hakkında bilgi alın.",
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
