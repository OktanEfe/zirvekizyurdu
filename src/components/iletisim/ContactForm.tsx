"use client";

import { useState } from "react";
import Reveal from "@/components/shared/Reveal";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Rezervasyon",
    message: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field: string, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!form.name || !form.email || !form.message) {
      setErrorMessage("Lütfen zorunlu alanları doldurun: Ad, E-posta, Mesaj.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setErrorMessage("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMessage("Mesajınız iletildi, en kısa sürede dönüş yapacağız.");
        setForm({ name: "", email: "", phone: "", subject: "Rezervasyon", message: "", website: "" });
      } else {
        setErrorMessage(data?.error || "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Sunucu ile iletişim kurulamadı. WhatsApp'tan da yazabilirsiniz.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Ad Soyad: ${form.name}\nE-posta: ${form.email}\nTelefon: ${form.phone}\nKonu: ${form.subject}\nMesaj: ${form.message}`
    );
    window.open(`https://wa.me/905382123011?text=${text}`, "_blank");
  };

  return (
    <Reveal>
      <section className="py-20 lg:py-24 bg-mist-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">

            <div className="rounded-3xl border border-brand-100 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 border border-brand-100/80">
                <span className="h-2 w-2 rounded-full bg-brand-600" />
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  İletişim Formu
                </span>
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Bize Mesaj Gönderin
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Rezervasyon, oda ziyareti veya genel bilgi talepleriniz için formu doldurun; ekibimiz size en kısa sürede dönüş yapsın.
              </p>

              <div className="mt-8 space-y-5">

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold text-slate-700">Ad Soyad *</span>
                    <input
                      type="text"
                      placeholder="Örn. Ayşe Yılmaz"
                      value={form.name}
                      onChange={(event) => handleChange("name", event.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-600/10"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs font-semibold text-slate-700">E-posta *</span>
                    <input
                      type="email"
                      placeholder="ornek@domain.com"
                      value={form.email}
                      onChange={(event) => handleChange("email", event.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-600/10"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold text-slate-700">Telefon</span>
                    <input
                      type="tel"
                      placeholder="05XX XXX XX XX"
                      value={form.phone}
                      onChange={(event) => handleChange("phone", event.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-600/10"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs font-semibold text-slate-700">Konu</span>
                    <div className="relative mt-1.5">
                      <select
                        value={form.subject}
                        onChange={(event) => handleChange("subject", event.target.value)}
                        className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-600/10"
                      >
                        <option>Rezervasyon</option>
                        <option>Genel Bilgi</option>
                        <option>Yurt Ziyareti</option>
                        <option>Şikayet/Öneri</option>
                        <option>Diğer</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-semibold text-slate-700">Mesajınız *</span>
                  <textarea
                    value={form.message}
                    onChange={(event) => handleChange("message", event.target.value)}
                    rows={4}
                    placeholder="Sormak istediğiniz detayları veya ziyaret talebinizi yazabilirsiniz..."
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-600/10 resize-none"
                  />
                </label>

                {/* Honeypot input - görsel olarak gizli */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                  className="sr-only"
                  aria-hidden
                  tabIndex={-1}
                />

                {successMessage && (
                  <div className="rounded-md border border-brand-100/60 bg-brand-50/60 px-4 py-3 text-sm text-brand-800">
                    {successMessage}
                  </div>
                )}

                {errorMessage && (
                  <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    {errorMessage} <span className="block mt-2">Alternatif olarak <button type="button" onClick={handleWhatsApp} className="underline">WhatsApp'tan yazabilirsiniz</button>.</span>
                  </div>
                )}

                <div className="pt-2 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-brand-600/20 active:scale-[0.99] ${loading ? 'bg-brand-400 cursor-wait' : 'bg-brand-600 hover:bg-brand-700'}`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    {loading ? 'Gönderiliyor...' : 'Formu Gönder'}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-brand-200 bg-brand-50 px-6 py-3.5 text-sm font-semibold text-brand-700 transition-all duration-200 hover:bg-brand-100 hover:border-brand-300 focus:outline-none focus:ring-4 focus:ring-brand-600/10 active:scale-[0.99]"
                  >
                    <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    WhatsApp ile Gönder
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl border border-brand-100 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Hızlı Ulaşım & Bilgi
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Sorularınız için mesai saatleri içerisinde çağrı merkezimizden veya 7/24 WhatsApp hattımızdan direkt bilgi alabilirsiniz.
                </p>

                <div className="mt-8 space-y-4">

                  <div className="flex items-start gap-4 rounded-2xl bg-mist-50/80 p-4 border border-brand-100/50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Adres</p>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-slate-800">
                        Kabaoğlu Mah. Prof. Baki Komşuoğlu Bulvarı No:495, Kocaeli
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl bg-mist-50/80 p-4 border border-brand-100/50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.239-5.112-3.525-6.351-6.351l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Telefon</p>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-slate-800">
                        +90 538 212 30 11
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl bg-mist-50/80 p-4 border border-brand-100/50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">E-posta</p>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-slate-800 break-all">
                        info@zirvekizogrenciyurdu.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-brand-50/60 p-4 border border-brand-100/80 text-xs text-brand-800 flex items-center gap-3">
                <span className="flex h-2 w-2 shrink-0 rounded-full bg-brand-600 animate-pulse" />
                <span>Mesajlarınıza ortalama 15 dakika içerisinde dönüş yapıyoruz.</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Reveal>
  );
}
