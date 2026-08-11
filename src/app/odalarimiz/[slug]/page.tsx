import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const room = allRooms.find((item) => item.slug === slug);
  if (!room) {
    return { title: "Oda Bulunamadı | Kocaeli Umuttepe Zirve Kız Yurdu" };
  }

  const title = `${room.title} | Kocaeli Umuttepe Zirve Kız Yurdu`;
  const description = `Kocaeli Umuttepe Zirve Kız Yurdu ${room.title.toLocaleLowerCase("tr-TR")} özellikleri, galerisi ve fiyat bilgisi için detayları inceleyin.`;
  const roomImage = [{ url: room.image, width: 1200, height: 900, alt: room.title }];

  return {
    title: { absolute: title },
    description,
    openGraph: { title, description, images: roomImage },
    twitter: { card: "summary_large_image", title, description, images: [room.image] },
  };
}

export default async function RoomDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = allRooms.find((item) => item.slug === slug);

  if (!room) {
    notFound();
  }

  const whatsappMessage = `Merhaba, ${room.title} hakkında bilgi almak istiyorum.`;
  const gallery = room.gallery ?? [room.image];
  const specs = [
    { label: "Oda Tipi", value: room.tag ?? room.capacity },
    { label: "Kapasite", value: room.capacity },
    { label: "Galeri", value: `${gallery.length} Fotoğraf` },
    { label: "Banyo", value: "Özel Banyo" },
  ];

  return (
    <>
      <Hero
        slug={room.slug}
        title={room.title}
        description={room.description}
        capacity={room.capacity}
        tag={room.tag}
        whatsappMessage={whatsappMessage}
      />

      <Reveal>
        <GallerySlider images={gallery} roomTitle={room.title} features={room.features} specs={specs} slug={room.slug} />
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
        <OtherRooms />
      </Reveal>
    </>
  );
}
