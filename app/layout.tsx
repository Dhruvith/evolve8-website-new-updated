import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { ClientProviders } from '@/components/ClientProviders';

export const metadata: Metadata = {
  title: 'Evolve8 Studio - Crafting Brands. Engineering Digital Experiences.',
  description: 'From startups to enterprises, we help you evolve your digital presence with data-driven strategies and custom technology.',
  keywords: 'web development, branding, digital marketing, mobile apps, ecommerce, SEO',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1BYR2PJD4N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1BYR2PJD4N');
          `}
        </Script>

        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}

