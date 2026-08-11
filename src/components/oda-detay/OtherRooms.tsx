import Link from "next/link";

export default function OtherRooms() {
  return (
    <section className="pb-24">
      <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
        <Link
          href="/odalarimiz"
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-white shadow-xl shadow-slate-950/10 transition-all duration-300 hover:bg-brand-600 hover:shadow-brand-600/25 active:scale-95 sm:px-7 sm:py-3.5 lg:px-8 lg:py-4"
        >
          Diğer Odaları Gör →
        </Link>
      </div>
    </section>
  );
}
