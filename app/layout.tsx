import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Evolve8 Studio - Crafting Brands. Engineering Digital Experiences.',
  description: 'From startups to enterprises, we help you evolve your digital presence with data-driven strategies and custom technology.',
  keywords: 'web development, branding, digital marketing, mobile apps, ecommerce, SEO',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

