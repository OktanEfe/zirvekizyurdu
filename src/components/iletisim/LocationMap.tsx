import Reveal from "@/components/shared/Reveal";
import { locationFacts } from "@/lib/data";

export default function LocationMap() {
  const query = encodeURIComponent("Kabaoğlu Mah. Prof. Baki Komşuoğlu Bulvarı No:495 Kocaeli");
  const mapSrc = `https://maps.google.com/maps?q=${query}&z=15&output=embed`;

  return (
    <Reveal>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm">
              <iframe
                title="Zirve Kız Yurdu Haritası"
                width="100%"
                height="520"
                loading="lazy"
                className="border-0 h-[320px] w-full sm:h-[420px] lg:h-[520px]"
                src={mapSrc}
              />
            </div>

            <div className="space-y-6 rounded-3xl border border-brand-100 bg-white p-8 shadow-sm">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">Konum Bilgisi</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950">Zirve Kız Yurdu'na kolay ulaşım</h2>
              </div>
              <ul className="space-y-4 text-sm leading-7 text-slate-600">
                {locationFacts.map((fact) => (
                  <li key={fact} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-600" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
