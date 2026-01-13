import '../styles/globals.css'
export const metadata = {
    title: 'Solar Installations — Save Energy, Save Money',
    description: 'Residential & commercial solar installations, subsidy guidance, and savings calculator.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className="min-h-screen flex flex-col">{children}</div>
            </body>
        </html>
    )
}
