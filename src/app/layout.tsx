import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import PageTransition from "@/components/shared/PageTransition";
import Footer from "@/components/shared/Footer";
import WhatsappButton from "@/components/shared/WhatsappButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zirve Kız Yurdu",
  description: "Zirve Kız Yurdu kurumsal tanıtım sitesi",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className="h-full">
      <body className="min-h-full flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
