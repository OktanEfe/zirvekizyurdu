import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  tag?: string;
  whatsappMessage?: string;
};

export default function RoomHero({ title, description, image, tag, whatsappMessage }: Props) {
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(whatsappMessage ?? `${title} hakkında bilgi almak istiyorum.`)}`;

  return (
    <section className="relative min-h-[420px] sm:min-h-[520px]">
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <Image src={image} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <div className="flex w-full items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm text-white/70">Ana Sayfa / Odalarımız / {title}</p>
            {tag ? (
              <span className="inline-block rounded-full bg-brand-600/90 px-3 py-1 text-xs font-semibold text-white">{tag}</span>
            ) : null}

            <h1 className="mt-4 text-4xl font-serif font-semibold text-white sm:text-5xl">{title}</h1>
            <p className="mt-4 text-sm text-white/80">{description}</p>
          </div>

          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <Link href={`tel:+90-000-000-0000`} className="mb-3 inline-flex items-center gap-3 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-900 shadow">
              <span className="text-red-600">📞</span>
              Ara
            </Link>

            <Link href={whatsappHref} target="_blank" className="inline-flex items-center gap-3 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-900 shadow">
              <span className="text-green-600">💬</span>
              WhatsApp ile Mesaj Gönder
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
