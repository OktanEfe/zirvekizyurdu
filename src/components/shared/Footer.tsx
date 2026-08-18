import Link from "next/link";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Odalarımız", href: "/odalarimiz" },
  { label: "Galeri", href: "/galeri" },
  { label: "İletişim", href: "/iletisim" },
];

function WhatsappIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.13c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.05.24-3.53-.74-2.98-1.18-4.86-4.2-5-4.4-.15-.19-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.26 1.63 2.04 1.12 1 2.06 1.32 2.36 1.47.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.27.1 1.75.82 2.05.97.3.15.5.22.57.35.08.13.08.75-.16 1.43z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white">
            <span className="h-3 w-3 rounded-full bg-brand-500 shadow-sm shadow-brand-500/50" />
            <span>Zirve Kız Yurdu</span>
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
            Kocaeli merkezli kız yurdu için modern, güvenilir ve rahat bir yaşam alanı sunduğumuz kurumsal tanıtım sitesi.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-200">
            Hızlı Linkler
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-200">
            İletişim
          </p>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-400">
            <p>Kabaoğlu Mah. Prof. Baki Komşuoğlu Bulvarı No:495, Kocaeli</p>
            <p>
              Cep: {" "}
              <a
                href="tel:+905382123011"
                className="font-medium text-slate-200 hover:text-brand-400 hover:underline"
              >
                0538 212 30 11
              </a>
            </p>
            <p>
              Sabit: {" "}
              <a
                href="tel:+902625274100"
                className="font-medium text-slate-200 hover:text-brand-400 hover:underline"
              >
                0262 527 41 00
              </a>
            </p>
            <p>
              E-posta:{" "}
              <a
                href="mailto:info@zirvekizogrenciyurdu.com"
                className="font-medium text-slate-200 hover:text-brand-400 hover:underline"
              >
                info@zirvekizogrenciyurdu.com
              </a>
            </p>
            <p className="inline-flex items-center gap-1.5 font-medium text-brand-400">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
              7/24 Hizmet
            </p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://wa.me/905382123011"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-brand-500 hover:shadow-md hover:shadow-brand-500/20 active:scale-[0.98] sm:px-4"
            >
              <WhatsappIcon />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 bg-slate-950/60 py-6 px-4">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Zirve Kız Yurdu. Tüm hakları saklıdır.
          </p>
          <p className="mt-2 text-center text-xs text-slate-600">
            Bu site{" "}
            <a
              href="https://izmitsosyalmedia.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-brand-500 hover:text-brand-400 hover:underline transition-colors"
            >
              İzmit Sosyal Medya
            </a>
            {" "}tarafından tasarlanmıştır.
          </p>
        </div>
      </div>
    </footer>
  );
}
