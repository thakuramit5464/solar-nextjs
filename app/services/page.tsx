import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Services() {
    return (
        <main>
            <Header />
            <section className="container py-12">
                <h1 className="text-3xl font-bold mb-6">Our Services</h1>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded">
                        <h3 className="font-semibold">Residential Solar</h3>
                        <p>Rooftop installations, net-metering guidance, and maintenance plans.</p>
                    </div>
                    <div className="p-4 border rounded">
                        <h3 className="font-semibold">Commercial & Industrial</h3>
                        <p>Large-scale rooftops, on-grid and hybrid systems, O&M contracts.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
