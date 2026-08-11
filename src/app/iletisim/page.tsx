import type { Metadata } from "next";
import ContactInfoCards from "@/components/iletisim/ContactInfoCards";
import ContactForm from "@/components/iletisim/ContactForm";
import ContactFaq from "@/components/iletisim/ContactFaq";
import LocationMap from "@/components/iletisim/LocationMap";
import { ogImage } from "@/lib/seo";

const title = "İletişim | Kocaeli Umuttepe Zirve Kız Yurdu";
const description =
  "Kocaeli Umuttepe Zirve Kız Yurdu ile telefon, WhatsApp veya konum üzerinden hemen iletişime geçin; kız öğrenci yurdu ziyaret ve rezervasyon için bize ulaşın.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: { title, description, images: ogImage },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-cover.jpg"] },
};

export default function IletisimPage() {
  return (
    <>
      <ContactInfoCards />
      <ContactForm />
      <ContactFaq />
      <LocationMap />
    </>
  );
}
