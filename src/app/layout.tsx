import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Header from "@/components/shared/Header";
import PageTransition from "@/components/shared/PageTransition";
import Footer from "@/components/shared/Footer";
import WhatsappButton from "@/components/shared/WhatsappButton";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";
import "./globals.css";

const siteUrl = "https://zirvekizogrenciyurdu.com";
const ogDescription =
  "Kocaeli Umuttepe Zirve Kız Yurdu; Kocaeli Üniversitesi'ne 100 metre mesafede, 29 yıllık tecrübeyle güvenli ve konforlu kız öğrenci yurdu hizmeti sunar.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zirve Kız Yurdu | Kocaeli Umuttepe Kız Öğrenci Yurdu",
    template: "%s | Zirve Kız Yurdu",
  },
  description: ogDescription,
  keywords: [
    "kız öğrenci yurdu",
    "Kocaeli kız yurdu",
    "Kocaeli Üniversitesi yurt",
    "Umuttepe kız yurdu",
    "güvenli kız öğrenci yurdu",
    "Kocaeli özel kız yurdu",
  ],
  openGraph: {
    title: "Zirve Kız Yurdu | Kocaeli Umuttepe Kız Öğrenci Yurdu",
    description: ogDescription,
    url: siteUrl,
    siteName: "Zirve Kız Yurdu",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "Zirve Kız Yurdu" }],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zirve Kız Yurdu | Kocaeli Umuttepe Kız Öğrenci Yurdu",
    description: ogDescription,
    images: ["/images/og-cover.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon_io/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon_io/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/favicon_io/site.webmanifest" },
      { rel: "icon", url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className="h-full bg-mist-50">
      <body className="min-h-full min-h-screen flex flex-col bg-mist-50 font-sans antialiased">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <WhatsappButton />
        </SmoothScrollProvider>
        <Analytics />

        {/* Google tag (gtag.js) — Ads + Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17423616788"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17423616788');
            gtag('config', 'G-L8CNTHSM99');
          `}
        </Script>
      </body>
    </html>
  );
}