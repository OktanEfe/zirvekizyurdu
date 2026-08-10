import ContactInfoCards from "@/components/iletisim/ContactInfoCards";
import ContactForm from "@/components/iletisim/ContactForm";
import ContactFaq from "@/components/iletisim/ContactFaq";
import LocationMap from "@/components/iletisim/LocationMap";

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
