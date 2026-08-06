import Reveal from "@/components/shared/Reveal";
import { team } from "@/lib/data";

// Pozisyonlara Özel SVG İkon Seçici
function getRoleIcon(role: string) {
  const normalizedRole = role.toLowerCase();

  if (normalizedRole.includes("müdür") || normalizedRole.includes("yönetim")) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (normalizedRole.includes("güvenlik") || normalizedRole.includes("koruma")) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }

  if (normalizedRole.includes("hizmet") || normalizedRole.includes("destek") || normalizedRole.includes("hijyen")) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );
  }

  // Varsayılan / Öğrenci İşleri - Danışma İkonu
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

export default function Team() {
  return (
    <section className="bg-mist-50/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
            <span>Uzman Kadromuz</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Deneyimli ve Destekleyici Yönetim
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Öğrencilerimizin güvenliği, konforu ve huzuru için 7/24 kesintisiz hizmet veren profesyonel ekibimiz.
          </p>
        </div>

        {/* Ekip Kartları Grid Yapısı */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Reveal key={member.role} delay={index * 0.08}>
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-600/10">
                
                {/* Kart Üstü Gradient Çizgisi */}
                <div className="absolute inset-x-0 top-0 h-1 w-0 bg-gradient-to-r from-brand-500 to-indigo-600 transition-all duration-500 group-hover:w-full" />

                <div>
                  {/* SVG İkon Kutusu */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-600/30">
                    {getRoleIcon(member.role)}
                  </div>

                  {/* Rol & Başlık */}
                  <p className="mt-6 text-xs font-bold uppercase tracking-wider text-brand-600">
                    {member.role}
                  </p>

                  {/* Açıklama */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {member.description}
                  </p>
                </div>

                {/* Alt Mikro Rozet */}
                <div className="mt-8 border-t border-slate-100 pt-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-slate-500">7/24 Görev Başında</span>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}