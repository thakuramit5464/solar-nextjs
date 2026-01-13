import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-white shadow">
            <div className="container flex items-center justify-between py-4">
                <Link href="/" className="text-xl font-bold">SolarCo</Link>
                <nav className="space-x-6">
                    <Link href="/services">Services</Link>
                    <Link href="/subsidy">Subsidy</Link>
                    <Link href="/calculator">Calculator</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact" className="ml-4 text-white bg-green-600 px-3 py-2 rounded">Get Quote</Link>
                </nav>
            </div>
        </header>
    )
}
