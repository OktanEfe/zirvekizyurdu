import Image from "next/image";

const logos = [
  { src: "/logo/Kouyenilogo.png", name: "Kocaeli Üniversitesi" },
  { src: "/logo/kocaeli-saglik-ve-teknoloji-universitesi.png", name: "Kocaeli Sağlık ve Teknoloji Üniversitesi" },
];

export default function LogoStrip() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-center gap-12 px-4 sm:px-6 lg:px-8 sm:gap-24">
        {logos.map((logo) => (
          <div key={logo.src} className="flex w-48 flex-col items-center text-center sm:w-56">
            <div className="relative h-24 w-full sm:h-28">
              <Image src={logo.src} alt={logo.name} fill className="object-contain" />
            </div>
            <p className="mt-4 text-sm font-semibold leading-snug text-slate-700 sm:text-base">{logo.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
