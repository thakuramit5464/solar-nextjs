"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header className="bg-white shadow">
            <div className="container flex items-center justify-between py-4">
                <Link href="/" className="text-xl font-bold">SolarCo</Link>

                <button
                    className="md:hidden p-2 rounded hover:bg-gray-100"
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/services">Services</Link>
                    <Link href="/subsidy">Subsidy</Link>
                    <Link href="/calculator">Calculator</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact" className="ml-4 text-white bg-green-600 px-3 py-2 rounded">Get Quote</Link>
                </nav>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden border-t">
                    <div className="container py-3 space-y-2">
                        <Link href="/services" className="block">Services</Link>
                        <Link href="/subsidy" className="block">Subsidy</Link>
                        <Link href="/calculator" className="block">Calculator</Link>
                        <Link href="/about" className="block">About</Link>
                        <Link href="/contact" className="block text-white bg-green-600 px-3 py-2 rounded inline-block">Get Quote</Link>
                    </div>
                </div>
            )}
        </header>
    )
}
