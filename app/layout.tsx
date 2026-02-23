import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
    title: {
        template: '%s',
        default: 'WebStar Studios | Business Systems & Strategy',
    },
    description: 'We help established businesses design and operate systems that improve lead quality, clarity, and execution. Principal, Business Systems & Strategy.',
    openGraph: {
        title: 'WebStar Studios',
        description: 'Business Systems & Strategy',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'WebStar Studios Logo',
            }
        ],
    },
    icons: {
        icon: '/favicon.png',
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-background text-text-body min-h-screen flex flex-col">
                <NavBar />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
