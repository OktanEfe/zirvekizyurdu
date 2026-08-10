export default function Hero() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[72vh] w-full bg-white">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-center px-4 py-8 sm:px-6">
        <div className="relative w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.1)]">
          <picture>
            <source media="(min-width: 640px)" srcSet="/anasayfahero/zirveyurtkapak2.png" />
            <source media="(max-width: 639px)" srcSet="/anasayfahero/zirveyurtkapak.png" />
            <img
              src="/anasayfahero/zirveyurtkapak2.png"
              alt="Zirve Kız Yurdu Kapak"
              className="block h-auto w-full object-contain"
              loading="eager"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
