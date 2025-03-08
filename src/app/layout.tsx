import React from 'react';
import type { Metadata } from 'next';
import { nunito } from '@/config/fonts';

import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'Tiến Đạt & Thu An | Wedding',
  description: 'Tiến Đạt & Thu An Wedding Invitation',
  keywords: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
    >
      <body className={nunito.className + 'overflow-x-hidden'}>{children}</body>
    </html>
  );
}
