import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

/**
 * Metadata
 */
export const metadata: Metadata = {
  title: 'Trang Chủ | Nextjs Starter',
};

/**
 * Page
 */
export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Image
          className="dark:invert"
          src="/logo-rec.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
          <li className="mb-2">
            Get started by editing{' '}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
    </div>
  );
}
