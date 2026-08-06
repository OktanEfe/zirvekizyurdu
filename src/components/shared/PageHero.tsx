import Link from "next/link";

type PageHeroProps = {
  title: string;
  crumb: string;
};

export default function PageHero({ title, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(148,163,184,0.12),_transparent_30%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.32em] text-brand-300/70">{crumb}</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
      </div>
    </section>
  );
}
