import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactForm from '../../components/ContactForm'

export default function Contact() {
    return (
        <main>
            <Header />
            <section className="container py-12">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <p>Phone / WhatsApp: +91-XXXXXXXXXX</p>
                        <p>Email: hello@solarco.example</p>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
