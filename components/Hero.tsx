"use client"
import { motion } from 'framer-motion'

export default function Hero({ title, subtitle, cta }: { title: string; subtitle: string; cta: string }) {
    return (
        <section className="bg-gradient-to-r from-green-50 to-white py-16">
            <div className="container">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                    <p className="text-lg text-gray-700 mb-6">{subtitle}</p>
                    <div>
                        <a href="/contact" className="inline-block bg-green-600 text-white px-6 py-3 rounded">{cta}</a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
