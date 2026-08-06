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
  });

  const handleChange = (field: string, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone || !form.message) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(`Ad Soyad: ${form.name}\nE-posta: ${form.email}\nTelefon: ${form.phone}\nKonu: ${form.subject}\nMesaj: ${form.message}`);
    window.location.href = `mailto:info@zirvekizogrenciyurdu.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Ad Soyad: ${form.name}\nE-posta: ${form.email}\nTelefon: ${form.phone}\nKonu: ${form.subject}\nMesaj: ${form.message}`);
    window.open(`https://wa.me/905382123011?text=${text}`, "_blank");
  };

  return (
    <Reveal>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-slate-950">Bize Ulaşın</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Rezervasyon, ziyaret veya bilgi talepleriniz için formu doldurun; size hızlıca dönüş yapalım.
              </p>

              <div className="mt-10 space-y-6">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-900">Ad Soyad</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-600"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-900">E-posta</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-600"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-900">Telefon</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(event) => handleChange("phone", event.target.value)}
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-600"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-900">Konu</span>
                  <select
                    value={form.subject}
                    onChange={(event) => handleChange("subject", event.target.value)}
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-600"
                  >
                    <option>Rezervasyon</option>
                    <option>Genel Bilgi</option>
                    <option>Yurt Ziyareti</option>
                    <option>Şikayet/Öneri</option>
                    <option>Diğer</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-900">Mesaj</span>
                  <textarea
                    value={form.message}
                    onChange={(event) => handleChange("message", event.target.value)}
                    rows={5}
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-600"
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                  >
                    Gönder
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="inline-flex w-full items-center justify-center rounded-full border border-brand-600 bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
                  >
                    WhatsApp ile Gönder
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-100 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-950">Hızlı Bilgi</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Formu doldurup bilgi talep edebilir veya doğrudan WhatsApp üzerinden bize yazabilirsiniz.
              </p>
              <div className="mt-8 space-y-5">
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Adres</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">Kabaoğlu Mah. Prof. Baki Komşuoğlu Bulvarı No:495 Kocaeli</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Telefon</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">+90 538 212 30 11</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">E-posta</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">info@zirvekizogrenciyurdu.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
