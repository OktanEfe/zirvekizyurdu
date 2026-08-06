import Reveal from "@/components/shared/Reveal";

const contacts = [
  { label: "Adresimiz", value: "Kabaoğlu Mah. Prof. Baki Komşuoğlu Bulvarı No:495, Kocaeli" },
  { label: "Telefon", value: "+90 538 212 30 11" },
  { label: "WhatsApp", value: "wa.me/905382123011" },
  { label: "E-posta", value: "info@zirvekizogrenciyurdu.com" },
];

export default function ContactInfoCards() {
  return (
    <Reveal>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">İletişim</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Bizimle iletişime geçin
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contacts.map((item, index) => (
              <div key={item.label} className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">{item.label}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
