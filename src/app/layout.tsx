import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import PageTransition from "@/components/shared/PageTransition";
import Footer from "@/components/shared/Footer";
import WhatsappButton from "@/components/shared/WhatsappButton";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zirve Kız Yurdu",
  description: "Zirve Kız Yurdu kurumsal tanıtım sitesi",
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
    <html lang="tr" className="h-full">
      <body className="min-h-full flex min-h-screen flex-col font-sans antialiased">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <WhatsappButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
