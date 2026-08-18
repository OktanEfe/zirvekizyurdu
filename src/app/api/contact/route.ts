import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = "Zirve Kız Yurdu Web Sitesi <onboarding@resend.dev>";
const TO_EMAIL = "info@zirvekizogrenciyurdu.com";

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const { name, email, phone, subject = "Rezervasyon", message, website } = body || {};

    // Honeypot kontrolü: doldurulduysa sessizce kabul et (bot)
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Eksik alan(lar): name,email veya message" }, { status: 400 });
    }

    const cleanedName = String(name).trim();
    const cleanedEmail = String(email).trim();
    const cleanedMessage = String(message).trim();

    if (!cleanedName || !cleanedEmail || !cleanedMessage) {
      return NextResponse.json({ success: false, error: "Ad, e-posta ve mesaj alanları zorunludur." }, { status: 400 });
    }

    if (!emailRegex.test(cleanedEmail)) {
      return NextResponse.json({ success: false, error: "Geçersiz e-posta formatı" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      return NextResponse.json({ success: false, error: "E-posta servisi yapılandırılmamış" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family:system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#111;">
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad:</strong> ${escapeHtml(cleanedName)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(cleanedEmail)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(String(phone || "-").trim() || "-")}</p>
        <p><strong>Konu:</strong> ${escapeHtml(String(subject || "Rezervasyon"))}</p>
        <div style="margin-top:12px;"><strong>Mesaj:</strong>
          <div style="white-space:pre-wrap;margin-top:6px;">${escapeHtml(cleanedMessage)}</div>
        </div>
      </div>
    `;

    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: cleanedEmail,
      subject: `Web Sitesi İletişim Formu - ${String(subject || "Rezervasyon")}`,
      html,
    });

    if (response.error) {
      console.error("Resend error:", response.error);
      return NextResponse.json({ success: false, error: "Mail gönderimi sırasında hata oluştu." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("/api/contact error:", err);
    return NextResponse.json({ success: false, error: "Sunucu hatası" }, { status: 500 });
  }
}
