import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import StandardFeatures from "@/components/odalarimiz/StandardFeatures";
import RoomCard from "@/components/shared/RoomCard";
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
  const whatsappMessage = encodeURIComponent(`Merhaba, ${room.title} hakkında bilgi almak istiyorum.`);

  return (
    <>
      <PageHero title={room.title} crumb={`Odalarımız / ${room.title}`} />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl bg-brand-100">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={room.image} alt={room.title} fill className="object-cover" priority />
                </div>
              </div>
              <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-semibold text-slate-950">{room.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{room.description}</p>
                  </div>
                  {room.tag ? (
                    <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
                      {room.tag}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>

            <Reveal>
              <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-slate-950">Oda Özellikleri</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {room.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-600" />
                      <span className="text-sm leading-7 text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StandardFeatures />

      <Reveal>
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-brand-600 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-14">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-200">Rezerve Et</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Bu Odayı Rezerve Edin
                  </h2>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+905382123011"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-950 transition hover:bg-slate-100"
                  >
                    Hemen Ara
                  </a>
                  <a
                    href={`https://wa.me/905382123011?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    WhatsApp ile Yaz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">Diğer Oda Tipleri</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Size uygun başka seçenekler
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {otherRooms.map((otherRoom) => (
                <RoomCard key={otherRoom.slug} {...otherRoom} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
