import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Subsidy() {
    return (
        <main>
            <Header />
            <section className="container py-12">
                <h1 className="text-3xl font-bold mb-4">Government Subsidies (India)</h1>
                <p className="mb-4">This page explains national and state subsidy schemes such as PM Surya Ghar and state-specific slabs, eligibility and step-by-step process.</p>

                <article className="prose">
                    <h2>Eligibility</h2>
                    <ul>
                        <li>Residential owners of individual houses or flats (as per scheme)</li>
                        <li>Specific income / electrification criteria may apply per scheme</li>
                    </ul>

                    <h2>Typical Subsidy Slabs</h2>
                    <p>Slabs vary by state and system size; common patterns include higher subsidy for low-income households and smaller rooftop systems.</p>

                    <h2>Application Process</h2>
                    <ol>
                        <li>Check eligibility with local DISCOM / MNRE portal</li>
                        <li>Collect required documents (ID, property proof, electricity bills)</li>
                        <li>Apply via portal or through an authorized installer</li>
                        <li>Inspection and sanction, then installation</li>
                    </ol>

                    <h2>FAQ</h2>
                    <p>Documents: Aadhaar, latest electricity bill, property proof. Timeline: 4–12 weeks depending on state and workloads.</p>
                </article>
            </section>
            <Footer />
        </main>
    )
}
