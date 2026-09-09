import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Auto Detailing | The Art of Preservation — Concept',
 description: 'Precision detailing and automotive protection. An independent automotive website concept by Ruzaiman.',
 robots: { index: false, follow: false },
 openGraph: { title: 'Auto Detailing — The Art of Preservation', description: 'An independent automotive detailing concept by Ruzaiman.', type: 'website', locale: 'en_MY' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="en" className="dark"><body>{children}</body></html>;
}
