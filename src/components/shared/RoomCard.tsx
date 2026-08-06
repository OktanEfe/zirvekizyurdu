import Image from "next/image";
import Link from "next/link";

type RoomCardProps = {
  slug: string;
  title: string;
  tag?: string;
  image: string;
  description: string;
  features: string[];
  cta: string;
  href?: string;
};

export default function RoomCard({ slug, title, tag, image, description, features, cta, href }: RoomCardProps) {
  const destination = href ?? `/odalarimiz/${slug}`;

  return (
    <Link
      href={destination}
      className="group block overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] bg-brand-100">
        <Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
          </div>
          {tag ? (
            <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
              {tag}
            </span>
          ) : null}
        </div>

        <ul className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
          {features.slice(0, 6).map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <span className="inline-flex rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-700 transition group-hover:border-brand-600 group-hover:bg-brand-50 group-hover:text-brand-900">
            Detayları Gör
          </span>
        </div>
      </div>
    </Link>
  );
}
