'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Introduction } from '@/components/Introduction';
import { WhatWeDo } from '@/components/WhatWeDo';
import { OurApproach } from '@/components/OurApproach';
import { WhyChoose } from '@/components/WhyChoose';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Introduction />
      <WhatWeDo />
      <OurApproach />
      <WhyChoose />
      <Footer />
    </main>
  );
}

