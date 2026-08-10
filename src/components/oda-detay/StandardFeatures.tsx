import { standardRoomFeatures } from "@/lib/data";

export default function StandardFeatures() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">Tüm odalarda ortak standartlar</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Konforunuz her zaman aynı</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {standardRoomFeatures.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
