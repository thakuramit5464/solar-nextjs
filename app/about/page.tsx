import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function About() {
    return (
        <main>
            <Header />
            <section className="container py-12">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p>We are a certified MNRE partner delivering residential and commercial solar projects with end-to-end service.</p>

                <h2 className="mt-6 font-semibold">Certifications</h2>
                <ul className="list-disc ml-5">
                    <li>MNRE partner</li>
                    <li>State DISCOM tie-ups</li>
                </ul>
            </section>
            <Footer />
        </main>
    )
}
