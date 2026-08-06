import PageHero from "@/components/shared/PageHero";
import ContactInfoCards from "@/components/iletisim/ContactInfoCards";
import ContactForm from "@/components/iletisim/ContactForm";
import ContactFaq from "@/components/iletisim/ContactFaq";
import LocationMap from "@/components/iletisim/LocationMap";

export default function IletisimPage() {
  return (
    <>
      <PageHero title="İletişim" crumb="Ana Sayfa / İletişim" />
      <ContactInfoCards />
      <ContactForm />
      <ContactFaq />
      <LocationMap />
    </>
  );
}
