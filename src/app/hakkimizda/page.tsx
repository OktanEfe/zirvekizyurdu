import PageHero from "@/components/shared/PageHero";
import Intro from "@/components/hakkimizda/Intro";
import HighlightCards from "@/components/hakkimizda/HighlightCards";
import MissionVision from "@/components/hakkimizda/MissionVision";
import ValuesGrid from "@/components/hakkimizda/ValuesGrid";
import Team from "@/components/hakkimizda/Team";
import CtaBanner from "@/components/hakkimizda/CtaBanner";

export default function HakkimizdaPage() {
  return (
    <>
      <Intro />
      <HighlightCards />
      <MissionVision />
      <ValuesGrid />
      <Team />
      <CtaBanner />
    </>
  );
}
