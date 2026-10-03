import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { validateEnv } from '@/lib/env';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: 'https://portfolio-bay-five-56.vercel.app',
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.png', // I will suggest you add this image soon
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Validate environment on layout render (server side)
  validateEnv();

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-slate-100 antialiased`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <footer className="py-10 border-t border-slate-800 text-center text-slate-500 text-sm">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/about" className="hover:text-indigo-400 transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
          </div >
          {siteConfig.footer}
        </footer>
      </body>
    </html>
  );
}
