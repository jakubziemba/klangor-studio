'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Nav from '@/app/components/global/Nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className='min-h-[500vh]'>
      <Nav />
      {children}
    </div>
  );
}
