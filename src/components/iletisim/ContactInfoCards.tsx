import Reveal from "@/components/shared/Reveal";

const phoneNumbers = [
  { label: "Cep", value: "+90 538 212 30 11", href: "tel:+905382123011" },
  { label: "Sabit", value: "+90 262 527 41 00", href: "tel:+902625274100" },
];

const contacts = [
  {
    label: "Adresimiz",
    value: "Kabaoğlu Mah. Prof. Baki Komşuoğlu Bulvarı 41001, Kocaeli",
    href: "https://www.google.com/maps/place//data=!4m2!3m1!1s0xe4fc4807f9d20b5:0x2f9126297b9b610?sa=X&ved=1t:8290&ictx=111",
    isExternal: true,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+90 538 212 30 11",
    href: "https://wa.me/905382123011",
    isExternal: true,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-.812-.812 5.97 5.97 0 011.057-2.035A8.106 8.106 0 013 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    label: "E-posta",
    value: "info@zirvekizogrenciyurdu.com",
    href: "mailto:info@zirvekizogrenciyurdu.com",
    isExternal: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

function ContactCard({ item }: { item: (typeof contacts)[number] }) {
  return (
    <a
      href={item.href}
      target={item.isExternal ? "_blank" : undefined}
      rel={item.isExternal ? "noopener noreferrer" : undefined}
      className="group relative flex flex-col justify-between rounded-2xl border border-brand-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-200 sm:rounded-3xl sm:p-7"
    >
      <div>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
          {item.icon}
        </div>

        <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-brand-700 transition-colors sm:mt-6 sm:text-xs">
          {item.label}
        </p>

        <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-900 group-hover:text-brand-900 transition-colors break-words sm:mt-2 sm:text-sm">
          {item.value}
        </p>
      </div>

      <div className="mt-4 flex items-center text-[11px] font-semibold text-brand-600 transition-all duration-200 group-hover:translate-x-1 sm:mt-6 sm:text-xs">
        <span>İncele / Ulaş</span>
        <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </a>
  );
}

function PhoneCard() {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-brand-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-200 sm:rounded-3xl sm:p-7">
      <div>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.239-5.112-3.525-6.351-6.351l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
        </div>

        <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:mt-6 sm:text-xs">
          Telefon
        </p>

        <div className="mt-1.5 space-y-1 sm:mt-2">
          {phoneNumbers.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className="block text-xs font-medium leading-relaxed text-slate-900 transition-colors hover:text-brand-700 sm:text-sm"
            >
              {phone.value}{" "}
              <span className="font-normal text-slate-400">({phone.label})</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ContactInfoCards() {
  return (
    <Reveal>
      <section className="py-20 lg:py-24 bg-mist-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 border border-brand-100/80">
              <span className="h-2 w-2 rounded-full bg-brand-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                İletişim
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Bizimle İletişime Geçin
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Sorularınız, kayıt süreci ve yurt imkanlarımız hakkında detaylı bilgi almak için bize dilediğiniz kanaldan ulaşabilirsiniz.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-4">
            <ContactCard item={contacts[0]} />
            <PhoneCard />
            {contacts.slice(1).map((item) => (
              <ContactCard key={item.label} item={item} />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
