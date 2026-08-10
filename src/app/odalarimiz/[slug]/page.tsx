import { notFound } from "next/navigation";
import GallerySlider from "@/components/oda-detay/GallerySlider";
import Hero from "@/components/oda-detay/Hero";
import OtherRooms from "@/components/oda-detay/OtherRooms";
import Reveal from "@/components/shared/Reveal";
import ReserveCta from "@/components/oda-detay/ReserveCta";
import Features from "@/components/oda-detay/Features";
import StandardFeatures from "@/components/oda-detay/StandardFeatures";
import { allRooms } from "@/lib/data";

export function generateStaticParams() {
  return allRooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = allRooms.find((item) => item.slug === slug);
  if (!room) {
    return { title: "Oda Bulunamadı - Zirve Kız Yurdu" };
  }

  return { title: `${room.title} - Zirve Kız Yurdu` };
}

export default async function RoomDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = allRooms.find((item) => item.slug === slug);

  if (!room) {
    notFound();
  }

  const otherRooms = allRooms.filter((item) => item.slug !== room.slug);
  const whatsappMessage = `Merhaba, ${room.title} hakkında bilgi almak istiyorum.`;

  return (
    <>
      <Hero
        title={room.title}
        description={room.description}
        image={room.image}
        tag={room.tag}
        whatsappMessage={whatsappMessage}
      />

      <Reveal>
        <GallerySlider images={room.gallery ?? [room.image]} />
      </Reveal>

      <Reveal>
        <Features features={room.features} />
      </Reveal>

      <Reveal>
        <StandardFeatures />
      </Reveal>

      <Reveal>
        <ReserveCta title={room.title} whatsappMessage={whatsappMessage} />
      </Reveal>

      <Reveal>
        <OtherRooms rooms={otherRooms} />
      </Reveal>
    </>
  );
}
