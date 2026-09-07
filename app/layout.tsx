import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'LUXÉ Signature | The Art of Preservation — Concept',
 description: 'Precision detailing and automotive protection in Klang. An independent website concept by R. Atelier, not the official LUXÉ Signature website.',
 robots: { index: false, follow: false },
 openGraph: { title: 'LUXÉ Signature — The Art of Preservation', description: 'An independent redesign concept by R. Atelier.', type: 'website', locale: 'en_MY' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="en" className="dark"><body>{children}</body></html>;
}
