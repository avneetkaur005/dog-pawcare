import ContactForm from '../components/ContactForm'
import SectionTitle from '../components/SectionTitle'

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <SectionTitle
        title="Contact PawCare"
        subtitle="Questions about adoption or dog care? Send a demo message below."
      />
      <ContactForm />
    </section>
  )
}
