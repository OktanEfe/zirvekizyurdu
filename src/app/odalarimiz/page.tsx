import PageHero from "@/components/shared/PageHero";
import StandardFeatures from "@/components/odalarimiz/StandardFeatures";
import RoomGrid from "@/components/odalarimiz/RoomGrid";
import ReserveCta from "@/components/odalarimiz/ReserveCta";

export default function OdalarimizPage() {
  return (
    <>
      <StandardFeatures />
      <RoomGrid />
      <ReserveCta />
    </>
  );
}
