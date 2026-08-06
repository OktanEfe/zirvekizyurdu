import Reveal from "@/components/shared/Reveal";

const values = [
  "7/24 Güvenlik",
  "Ev Konforu",
  "Akademik Odak",
  "Sosyal Yaşam",
];

export default function Slogan() {
  return (
    <Reveal>
      <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28 text-white">
        {/* Derin Mor ve Indigo Parlama Efekti */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/35 blur-[150px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/25 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          
          {/* İkonsuz, Minimalist Değer Rozetleri */}
         

          {/* Slogan Başlığı & Mor Vurgusu */}
          <h2 className="mx-auto mt-8 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.25]">
            Sadece bir yurt değil;{" "}
            <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-indigo-300 bg-clip-text text-transparent">
              geleceğinizi inşa ettiğiniz
            </span>{" "}
            güvenli ve ayrıcalıklı bir yaşam alanı.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            Kocaeli'de öğrenciliğinizi Zirve'de yaşayın; aile sıcaklığını modern standartlarla buluşturun.
          </p>

        </div>
      </section>
    </Reveal>
  );
}