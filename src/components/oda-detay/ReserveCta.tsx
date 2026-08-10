import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

interface ReserveCtaProps {
  title?: string;
  whatsappMessage?: string;
}

export default function CtaBanner(_props: ReserveCtaProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white shadow-2xl sm:px-12 sm:py-16 border border-slate-800">
            
            {/* Arka Plan Glow Işık Katmanları (Gemini / Premium Mor-Mavi Glow) */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-brand-600/30 blur-[120px]" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-purple-600/30 blur-[120px]" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              
              {/* Sol Taraf: Tipografi ve Başlık */}
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span>Sizi Ağırlamaktan Mutluluk Duyarız</span>
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                  Zirve Kız Yurdu’nu yerinde keşfetmeye hazır mısınız?
                </h2>

                <p className="text-sm text-slate-300 sm:text-base font-light leading-relaxed">
                  Erken kayıt avantajları ve oda seçenekleri hakkında detaylı bilgi almak ya da yurdumuzu ziyaret etmek için bizimle iletişime geçin.
                </p>
              </div>

              {/* Sağ Taraf: Premium İletişim Butonları */}
              <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center shrink-0">
                
                {/* Telefon Butonu (Primary Action) */}
                <a
                  href="tel:+905382123011"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition-all duration-300 hover:bg-slate-100 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Hemen Ara</span>
                </a>

                {/* WhatsApp Butonu (Glassmorphism Effect) */}
                <a
                  href="https://wa.me/905382123011"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>WhatsApp ile Yaz</span>
                </a>

              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}