import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { homeRooms } from "@/lib/data";

export default function RoomTypesPreview() {
  return (
    <section className="bg-mist-50/60 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
            <span>Oda Tipleri</span>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Öğrencinin ihtiyacına özel konfor alanları
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Farklı bütçe ve yaşam alışkanlıklarına uygun, her detayında ergonomi ve huzurun ön planda tutulduğu odalarımızı keşfedin.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {homeRooms.map((room, index) => (
            <Reveal key={room.slug} delay={index * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-600/10">

                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-80" />

                  {room.tag ? (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-900/60 px-3.5 py-1 text-xs font-medium text-white shadow-md backdrop-blur-md">
                        {room.tag}
                      </span>
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-600">
                      {room.title}
                    </h3>

                    <ul className="mt-5 space-y-3">
                      {room.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[10px] font-bold text-brand-600 ring-1 ring-brand-200">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-5">
                    <Link
                      href={`/odalarimiz#${room.slug}`}
                      className="inline-flex w-full items-center justify-between text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700"
                    >
                      <span>Detayları İncele & Fiyat Al</span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-brand-600 group-hover:text-white">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </div>

                </div>

              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/odalarimiz"
            className="group relative inline-flex items-center gap-2 rounded-full bg-brand-600 px-9 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/30 active:scale-[0.98]"
          >
            <span>Tüm Odalarımızı Keşfedin</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
