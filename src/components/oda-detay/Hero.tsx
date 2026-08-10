"use client";

import Link from "next/link";

interface RoomHeroProps {
  slug: string;
  title: string;
  description: string;
  capacity: string;
  tag?: string;
  whatsappMessage: string;
}

export default function RoomHero({ slug, title, description, capacity, tag, whatsappMessage }: RoomHeroProps) {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-slate-950 text-white pt-24 pb-16 lg:pt-32 lg:pb-20">

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10"
      >
        <div className="h-[350px] w-[500px] rounded-full bg-blue-600/20 blur-[130px] sm:h-[450px] sm:w-[750px] sm:blur-[160px]" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

        <div className="inline-flex items-center gap-2.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold text-rose-400 shadow-lg shadow-rose-950/40 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
          </span>
          <span>Sınırlı Sayıda Kontenjan</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.15]">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {tag ? (
            <div className="rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-300 backdrop-blur-md shadow-sm">
              {tag}
            </div>
          ) : null}
          <div className="rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-md shadow-sm">
             {capacity}
          </div>
          <div className="rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-md shadow-sm">
             Özel Banyo & WC
          </div>
          <div className="rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-md shadow-sm">
            Yüksek Hızlı Wi-Fi
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={`/iletisim?oda=${slug}`}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/40 active:scale-[0.98] sm:px-7 sm:py-3.5 lg:px-8 lg:py-4"
          >
            Bu Oda İçin Başvuru Yap →
          </Link>

          <Link
            href={`https://wa.me/905382123011?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-800 hover:text-emerald-400 active:scale-[0.98] sm:px-7 sm:py-3.5 lg:px-8 lg:py-4"
          >
            <span>WhatsApp ile Fiyat Sor</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
