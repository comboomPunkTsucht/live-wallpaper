'use client';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';

function GetH2() {
  const searchParams = useSearchParams(); // For query string parameters
  const [myH2, setH2] = useState(
    decodeURIComponent(searchParams.get('h2') || '') ||
    'ITler/DJ/Producer aus Leidenschaft',
  );

  useEffect(() => {
    setH2(
      decodeURIComponent(searchParams.get('h2') || '') ||
      'ITler/DJ/Producer aus Leidenschaft',
    );
  }, [searchParams]);

  return myH2 === 'comboom.sucht' ? (
    <Image
      src="/Logo-transparet.PNG"
      alt="Logo"
      width={300}
      height={180}
    />
  ) : (
    <h2 className="my-16 text-white text-xl">{myH2}</h2>
  );
}

function GetH1() {
  const searchParams = useSearchParams(); // For query string parameters
  const [myH1, setH1] = useState(
    decodeURIComponent(searchParams.get('h1') || '') || 'Fabian Aps',
  );

  useEffect(() => {
    setH1(decodeURIComponent(searchParams.get('h1') || '') || 'Fabian Aps');
  }, [searchParams]);

  return (
    <h1 className="z-9 animate-title cursor-default whitespace-nowrap bg-secondary-foreground bg-clip-text font-display text-4xl text-edge-outline dark:text-nord-white light:text--nord-black duration-3000 sm:text-6xl md:text-9xl">
      {myH1}
    </h1>
  );
}

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <div className="hidden h-px w-screen animate-fade-left animate-glow bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground md:block" />
      <Suspense
        fallback={
          <h1 className="z-9 animate-title cursor-default whitespace-nowrap bg-secondary-foreground bg-clip-text font-display text-4xl text-edge-outline dark:text-nord-white light:text-black duration-3000 sm:text-6xl md:text-9xl">
            <Skeleton className="h-[5rem] w-[500px] rounded-full" />
          </h1>
        }
      >
        <GetH1 />
      </Suspense>
      <div className="hidden h-px w-screen animate-fade-right animate-glow bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground md:block" />
      <div className="animate-fade-in text-center">
        <Suspense
          fallback={
            <h2 className="my-16 dark:text-white light:text-black text-xl">
              <Skeleton className="h-[3.5rem] w-[500px] rounded-full" />
            </h2>
          }
        >
          <GetH2 />
        </Suspense>
      </div>
    </div>
  );
}
