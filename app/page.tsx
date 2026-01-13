import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function Home() {
    return (
        <main>
            <Header />
            <Hero
                title="Switch to Solar — Save on your electricity bills"
                subtitle="Reduce your monthly bills, benefit from government subsidies, and get a fast ROI with our tailored solar solutions."
                cta="Get Free Solar Quote"
            />

            <section className="container py-12">
                <h2 className="text-2xl font-bold mb-4">Why Solar?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 border rounded">₹ Savings — Typical 30-70% reduction</div>
                    <div className="p-6 border rounded">Government Subsidies — State & central schemes</div>
                    <div className="p-6 border rounded">ROI — 3–6 years typical payback</div>
                </div>
            </section>

            <section className="container py-8">
                <h3 className="text-xl font-semibold mb-3">Testimonials & Certifications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded">"Excellent installation" — Client A</div>
                    <div className="p-4 border rounded">MNRE Certified Partner</div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
