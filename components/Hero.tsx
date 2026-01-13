"use client"
import { motion } from 'framer-motion'

export default function Hero({ title, subtitle, cta }: { title: string; subtitle: string; cta: string }) {
    return (
        <section className="bg-gradient-to-r from-green-50 to-white py-12 md:py-16">
            <div className="container">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">{title}</h1>
                        <p className="text-base sm:text-lg text-gray-700 mb-5 max-w-2xl mx-auto md:mx-0">{subtitle}</p>
                        <div>
                            <a href="/contact" className="block md:inline-block w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded text-center">{cta}</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
