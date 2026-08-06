import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { allRooms } from "@/lib/data";

export default function RoomGrid() {
  return (
    <section className="bg-slate-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 border-b border-slate-300 pb-10 md:flex-row md:items-end">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>Oda Koleksiyonu</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Konaklama Seçenekleri
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-700 sm:text-base">
              Bireysel çalışma alanlarından sosyal paylaşımlı odalara kadar ihtiyacınıza uygun mimari çözümler.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-8">
          {allRooms.map((room, index) => {
            const isEven = index % 2 === 0;

            return (
              <Reveal key={room.slug} delay={index * 0.08}>
                <article className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 text-white shadow-xl transition-all duration-300 hover:border-blue-500 hover:shadow-2xl">
                  <div className="grid gap-0 lg:grid-cols-12 lg:items-stretch">
                    
                    <div
                      className={`relative min-h-[320px] overflow-hidden bg-slate-950 lg:col-span-7 lg:min-h-[440px] ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <Image
                        src={room.image || "/images/room-placeholder.jpg"}
                        alt={room.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                      <div className="absolute left-6 top-6">
                        <span className="rounded-full bg-slate-950/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 border border-slate-700 backdrop-blur-md shadow-lg">
                          {room.capacity || "1-4 Kişilik"}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`flex flex-col justify-between p-8 lg:col-span-5 lg:p-12 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
                          <span>Oda Tipi</span>
                          <span className="h-1 w-1 rounded-full bg-slate-600" />
                          <span className="text-slate-400">Özel Tasarım</span>
                        </div>

                        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl transition-colors group-hover:text-blue-300">
                          {room.title}
                        </h3>

                        <p className="text-sm font-normal leading-relaxed text-slate-300 lg:text-base">
                          {room.description}
                        </p>

                        {/* Özellikler Listesi */}
                        {room.features && Array.isArray(room.features) && room.features.length > 0 && (
                          <div className="pt-4 border-t border-slate-800">
                            <ul className="grid grid-cols-2 gap-2.5 text-xs font-medium text-slate-300">
                              {room.features.slice(0, 4).map((feat: string) => (
                                <li key={feat} className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Aksiyon Butonu */}
                      <div className="mt-8 border-t border-slate-800 pt-6">
                        <Link
                          href={`/odalarimiz/${room.slug}`}
                          className="inline-flex items-center justify-between w-full rounded-full bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-blue-500 active:scale-[0.98]"
                        >
                          <span>Oda Detaylarını İncele</span>
                          <span className="text-base">→</span>
                        </Link>
                      </div>

                    </div>

                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}