export default function WhatsappButton() {
  return (
    <aside aria-label="Hızlı İletişim" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5">
      {/* Telefon Butonu */}
      <a
        href="tel:+905382123011"
        className="group relative flex items-center justify-center rounded-full bg-slate-900 p-3.5 text-white shadow-xl ring-1 ring-white/10 transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:shadow-2xl active:scale-95"
        aria-label="Telefon ile Ulaşın"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.82.36 1.62.72 2.38a2 2 0 0 1-.45 2.11L9.37 10.37a16 16 0 0 0 6.24 6.24l1.16-1.16a2 2 0 0 1 2.11-.45c.76.36 1.56.6 2.38.72A2 2 0 0 1 22 16.92Z" />
        </svg>

        {/* Tooltip Label */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-100 opacity-0 shadow-lg ring-1 ring-white/10 transition-all duration-300 group-hover:opacity-100">
          Hemen Arayın
        </span>
      </a>

      {/* WhatsApp Butonu */}
      <a
        href="https://wa.me/905382123011"
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center rounded-full bg-emerald-500 p-3.5 text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/30 active:scale-95"
        aria-label="WhatsApp Destek Hattı"
      >
        {/* Pulse / Canlılık Halkası */}
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-500 opacity-40 duration-1000" />

        {/* Orijinal WhatsApp SVG İkonu */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.876-9.874 2.634 0 5.11 1.028 6.97 2.89 1.861 1.86 2.887 4.334 2.886 6.968 0 5.447-4.432 9.877-9.873 9.877m0-18.067c-4.514 0-8.188 3.673-8.188 8.19 0 1.442.377 2.85 1.096 4.091l.17.294-.65 2.379 2.433-.638.28.166a8.146 8.146 0 004.857 1.396h.004c4.513 0 8.187-3.674 8.188-8.192 0-2.185-.85-4.238-2.396-5.783A8.134 8.134 0 0012.051 3.718" />
        </svg>

        {/* Tooltip Label */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 opacity-0 shadow-lg ring-1 ring-white/10 transition-all duration-300 group-hover:opacity-100">
          WhatsApp Destek
        </span>
      </a>
    </aside>
  );
}