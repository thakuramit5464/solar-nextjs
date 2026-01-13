"use client"
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Calculator() {
    const [bill, setBill] = useState(3000)
    const [savings, setSavings] = useState<number | null>(null)

    function estimate() {
        // Very rough estimate: 70% of bill saved with full offset
        const monthly = (bill * 0.7)
        const systemSizeKw = Math.max(1, Math.round((monthly * 12) / 9000)) // rough
        const paybackYears = Math.round((systemSizeKw * 60000) / (monthly * 12))
        setSavings(paybackYears)
    }

    return (
        <main>
            <Header />
            <section className="container py-12">
                <h1 className="text-2xl font-bold mb-4">Savings Calculator</h1>
                <div className="max-w-md space-y-4">
                    <label>Monthly electricity bill (₹)</label>
                    <input type="number" value={bill} onChange={e => setBill(Number(e.target.value))} className="w-full border p-2 rounded" />
                    <button onClick={estimate} className="bg-green-600 text-white px-4 py-2 rounded">Estimate</button>
                    {savings !== null && <div className="p-4 border rounded">Estimated payback period: {savings} years (rough)</div>}
                </div>
            </section>
            <Footer />
        </main>
    )
}
