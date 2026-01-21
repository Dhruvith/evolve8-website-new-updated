'use client';

import { FloatingCTA } from './FloatingCTA';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FloatingCTA />
    </>
  );
}

