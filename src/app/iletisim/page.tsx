import type { Metadata } from "next";
import ContactInfoCards from "@/components/iletisim/ContactInfoCards";
import ContactForm from "@/components/iletisim/ContactForm";
import ContactFaq from "@/components/iletisim/ContactFaq";
import LocationMap from "@/components/iletisim/LocationMap";

export const metadata: Metadata = {
  title: "İletişim | Kocaeli Umuttepe Zirve Kız Yurdu",
  description:
    "Kocaeli Umuttepe Zirve Kız Yurdu ile telefon, WhatsApp veya konum üzerinden hemen iletişime geçin; ziyaret ve rezervasyon için bize ulaşın.",
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
