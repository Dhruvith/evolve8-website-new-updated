'use client';

import { FloatingCTA } from './FloatingCTA';
import { SmoothScroll } from './SmoothScroll';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      {children}
      <FloatingCTA />
    </SmoothScroll>
  );
}

